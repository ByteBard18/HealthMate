import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const appointmentSlotSchema = new Schema({
    date: {
        type: String, // Store as "YYYY-MM-DD"
        required: true,
    },
    timeSlot: {
        type: String, // Example: "09:00 - 09:30"
        required: true,
    },
    status: {
        type: String,
        enum: ["AVAILABLE", "BOOKED"],
        default: "AVAILABLE",
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        default: null, // Stores patient ID if booked
    },
});

const doctorSchema = new Schema(
    {
        doctorId: {
            type: String,
            required: true,
            unique: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            enum: ["MALE", "FEMALE"],
            required: true,
        },
        experienceInYears: {
            type: Number,
            required: true,
        },
        qualification: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        specialist: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        patients: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
        }],
        hospitals: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        }],
        appointments: [appointmentSlotSchema], // Store all slots here
    },
    { timestamps: true }
);

doctorSchema.plugin(mongooseAggregatePaginate);

export const Doctor = mongoose.model("Doctor", doctorSchema);
