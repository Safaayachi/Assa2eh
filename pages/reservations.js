import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";

const reservations = () => {
  return (
    <div className="absolute flex h-full w-full flex-col">
      <NavBar />
      <Reservation />
      <Footer />
    </div>
  );
};

export default reservations;
