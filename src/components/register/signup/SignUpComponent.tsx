"use client";
import Link from "next/link";
import React, { useState } from "react";

const SignUpComponent = ({
  onSignUpButtonClick,
  onVerificationButtonClick,
}: {
  onSignUpButtonClick: () => void;
  onVerificationButtonClick: () => void;
}) => {
  const [showVerification, setShowVerification] = useState(false);
  const [buttonText, setButtonText] = useState("인증하기");

  const handleButtonClick = () => {
    setShowVerification(!showVerification);
    setButtonText(showVerification ? "인증하기" : "DAUM");

    if (!showVerification) {
      onSignUpButtonClick();
    } else {
      onVerificationButtonClick();
    }
  };

  return (
    <>
      <span className="text-32px mb-4">
        이메일로 <p />
        함께하세요
      </span>
      <div className="w-full">
        <div className="border border-gray-200 rounded-md my-4">
          <input
            className="w-full h-12 rounded-md px-2 bg-gray-100"
            type="text"
            placeholder="이메일"
          />
        </div>
        {showVerification && (
          <div className="border border-gray-200 rounded-md my-4">
            <input
              className="w-full h-12 rounded-md px-2 bg-gray-100"
              type="text"
              placeholder="인증번호"
            />
          </div>
        )}
        <div className="border-b w-full"></div>
        <button
          onClick={handleButtonClick}
          className="flex font-medium bg-brandcolor text-white h-10 items-center justify-center rounded-md cursor-pointer my-4 w-full my-1"
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default SignUpComponent;
