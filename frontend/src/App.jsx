import Home from "../src/pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Components/ui/ProfilePage/ProfilePage";



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>  
    </div>
  );
}
export default App;


