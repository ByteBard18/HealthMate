export const generateDailyTimeSlots = async (date) => {
    const slots = [];
    let startTime = 9 * 60; // 9:00 AM in minutes
    const endTime = 17 * 60; // 5:00 PM in minutes

    while (startTime < endTime) {
        const endSlot = startTime + 30; // 30-minute slot
        const slotTime = `${String(Math.floor(startTime / 60)).padStart(2, '0')}:${String(startTime % 60).padStart(2, '0')} - ${String(Math.floor(endSlot / 60)).padStart(2, '0')}:${String(endSlot % 60).padStart(2, '0')}`;

        slots.push({
            date: date,
            timeSlot: slotTime,
            status: "AVAILABLE",
            patient: null,
        });

        startTime = endSlot; // Move to next time slot
    }

    return slots;
};


