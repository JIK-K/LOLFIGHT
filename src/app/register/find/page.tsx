"use client";
import { MailDTO } from "@/src/common/DTOs/mail/mail.dto";
import { MemberDTO } from "@/src/common/DTOs/member/member.dto";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CustomAlert from "../../../common/components/alert/CustomAlert";
import { giveMailCode, sendMailAuth } from "@/src/api/mail.api";
import { findMember, update } from "@/src/api/member.api";

export default function Page() {
  const router = useRouter();
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
    memberGuild: null,
    memberGame: null,
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
        CustomAlert(
          "warning",
          "비밀번호 변경",
          "올바른 이메일 형식이 아닙니다"
        );
        return;
      }
      findMember(mail.mailAddr)
        .then((response) => {
          giveMailCode(mail); //메일 확인 코드발급 API
          setShowVerification(!showVerification);
          setButtonText(showVerification ? "인증하기" : "인증확인");
        })
        .catch((error) => {
          CustomAlert(
            "warning",
            "비밀번호 변경",
            "존재하지 않는 이메일입니다."
          );
        });
    } else if (buttonText === "인증확인") {
      sendMailAuth(mail)
        .then((response) => {
          if (response.data === true) {
            setButtonText("비밀번호 변경");
            setshowInputMemberInfo(true);
          } else if (mail.mailCode === "") {
            CustomAlert("warning", "비밀번호 변경", "인증코드를 입력해주세요.");
            return;
          } else {
            CustomAlert("warning", "비밀번호 변경", "인증코드가 틀렸습니다.");
            return;
          }
        }) //메일 인증코드 전송 API
        .catch((error) => {
          CustomAlert("warning", "비밀번호 변경", "에러");
        });
    } else if (buttonText === "비밀번호 변경") {
      if (member.memberId === "" || member.memberPw === "") {
        CustomAlert("warning", "비밀번호 변경", "모든정보를 작성해주세요.");
        return;
      }
      if (member.memberPw.length < 8) {
        CustomAlert(
          "warning",
          "비밀번호 변경",
          "비밀번호는 8글자 이상 작성해주세요."
        );
        return;
      }
      if (member.memberPw === checkPassword) {
        update(member)
          .then((response) => {
            CustomAlert(
              "success",
              "비밀번호 변경",
              "성공적으로 비밀번호 변경을 완료했습니다."
            );
            router.replace("/register");
          })
          .catch((error) => {
            CustomAlert(
              "warning",
              "비밀번호 변경",
              "동일한 이메일이 존재합니다."
            );
            router.replace("/register");
          }); //비밀번호 변경 API
      } else {
        CustomAlert("warning", "비밀번호 변경", "비밀번호를 확인해주세요.");
        return;
      }
    }
  };

  return (
    <>
      <span className="text-32px mb-4">
        이메일을 <p />
        입력해주세요
      </span>
      <div className="w-full">
        <div className="border border-gray-200 rounded-md my-4">
          <input
            className="w-full h-12 rounded-md px-2 bg-gray-100"
            type="text"
            placeholder="이메일"
            onChange={handleEmailInput}
            disabled={
              buttonText === "인증확인" || buttonText === "비밀번호 변경"
            }
            style={{
              backgroundColor:
                buttonText === "인증확인" || buttonText === "비밀번호 변경"
                  ? "#e0e0e0"
                  : undefined,
            }}
          />
        </div>
        {showVerification && (
          <div className="border border-gray-200 rounded-md my-4">
            <input
              className="w-full h-12 rounded-md px-2 bg-gray-100"
              type="text"
              placeholder="인증번호"
              onChange={handleCodeInput}
              disabled={buttonText === "비밀번호 변경"}
              style={{
                backgroundColor:
                  buttonText === "비밀번호 변경" ? "#e0e0e0" : undefined,
              }}
            />
          </div>
        )}
        {showInputMemberInfo && (
          <div>
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
        <button
          onClick={handleButtonClick}
          className="flex font-medium bg-brandcolor text-white h-10 items-center justify-center rounded-md cursor-pointer my-4 w-full my-1"
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
