import React from "react";
import SignUpForm from "../components/SignUpForm";
import Socials from "../components/Socials";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";

const signUp = () => {
  return (
    <section className="flex h-full w-full flex-col md:h-screen ">
      <nav className="flex h-24">
        <NavBar />
      </nav>

      <div className=" h-full w-full p-12 md:h-2/3 md:flex-1">
        <div className="relative h-152 w-full flex-col bg-danger  space-y-40 md:h-full md:flex-row-reverse md:space-x-12">
           <div>
            
           </div>
           
        </div>
      </div>

      <footer className="hidden w-full md:flex">
        <Footer />
      </footer>
    </section>
  );
};

export default signUp;
