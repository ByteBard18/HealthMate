// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/Components/ui/button/Button";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <h1>HealthMate</h1>
//         <div className="button-container">
//           <Link to="/">
//             <Button variant="ghost" className="button button-ghost">Home</Button>
//           </Link>
//           <Link to="/features">
//             <Button variant="ghost" className="button button-ghost">Features</Button>
//           </Link>
//           <Link to="/dashboard">
//             <Button variant="ghost" className="button button-ghost">Dashboard</Button>
//           </Link>
//           <Button variant="default" className="button button-default">
//             <SignedOut>
//               <SignInButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button/Button";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import axios from "axios";  // Import Axios
import "./Navbar.css";

const Navbar = () => {
  const { user } = useUser();  
  useEffect(() => {
    if (user) {
      // Log the user data to the console
      console.log("User Data:", user);

      // Send user data to the backend using Axios
      axios.post("http://localhost:5000/api/userData", {
        email: user.email,
        fullName: user.fullName,
        
      })
      .then(response => {
        console.log("Data sent to the backend successfully", response.data);
      })
      .catch(error => {
        console.error("Error sending data to the backend", error);
      });
    }
  }, [user]); 
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1>HealthMate</h1>
        <div className="button-container">
          <Link to="/">
            <Button variant="ghost" className="button button-ghost">Home</Button>
          </Link>
          <Link to="/features">
            <Button variant="ghost" className="button button-ghost">Features</Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="ghost" className="button button-ghost">Dashboard</Button>
          </Link>
          <Button variant="default" className="button button-default">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
