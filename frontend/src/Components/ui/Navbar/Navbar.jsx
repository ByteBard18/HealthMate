import React from "react";
import { Button } from "@/Components/ui/button/Button";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { FaHome, FaHeartbeat, FaUserMd, FaSignInAlt } from 'react-icons/fa'; // Health-related icons
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="navbar-logo">HealthMate</h1>
        <div className="button-container">
          <Button variant="ghost" className="button button-ghost">
            <FaHome className="icon" />
            Home
          </Button>
          <Button variant="ghost" className="button button-ghost">
            <FaHeartbeat className="icon" />
            Features
          </Button>
          <Button variant="ghost" className="button button-ghost">
            <FaUserMd className="icon" />
            Dashboard
          </Button>
          <Button variant="ghost" className="button button-ghost">
            <FaHeartbeat className="icon" />
            Health Tips
          </Button>
          <Button variant="default" className="button button-default">
            <SignedOut>
              <SignInButton className="sign-in-button">
                <FaSignInAlt className="icon" />
                Sign In
              </SignInButton>
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
