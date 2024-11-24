import React from "react";
import SignupForm from "../Components/Sign up/SignupForm";
import RegisterSection from "../Components/Sign up/RegisterSection";

function SingupPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
        <RegisterSection />
        <SignupForm />
      </div>
    </div>
  );
}

export default SingupPage;
