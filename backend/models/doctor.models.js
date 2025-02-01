import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate, { } from "mongoose-aggregate-paginate-v2"

const doctorSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true,
            lowercase: true
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            enum: ["MALE", "FEMALE"],
            required: true
        },
        experienceInYears: {
            type: Number,
            required: true
        },
        qualification: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        specialist: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        patients: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient"
        }],
        hospitals: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }]
    },
    { timestamps: true }
);

doctorSchema.plugin(mongooseAggregatePaginate)

export const Doctor = mongoose.model("Doctor", doctorSchema)

