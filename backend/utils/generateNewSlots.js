import cron from "node-cron";
import { Doctor } from "./models/doctor.js";

const generateNextDaySlots = async () => {
    const today = new Date().toISOString().split("T")[0]; // Format: "YYYY-MM-DD"
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split("T")[0];

    // Step 1: Remove expired slots (older than today)
    await Doctor.updateMany(
        {},
        { $pull: { appointments: { date: { $lt: today } } } } // Remove past slots
    );

    // Step 2: Generate new slots for tomorrow
    const newSlots = generateDailyTimeSlots(formattedDate);

    // Step 3: Add the new slots to all doctors
    await Doctor.updateMany(
        {},
        { $push: { appointments: { $each: newSlots } } } // Append new slots
    );

    console.log(`✅ New slots added for ${formattedDate}`);
};

// Run this function every night at midnight
cron.schedule("0 0 * * *", generateNextDaySlots);
