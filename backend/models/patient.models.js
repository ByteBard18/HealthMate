import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const patientSchema = new Schema({
    patientId: {
        type: String,
        required: true
    },
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
        type: Array,
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
        type: Array,
        default: []
    },
    surgeries: {
        type: Array,
        default: []
    },
    medicalConditions: {
        type: Array,
        default: []
    },
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        default: []
    }],
    hospitals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        default: []
    }]
}, { timestamps: true });

patientSchema.plugin(mongooseAggregatePaginate);

export const Patient = mongoose.model("Patient", patientSchema);
