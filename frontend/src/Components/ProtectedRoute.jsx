import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

// ProtectedRoute component
const ProtectedRoute = ({ element }) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    // Clerk is loading, you may want to show a loading spinner here
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    // If user is not signed in, redirect to the sign-in page
    return <Navigate to="/sign-in" replace />;
  }

  // If user is signed in, render the protected route
  return element;
};

export default ProtectedRoute;
