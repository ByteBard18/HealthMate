import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const BookingPage = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { doctorId } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (state && state.doctor) {
      setDoctor(state.doctor);
    }
  }, [state]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  const dates = [
    { day: "WED", date: "4", month: "Mar" },
    { day: "THU", date: "5", month: "Mar" },
    { day: "FRI", date: "6", month: "Mar" },
    { day: "SAT", date: "7", month: "Mar" },
    { day: "SUN", date: "8", month: "Mar" },
    { day: "MON", date: "9", month: "Mar" },
    { day: "TUE", date: "10", month: "Mar" },
  ];

  const timeSlots = [
    "05:00 pm",
    "05:30 pm",
    "06:00 pm",
    "06:30 pm",
    "07:00 pm",
    "07:30 pm",
    "08:00 pm",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Doctor Profile Card */}
        <Card className="mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-72 h-72 bg-blue-500 relative">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold">{doctor.name}</h2>
                <Badge variant="secondary" className="h-5">
                  <Check className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-gray-600 mb-4">
                {doctor.qualifications} • {doctor.specialty} • {doctor.experience}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-gray-600 text-sm">{doctor.about}</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-600 text-sm">Appointment fee:</span>
                  <span className="font-semibold ml-2">${doctor.fee}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Booking Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Booking slots</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 mb-6">
            {dates.map((date) => (
              <Button
                key={date.date}
                variant={selectedDate === date.date ? "default" : "outline"}
                className="h-auto py-3 flex flex-col"
                onClick={() => setSelectedDate(date.date)}
              >
                <span className="text-sm">{date.day}</span>
                <span className="text-lg font-bold">{date.date}</span>
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                className="w-full"
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>

          <Button
            className="w-full sm:w-auto px-8 bg-blue-600 hover:bg-blue-700"
            disabled={!selectedDate || !selectedTime}
          >
            Book an appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;