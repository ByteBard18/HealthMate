import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "../src/pages/Dashboard/Dashboard";
import Appointment from "../src/pages/Appointment/Appointment";
import DoctorBooking from "../src/pages/Booking/Booking";
import Home from "../src/pages/Home/Home";
import ProtectedRoute from './components/ProtectedRoute';
import SignInPage from './components/ui/SignIn/SignIn';
import SignUpPage from './components/ui/SignUpPage/SignUpPage';
import Profile from "../src/pages/Profile/Profile";
import ProfileForm from "../src/pages/ProfileForm/ProfileForm"
import AI from './pages/HealthAI/AI';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        {/* Wrap the protected route with the ProtectedRoute component */}
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/appointment" element={<ProtectedRoute element={<Appointment />} />} />
        <Route path="/book-appointment/:doctorId" element={<ProtectedRoute element={<DoctorBooking />} />} />
        <Route path="/profileform" element={<ProtectedRoute element={<ProfileForm />} />} />
        <Route path="/healthcare" element={<ProtectedRoute element={<HealthCare />} />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
      {/* <Router>
    </Router>   */}
    </div>
  );
}

export default App;

