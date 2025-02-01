import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate, { } from "mongoose-aggregate-paginate-v2"

const hospitalSchema = new Schema({
    name: {
        type: String,
        required: true,
        index: true,
        lowercase: true
    },
    description: {
        type: String,
        // required: true,
        default: "",
        trim: true,
        lowercase: true
    },
    ownedBy: {
        type: String,
        enum: ["PUBLIC", "PRIVATE", "PUBLIC-PRIVATE"],
        required: true
    },
    address: {
        type: [],
        required: true,
    },
    city: {
        type: String,
        required: true,
        index: true,
        lowercase: true
    },
    state: {
        type: String,
        required: true,
        index: true,
        lowercase: true
    },
    category: {
        type: String,
        enum: ["DISPENSARY", "CLINIC", "MULTISPECIALITY"],
        required: true,
        index: true
    },
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    }],
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }]
}, { timestamps: true })

hospitalSchema.plugin(mongooseAggregatePaginate)

export const Hospital = new mongoose.model("Hospital", hospitalSchema)