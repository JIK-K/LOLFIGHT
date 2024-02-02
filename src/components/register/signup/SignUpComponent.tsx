"use client";
import { giveMailCode, sendMailAuth } from "@/src/api/mail.api";
import { signUp } from "@/src/api/member.api";
import { MailDTO } from "@/src/models/DTOs/mail/mail.dto";
import { MemberDTO } from "@/src/models/DTOs/member/member.dto";
import Link from "next/link";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUpComponent = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [showInputMemberInfo, setshowInputMemberInfo] = useState(false);
  const [buttonText, setButtonText] = useState("인증하기");
  const [checkPassword, setCheckPassword] = useState("");
  const [mail, setMail] = useState<MailDTO>({
    id: "",
    mailAddr: "",
    mailCode: "",
    mailStatus: "",
  });
  const [member, setMember] = useState<MemberDTO>({
    id: "",
    memberId: "",
    memberPw: "",
    memberName: "",
    memberPhone: "",
    memberGuild: "",
  });

  //==============================================================////Email
  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail({
      ...mail,
      mailAddr: e.target.value,
    });

    setMember({
      ...member,
      memberId: e.target.value,
    });
  };

  const isEmailValid = (email: string): boolean => {
    // @와 최소한 하나의 도메인이 포함된 이메일 주소 패턴
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail({
      ...mail,
      mailCode: e.target.value,
    });
  };

  //Nickname
  const handleNickNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMember({
      ...member,
      memberName: e.target.value,
    });
  };
  //Password
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMember({
      ...member,
      memberPw: e.target.value,
    });
  };
  //PasswordCheck
  const handlePasswordCheckInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.target.value.toString());
  };
  //==============================================================//

  const handleButtonClick = () => {
    if (buttonText === "인증하기") {
      if (!isEmailValid(mail.mailAddr)) {
        Swal.fire({
          icon: "warning",
          title: "회원가입",
          text: "올바른 이메일 형식이 아닙니다",
          customClass: {
            container: "swal-container",
          },
        });
        return;
      }
      giveMailCode(mail); //메일 확인 코드발급 API
      setShowVerification(!showVerification);
      setButtonText(showVerification ? "인증하기" : "인증확인");
    } else if (buttonText === "인증확인") {
      sendMailAuth(mail).then((response) => {
        if (response.data === true) {
          setButtonText("회원가입");
          setshowInputMemberInfo(true);
        } else {
          Swal.fire({
            icon: "warning",
            title: "회원가입",
            text: "인증코드가 틀렸습니다.",
            customClass: {
              container: "swal-container",
            },
          });
          return;
        }
      }); //메일 인증코드 전송 API
    } else if (buttonText === "회원가입") {
      if (member.memberPw === checkPassword) {
        signUp(member)
          .then((response) => {
            Swal.fire({
              icon: "success",
              title: "회원가입",
              text: "성공적으로 회원가입을 완료했습니다",
              customClass: {
                container: "swal-container",
              },
            });
            //여기서 가면됨
          })
          .catch((error) => {
            Swal.fire({
              icon: "warning",
              title: "회원가입",
              text: "동일한 이메일이 존재합니다.",
              customClass: {
                container: "swal-container",
              },
            });
          }); //회원가입 API
      } else {
        Swal.fire({
          icon: "warning",
          title: "회원가입",
          text: "비밀번호를 확인해주세요.",
          customClass: {
            container: "swal-container",
          },
        });
        return;
      }
    }
  };

  return (
    <>
      <span className="text-32px mb-4">
        회원정보를 <p />
        입력해주세요
      </span>
      <div className="w-full">
        <div className="border border-gray-200 rounded-md my-4">
          <input
            className="w-full h-12 rounded-md px-2 bg-gray-100"
            type="text"
            placeholder="이메일"
            onChange={handleEmailInput}
          />
        </div>
        {showVerification && (
          <div className="border border-gray-200 rounded-md my-4">
            <input
              className="w-full h-12 rounded-md px-2 bg-gray-100"
              type="text"
              placeholder="인증번호"
              onChange={handleCodeInput}
            />
          </div>
        )}
        {showInputMemberInfo && (
          <div>
            <div className="border border-gray-200 rounded-md my-4">
              <input
                className="w-full h-12 rounded-md px-2 bg-gray-100"
                type="text"
                placeholder="닉네임"
                onChange={handleNickNameInput}
              />
            </div>
            <div className="border border-gray-200 rounded-md my-4">
              <input
                className="w-full h-12 rounded-md px-2 bg-gray-100"
                type="password"
                placeholder="비밀번호"
                onChange={handlePasswordInput}
              />
            </div>
            <div className="border border-gray-200 rounded-md my-4">
              <input
                className="w-full h-12 rounded-md px-2 bg-gray-100"
                type="password"
                placeholder="비밀번호 확인"
                onChange={handlePasswordCheckInput}
              />
            </div>
          </div>
        )}

        <div className="border-b w-full"></div>
        <Link href={"/"}>
          <button
            onClick={handleButtonClick}
            className="flex font-medium bg-brandcolor text-white h-10 items-center justify-center rounded-md cursor-pointer my-4 w-full my-1"
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </>
  );
};

export default SignUpComponent;
