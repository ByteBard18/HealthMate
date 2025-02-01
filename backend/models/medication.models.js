import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate, { } from "mongoose-aggregate-paginate-v2"

const medicationSchema = new Schema({
    recordId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalRecord"
    },
    medicine: {
        type: String,
        required: true
    },
    dosage: {
        type: String,
        enum: ["MORNING", "AFTERNOON", "EVENING"],
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["ACTIVE", "EXPIRED"],
        default: "ACTIVE"
    }
}, { timestamps: true })

medicationSchema.plugin(mongooseAggregatePaginate)

export const Medication = mongoose.model("Medication", medicationSchema)

