import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate, { } from "mongoose-aggregate-paginate-v2"

const patientSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    age: {
        type: Number,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHERS"],
        required: true
    },
    bloodGroup: {
        type: String,
        trim: true,
        required: true,
    },
    address: {
        type: [],
        required: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    pincode: {
        type: Number,
        required: true
    },
    ethnicity: {
        type: String,
        index: true,
        required: true,
        trim: true
    },
    maritialStatus: {
        type: String,
        enum: ["MARRIED", "UNMARRIED"],
        required: true
    },
    occupation: {
        type: String,
        required: true,
        trim: true
    },
    allergies: {
        type: [],
        default: []
    },
    surgeries: {
        type: [],
        default: []
    },
    medicalConditions: {
        type: [],
        default: []
    },
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }],
    hospitals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }]
}, { timestamps: true })

patientSchema.plugin(mongooseAggregatePaginate)

export const Patient = mongoose.model("Patient", patientSchema)