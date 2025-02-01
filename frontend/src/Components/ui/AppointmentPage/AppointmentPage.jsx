import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dr1 from "../../../assets/images/Dr1.jpg";
import Dr2 from "../../../assets/images/Dr2.jpg";

const AppointmentPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Doctors");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Doctors",
    "General physicians",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
  ];

  const doctors = [
    {
      id: "dr-richard-james",
      name: "Dr. Richard James",
      specialty: "General Physician",
      experience: "15 years",
      rating: 4.8,
      availability: "Available Today",
      image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*",
      about: "Dr. James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fee: 50,
      qualifications: "MBBS",
    },

    
    {
      id: "dr-emily-larson",
      name: "Dr. Emily Larson",
      specialty: "Gynecologist",
      experience: "12 years",
      rating: 4.9,
      availability: "Next Available: Tomorrow",
      image: "https://plus.unsplash.com/premium_photo-1673953510158-174d4060db8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      about: "Dr. Larson specializes in women's health with a focus on preventive care and comprehensive treatment.",
      fee: 60,
      qualifications: "MBBS, MD",
    },
    // Add more doctors as needed
  ];

  // Filter doctors based on search query and active category
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All Doctors" || doctor.specialty === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle booking navigation
  const handleBookAppointment = (doctor) => {
    navigate(`/book-appointment/${doctor.id}`, { state: { doctor } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 md:p-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <Input
            placeholder="Search doctors..."
            className="max-w-2xl mx-auto mb-6"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold truncate">{doctor.name}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="ml-1 text-sm">{doctor.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">{doctor.specialty}</p>
                <p className="text-xs text-gray-500 mb-2">{doctor.experience} experience</p>
                <p className="text-xs text-green-600 mb-3">{doctor.availability}</p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-sm h-8"
                  onClick={() => handleBookAppointment(doctor)}
                >
                  Book Appointment
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;