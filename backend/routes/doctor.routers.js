import express from "express";
import {
    registerDoctor,
    doctorProfilePage,
    doctorDashboard,
    searchDoctorsById,
    searchDoctorsBySpeciality,
    bookAppointment,
    cancelAppointment
} from "../controllers/doctor.controllers.js";
import { authMiddleware, isDoctor } from "../middlewares/auth.middlewares.js";

const router = express.Router();

// ✅ Register Doctor (Public)
router.post("/register", registerDoctor);

// ✅ Get Doctor Profile (Protected - Doctor Only)
router.get("/profile", authMiddleware, isDoctor, doctorProfilePage);

// ✅ Get Doctor Dashboard (Protected - Doctor Only)
router.get("/dashboard", authMiddleware, isDoctor, doctorDashboard);

// ✅ Search Doctor by ID (Protected - Patient Only)
router.get("/search/id/:doctorId", authMiddleware, searchDoctorsById);

// ✅ Search Doctors by Speciality (Protected - Patient Only)
router.get("/search/speciality/:speciality", authMiddleware, searchDoctorsBySpeciality);

// ✅ Book Appointment (Protected - Patient Only)
router.post("/:patientId/book/:doctorId", authMiddleware, bookAppointment);

// ✅ Cancel Appointment (Protected - Patient Only)
router.put("/:patientId/cancel/:doctorId", authMiddleware, cancelAppointment);

export { router as doctorRouter };
