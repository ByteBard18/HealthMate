import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { Doctor } from "../models/doctor.models.js";
import { Patient } from "../models/patient.models.js";

// ✅ Authenticate User via JWT Token
export const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
        throw new ApiError(401, {}, "Access Denied! No Token Provided.");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        throw new ApiError(401, {}, "Invalid or Expired Token!");
    }
};

// ✅ Check if the user is a Doctor
export const isDoctor = async (req, res, next) => {
    const doctor = await Doctor.findById(req.user?.doctorId);
    if (!doctor) {
        throw new ApiError(403, {}, "Access Denied! Doctors Only.");
    }
    next();
};

// ✅ Check if the user is a Patient
export const isPatient = async (req, res, next) => {
    const patient = await Patient.findById(req.user?.patientId);
    if (!patient) {
        throw new ApiError(403, {}, "Access Denied! Patients Only.");
    }
    next();
};
