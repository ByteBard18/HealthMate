import express from "express";
import {
    registerDoctor,
    doctorProfilePage,
    doctorDashboard,
    searchDoctorsById,
    searchDoctorsBySpeciality,
    bookAppointment,
    cancelAppointment,
    updateDoctorDetails
} from "../controllers/doctor.controllers.js";
// import { authMiddleware, isDoctor } from "../middlewares/auth.middlewares.js";

const router = express.Router();

// ✅ Register Doctor (Public)
router.post("/register", registerDoctor);

router.put("/update/:doctorId", updateDoctorDetails)

// ✅ Get Doctor Profile (Protected - Doctor Only)
router.get("/profile/:doctorId", doctorProfilePage);

// ✅ Get Doctor Dashboard (Protected - Doctor Only)
router.get("/dashboard/:doctorId",  doctorDashboard);

// ✅ Search Doctor by ID (Protected - Patient Only)
router.get("/search/id/:doctorId", searchDoctorsById);

// ✅ Search Doctors by Speciality (Protected - Patient Only)
router.get("/search/speciality/:speciality", searchDoctorsBySpeciality);

// ✅ Book Appointment (Protected - Patient Only)
router.post("/:patientId/book/:doctorId", bookAppointment);  //untested route

// ✅ Cancel Appointment (Protected - Patient Only)
router.put("/:patientId/cancel/:doctorId", cancelAppointment); //untested route

export { router as doctorRouter };
