import React from "react";
import SignInForm from "../components/SignInForm";

const signIn = () => {
  return (
    <div className=" relative flex h-screen w-full items-center justify-center bg-darkTint">
      <SignInForm />
    </div>
  );
};

export default signIn;
