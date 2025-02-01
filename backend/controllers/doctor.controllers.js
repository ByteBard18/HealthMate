import { Doctor } from "../models/doctor.models.js";
import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { generateDailyTimeSlots } from "../utils/generateSlots.js";

// ✅ Register Doctor (Fixed findOne() and check condition)
const registerDoctor = AsyncHandler(async (req, res) => {
    const { doctorId, fullname, age, dateOfBirth, gender, experienceInYears, qualification, specialist } = req.body;

    const existingDoctor = await Doctor.findOne({ doctorId });
    if (existingDoctor) {
        throw new ApiError(409, {}, "Doctor already exists");
    }

    const slots = generateDailyTimeSlots(new Date().toISOString().split("T")[0]);

    const newDoctor = await Doctor.create({
        doctorId,
        fullname,
        age,
        dateOfBirth,
        gender,
        experienceInYears,
        qualification,
        specialist,
        slots
    });

    return res.status(201).json(new ApiResponse(201, newDoctor, "Doctor registered successfully!"));
});

// ✅ Get Doctor Profile (Fixed findOne())
const doctorProfilePage = AsyncHandler(async (req, res) => {
    // const doctorId = req.user?.doctorId;
    const { doctorId } = req.params

    if (!doctorId) {
        throw new ApiError(401, {}, "Doctor ID not found");
    }

    const doctor = await Doctor.findOne({ doctorId });
    if (!doctor) {
        throw new ApiError(404, {}, "Doctor not found");
    }

    return res.status(200).json(new ApiResponse(200, doctor, "Doctor profile fetched successfully!"));
});

// ✅ Get Doctor Dashboard (Optimized Aggregation)
const doctorDashboard = AsyncHandler(async (req, res) => {
    // const doctorId = req.user?.doctorId;
    const {doctorId} = req.params
    if (!doctorId) {
        throw new ApiError(401, {}, "Doctor ID not found");
    }

    const dashboardDetails = await Doctor.aggregate([
        { $match: { _id: doctorId } },
        {
            $lookup: {
                from: "medicalrecords",
                localField: "_id",
                foreignField: "examinedBy",
                as: "appointments",
                pipeline: [
                    { $match: { nextAppointment: { $ne: null, $gte: new Date() } } },
                    { $sort: { nextAppointment: 1 } }
                ]
            }
        },
        {
            $lookup: {
                from: "medicalrecords",
                localField: "_id",
                foreignField: "examinedBy",
                as: "medicalReports"
            }
        },
        {
            $project: {
                _id: 1,
                fullname: 1,
                specialist: 1,
                appointments: 1,
                medicalReports: 1
            }
        }
    ]);

    return res.status(200).json(new ApiResponse(200, dashboardDetails[0] || {}, "Dashboard details fetched successfully!"));
});

// ✅ Search Doctor by ID (Fixed validation)
const searchDoctorsById = AsyncHandler(async (req, res) => {
    // const patientId = req.user?.patientId;
    const { doctorId } = req.params;

    // if (!patientId) {
    //     throw new ApiError(401, {}, "Patient ID not found");
    // }

    const doctor = await Doctor.find({doctorId});
    if (!doctor) {
        throw new ApiError(404, {}, "Doctor not found");
    }

    return res.status(200).json(new ApiResponse(200, doctor, "Doctor profile fetched successfully!"));
});

// ✅ Search Doctor by Speciality (Returns empty array if no doctors found)
const searchDoctorsBySpeciality = AsyncHandler(async (req, res) => {
    const patientId = req.user?.patientId;
    const { speciality } = req.params;

    if (!patientId) {
        throw new ApiError(401, {}, "Patient ID not found");
    }

    const doctors = await Doctor.find({ specialist: speciality });

    return res.status(200).json(new ApiResponse(200, doctors, doctors.length ? "Doctors fetched successfully!" : "No doctors found for this speciality."));
});

// ✅ Book Appointment (Fixed doctor slots update)
const bookAppointment = AsyncHandler(async (req, res) => {
    const { patientId, doctorId } = req.params;
    const { date, timeSlot } = req.body;

    if ([patientId, doctorId, date, timeSlot].some(field => !field)) {
        throw new ApiError(400, {}, "All fields are required");
    }

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
        throw new ApiError(404, {}, "Doctor not found");
    }

    const slotIndex = doctor.slots.findIndex(slot => slot.date === date && slot.timeSlot === timeSlot);

    if (slotIndex === -1 || doctor.slots[slotIndex].status !== "AVAILABLE") {
        throw new ApiError(400, {}, "Selected slot is unavailable");
    }

    doctor.slots[slotIndex].status = "BOOKED";
    doctor.slots[slotIndex].patient = patientId;

    await doctor.save();

    return res.status(200).json(new ApiResponse(200, {}, "Appointment booked successfully!"));
});

// ✅ Cancel Appointment (Fixed slot release logic)
const cancelAppointment = AsyncHandler(async (req, res) => {
    const { patientId, doctorId } = req.params;
    const { date, timeSlot } = req.body;

    if ([patientId, doctorId, date, timeSlot].some(field => !field)) {
        throw new ApiError(400, {}, "All fields are required");
    }

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
        throw new ApiError(404, {}, "Doctor not found");
    }

    const slotIndex = doctor.slots.findIndex(slot => slot.date === date && slot.timeSlot === timeSlot);

    if (slotIndex === -1 || doctor.slots[slotIndex].status !== "BOOKED" || String(doctor.slots[slotIndex].patient) !== String(patientId)) {
        throw new ApiError(403, {}, "You cannot cancel this appointment");
    }

    doctor.slots[slotIndex].status = "AVAILABLE";
    doctor.slots[slotIndex].patient = null;

    await doctor.save();

    return res.status(200).json(new ApiResponse(200, {}, "Appointment cancelled successfully!"));
});

export {
    registerDoctor,
    doctorProfilePage,
    doctorDashboard,
    searchDoctorsById,
    searchDoctorsBySpeciality,
    bookAppointment,
    cancelAppointment
};
