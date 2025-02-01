import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home,
  User,
  Pill,
  Syringe,
  Stethoscope,
  Heart,
  Building2,
  Calendar,
  Activity
} from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">HealthMate</h2>
        
        <nav className="space-y-2">
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg">
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </div>
          
          {[
            { icon: <User className="w-5 h-5" />, label: "Profile" },
            { icon: <Pill className="w-5 h-5" />, label: "Medications" },
            { icon: <Syringe className="w-5 h-5" />, label: "Vaccinations" },
            { icon: <Stethoscope className="w-5 h-5" />, label: "Check-ups" },
            { icon: <Building2 className="w-5 h-5" />, label: "Hospitals" },
            { icon: <Calendar className="w-5 h-5" />, label: "Appointments" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-6">Welcome back, John!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Today's Medications */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Pill className="w-5 h-5" />
                Today's Medications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-sm">Vitamin D</span>
                  <span className="text-sm text-gray-500">8:00 AM</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm">Calcium</span>
                  <span className="text-sm text-gray-500">2:00 PM</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-sm font-medium">Dr. Smith - General Checkup</p>
                <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
              </div>
            </CardContent>
          </Card>

          {/* Health Metrics */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Health Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-sm">Blood Pressure</p>
                <p className="text-lg font-medium">120/80</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;