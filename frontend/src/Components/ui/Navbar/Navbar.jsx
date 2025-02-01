import React from "react";
import { Button } from "@/Components/ui/button/Button";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1>HealthMate</h1>
        <div className="button-container">
          <Button variant="ghost" className="button button-ghost">
            Home
          </Button>
          <Button variant="ghost" className="button button-ghost">
            Features
          </Button>
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
