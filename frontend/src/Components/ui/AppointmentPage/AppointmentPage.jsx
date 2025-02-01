import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AppointmentPage = () => {
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
      name: "Dr. Richard James",
      specialty: "General Physician",
      experience: "15 years",
      rating: 4.8,
      availability: "Available Today",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Dr. Emily Larson",
      specialty: "Gynecologist",
      experience: "12 years",
      rating: 4.9,
      availability: "Next Available: Tomorrow",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Dr. Sarah Patel",
      specialty: "Dermatologist",
      experience: "10 years",
      rating: 4.7,
      availability: "Available Today",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Dr. Christopher Lee",
      specialty: "Pediatrician",
      experience: "8 years",
      rating: 4.6,
      availability: "Next Available: Monday",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Dr. Richard James",
      specialty: "General Physician",
      experience: "15 years",
      rating: 4.8,
      availability: "Available Today",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Dr. Emily Larson",
      specialty: "Gynecologist",
      experience: "12 years",
      rating: 4.9,
      availability: "Next Available: Tomorrow",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Dr. Sarah Patel",
      specialty: "Dermatologist",
      experience: "10 years",
      rating: 4.7,
      availability: "Available Today",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Dr. Christopher Lee",
      specialty: "Pediatrician",
      experience: "8 years",
      rating: 4.6,
      availability: "Next Available: Monday",
      image: "/api/placeholder/200/200"
    },
  ];

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
          {doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
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