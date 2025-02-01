import express from "express";
import { 
    registerPatient, 
    patientProfilePage, 
    searchDoctors, 
    bookAppointment, 
    cancelAppointment, 
    viewMedicalRecords 
} from "../controllers/patient.controllers.js";
import { authMiddleware, isPatient } from "../middlewares/auth.middlewares.js";

const router = express.Router();

// ✅ Register Patient (Public)
router.post("/register", registerPatient);

// ✅ Get Patient Profile (Protected - Patient Only)
router.get("/profile", authMiddleware, isPatient, patientProfilePage);

// ✅ Search for Doctors (Protected - Patient Only)
router.get("/search", authMiddleware, searchDoctors);

// ✅ Book Appointment (Protected - Patient Only)
router.post("/:patientId/book/:doctorId", authMiddleware, isPatient, bookAppointment);

// ✅ Cancel Appointment (Protected - Patient Only)
router.put("/:patientId/cancel/:doctorId", authMiddleware, isPatient, cancelAppointment);

// ✅ View Medical Records (Protected - Patient Only)
router.get("/records", authMiddleware, isPatient, viewMedicalRecords);

export {router as patientRouter};
