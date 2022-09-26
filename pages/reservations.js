import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const reservations = () => {
  return (
    <div className="absolute flex h-full w-full flex-col">
      <NavBar />
      <div className="h-full w-full"></div>

      <Footer />
    </div>
  );
};

export default reservations;
