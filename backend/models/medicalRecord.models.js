import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate, { } from "mongoose-aggregate-paginate-v2"

const medicalRecordSchema = new Schema({
    patiendId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    examinedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    examinedAt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    complication: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    parameters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Parameter",
    }],
    prescription: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medication"
    }],
    nextAppointment: {
        type: Date,
        default: null
    }
}, { timestamps: true })

medicalRecordSchema.plugin(mongooseAggregatePaginate)

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)