import mongoose, { Schema } from "mongoose";

const parameterSchema = new Schema({
    reportId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalRecord"
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    value: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    }
}, { timestamps: true })

export const Parameter = mongoose.model("Parameter", parameterSchema)