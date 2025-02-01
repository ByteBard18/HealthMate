import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "../src/pages/Dashboard/Dashboard";
import Appointment from "../src/pages/Appointment/Appointment"
import Home from "../src/pages/Home/Home";
import Profile from "./Components/ui/ProfilePage/ProfilePage";



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path='/appointment' element={<Appointment/>} />
      </Routes>
    </Router>  
    </div>
  );
}

export default App;