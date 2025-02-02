import { AsyncHandler } from "../utils/AsyncHandler.js";
import { Patient } from "../models/patient.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// ✅ Register Patient (Optimized)
const registerPatient = AsyncHandler(async (req, res) => {
    const { patientId, fullname, email, age, dateOfBirth, gender, bloodGroup, address, city, state, pincode, ethnicity, maritialStatus, occupation, allergies, surgeries, medicalConditions } = req.body;

    // ✅ Check if the patient already exists
    const existingPatient = await Patient.findOne({ patientId });
    if (existingPatient) {
        throw new ApiError(409, {}, "Patient already exists");
    }

    // ✅ Create a new patient
    const newPatient = await Patient.create({
        patientId,
        fullname,
        email,
        age,
        dateOfBirth,
        gender,
        bloodGroup,
        address,
        city,
        state,
        pincode,
        ethnicity,
        maritialStatus,
        occupation,
        allergies,
        surgeries,
        medicalConditions,
    });

    return res.status(201).json(new ApiResponse(201, newPatient, "Patient registered successfully!"));
});

// ✅ Update Patient Details
const updatePatientDetails = AsyncHandler(async (req, res) => {
    const { patientId } = req.params;

    if (!patientId) {
        throw new ApiError(401, {}, "Patient ID is required");
    }

    // ✅ Check if patient exists
    const patient = await Patient.findOne({ _id: patientId });
    if (!patient) {
        throw new ApiError(404, {}, "Patient not found");
    }

    // ✅ Update patient fields dynamically
    const updatedPatient = await Patient.findByIdAndUpdate(
        patientId,
        { $set: req.body },  // Update only provided fields
        { new: true, runValidators: true } // Return updated document, apply validation
    );

    return res.status(200).json(new ApiResponse(200, updatedPatient, "Patient details updated successfully!"));
});

// ✅ Get Patient Profile (Fixed `findOne()`)
const patientProfilePage = AsyncHandler(async (req, res) => {
    // const patientId = req.user?._id;  // ✅ Extract correct `patientId`
    const { patientId } = req.params

    if (!patientId) {
        throw new ApiError(401, {}, "Patient ID not found");
    }

    const patient = await Patient.findOne({ _id: patientId });
    if (!patient) {
        throw new ApiError(404, {}, "Patient not found");
    }

    return res.status(200).json(new ApiResponse(200, patient, "Patient profile fetched successfully!"));
});

// ✅ Get Patient Dashboard (Fixed `lookup`, Optimized)
const patientDashboard = AsyncHandler(async (req, res) => {
    // const patientId = req.user?._id;  // ✅ Extract correct `patientId`
    const { patientId } = req.params

    if (!patientId) {
        throw new ApiError(401, {}, "Patient ID not found");
    }

    const dashboardDetails = {};

    const recentVisits = await Patient.aggregate([
        {
            $match: { _id: patientId }
        },
        {
            $lookup: {
                from: "medicalrecords", 
                localField: "_id",
                foreignField: "patientId",
                as: "recentReports",
                pipeline: [
                    {
                        $match: { nextAppointment: { $ne: null, $gte: new Date() } }
                    },
                    {
                        $sort: { nextAppointment: 1 }
                    },
                    {
                        $limit: 1
                    },
                    {
                        $project: { _id: 1, nextAppointment: 1, doctorId: 1 } // ✅ Optimize projection
                    }
                ]
            }
        }
    ]);

    // ✅ Fix incorrect variable in response
    dashboardDetails.recentVisits = recentVisits.length === 0 ? [] : recentVisits[0];

    return res.status(200).json(new ApiResponse(200, dashboardDetails, "Patient dashboard fetched successfully!"));
});

export {
    registerPatient,
    patientProfilePage,
    patientDashboard,
    updatePatientDetails
};
