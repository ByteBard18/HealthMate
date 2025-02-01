import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { healthcheckRouter } from "./routes/healthcheck.routers.js";
// import { authRouter } from "./routes/auth.routers.js";
import { doctorRouter } from "./routes/doctor.routers.js";
import { patientRouter } from "./routes/patient.routers.js";
// import { appointmentRouter } from "./routes/appointment.routers.js";
// import { medicalRecordRouter } from "./routes/medicalRecord.routers.js";

const app = express();

// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Set your allowed origin here (e.g., "http://localhost:3000")
    credentials: true
}));

// Middleware to parse JSON and URL encoded data
app.use(express.json({
    limit: "16kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

// Static files (optional, if you have any static content)
app.use(express.static("public"));

// Cookie parser
app.use(cookieParser());

// Healthcheck route
app.use("/api/v1", healthcheckRouter);

// Authentication routes (Login, Signup, etc.)
// app.use("/api/v1/auth", authRouter);

// Doctor-related routes
app.use("/api/v1/doctor", doctorRouter);

// Patient-related routes
app.use("/api/v1/patient", patientRouter);

// Appointment-related routes
// app.use("/api/v1/appointment", appointmentRouter);

// Medical record-related routes
// app.use("/api/v1/medical-record", medicalRecordRouter);

// Default error handling (if no route matches)
app.all("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "Route not found"
    });
});

export default app;
