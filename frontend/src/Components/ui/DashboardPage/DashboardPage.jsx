import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home,
  User,
  Pill,
  Syringe,
  Stethoscope,
  Building2,
  Calendar,
  Activity,
  Menu,
  X
} from "lucide-react";

const DashboardPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Dashboard", path: "/dashboard" },
    { icon: <User className="w-5 h-5" />, label: "Profile", path: "/profile" },
    { icon: <Pill className="w-5 h-5" />, label: "Medications", path: "/medications" },
    { icon: <Syringe className="w-5 h-5" />, label: "Vaccinations", path: "/vaccinations" },
    { icon: <Stethoscope className="w-5 h-5" />, label: "Check-ups", path: "/checkups" },
    { icon: <Building2 className="w-5 h-5" />, label: "Hospitals", path: "/hospitals" },
    { icon: <Calendar className="w-5 h-5" />, label: "Appointments", path: "/appointment" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-sm"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed md:static inset-0 z-40
        transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:transform-none transition-transform duration-200 ease-in-out
        w-64 bg-white p-4 shadow-sm overflow-y-auto
      `}>
        <h2 className="text-xl font-semibold mb-6">HealthMate</h2>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <div
              key={item.path}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer
                transition-colors duration-200
                ${location.pathname === item.path 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}
              `}
              onClick={() => handleNavigation(item.path)}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 pt-16 md:pt-8">
        <h1 className="text-2xl font-semibold mb-6">Welcome back, John!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Pill className="w-5 h-5" />
                Today's Medications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span className="text-sm">Vitamin D</span>
                  <span className="text-sm text-gray-500">8:00 AM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Calcium</span>
                  <span className="text-sm text-gray-500">2:00 PM</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-sm font-medium">Dr. Smith - General Checkup</p>
                <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Health Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-sm">Blood Pressure</p>
                <p className="text-lg font-medium">120/80</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardPage;