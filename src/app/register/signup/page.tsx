"use client";
import React, { useState } from "react";
import SignUpComponent from "@/src/components/register/signup/SignUpComponent";
import SettingComponent from "@/src/components/register/signup/SettingComponent";

export default function Page() {
  // const [showSettingComponent, setShowSettingComponent] = useState(false);

  // const handleSignUpButtonClick = () => {
  //   setShowSettingComponent(false);
  // };

  // const handleVerificationButtonClick = () => {
  //   setShowSettingComponent(true);
  // };

  return (
    <>
      {/* {showSettingComponent ? (
        <SettingComponent />
      ) : (
        <SignUpComponent
          onSignUpButtonClick={handleSignUpButtonClick}
          onVerificationButtonClick={handleVerificationButtonClick}
        />
      )} */}
      <SignUpComponent />
    </>
  );
}
