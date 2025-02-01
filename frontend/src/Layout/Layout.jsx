import React from "react";
import Navbar from "../Components/ui/Navbar/Navbar"; 
import Footer from "../Components/ui/Footer/Footer";

const Layout = ({ children, showFooter = true, showNavbar = true }) => {
  return (
    <>
      {showNavbar && <Navbar />} 
      {children}
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;