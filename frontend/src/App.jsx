import Home from "../src/pages/Home/Home";
<<<<<<< Updated upstream
import { Button } from './components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
// import "./styles/globals.css";
=======
import Profile from "../src/pages/Profile/Profile";
import ProfileForm from "../src/pages/ProfileForm/ProfileForm";
import ProtectedRoute from './components/ProtectedRoute';
import SignInPage from './components/ui/SignIn/SignIn';
import SignUpPage from './components/ui/SignUpPage/SignUpPage';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <Home />      
=======
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
      </Routes>
>>>>>>> Stashed changes
    </div>
  );
}
export default App;


<<<<<<< Updated upstream
=======
export default App;
>>>>>>> Stashed changes
