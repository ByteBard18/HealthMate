import express from "express";
import { 
    registerPatient, 
    patientProfilePage, 
    patientDashboard, 
    updatePatientDetails
} from "../controllers/patient.controllers.js";
// import { authMiddleware, isPatient } from "../middlewares/auth.middlewares.js";

const router = express.Router();

// ✅ Register Patient (Public)
router.post("/register", registerPatient);

router.put("/update/:patientId", updatePatientDetails);

// ✅ Get Patient Profile (Protected - Patient Only)
router.get("/profile/:patientId", patientProfilePage);

// ✅ Get Paitent Dashboard (Protected - Patient Only)
router.get("/dashboard/:patientId", patientDashboard);

// ✅ Book Appointment (Protected - Patient Only)
// router.post("/:patientId/book/:doctorId", bookAppointment);

// // ✅ Cancel Appointment (Protected - Patient Only)
// router.put("/:patientId/cancel/:doctorId", cancelAppointment);

// // ✅ View Medical Records (Protected - Patient Only)
// router.get("/records", viewMedicalRecords);

export {router as patientRouter};
