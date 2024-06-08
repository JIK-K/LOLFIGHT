"use client";
import { giveMailCode, sendMailAuth } from "@/src/api/mail.api";
import { signUp } from "@/src/api/member.api";
import { MailDTO } from "@/src/common/DTOs/mail/mail.dto";
import { MemberDTO } from "@/src/common/DTOs/member/member.dto";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CustomAlert from "@/src/common/components/alert/CustomAlert";

const SignUpComponent = () => {
  const router = useRouter();
  const [reissuance, setReissuance] = useState(false);
  const [remainingTime, setRemainingTime] = useState("03:00");
  const [timer, setTimer] = useState(180);
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

  // 타이머 표시 함수
  const formatTime = (seconds: number): string => {
    if (seconds <= 0) {
      return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showVerification) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(interval);
            setMail({
              ...mail,
              mailCode: "",
            });
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showVerification, reissuance]);

  // 타이머 갱신 시간 갱신
  useEffect(() => {
    setRemainingTime(formatTime(timer));
  }, [timer]);

  const sendAuthCode = () => {
    setReissuance(!reissuance);
    giveMailCode(mail); //메일 확인 코드발급 API
    setTimer(180);
  };

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
        CustomAlert("warning", "회원가입", "올바른 이메일 형식이 아닙니다");
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
        } else if (mail.mailCode === "") {
          CustomAlert("warning", "회원가입", "인증코드를 입력해주세요.");
          return;
        } else {
          CustomAlert("warning", "회원가입", "인증코드가 틀렸습니다.");
          return;
        }
      }); //메일 인증코드 전송 API
    } else if (buttonText === "회원가입") {
      if (
        member.memberId === "" ||
        member.memberName === "" ||
        member.memberPw === ""
      ) {
        CustomAlert("warning", "회원가입", "모든정보를 작성해주세요.");
        return;
      }
      if (
        member.memberName.length < 1 ||
        member.memberName.length > 10 ||
        /\s/.test(member.memberName)
      ) {
        CustomAlert(
          "warning",
          "회원가입",
          "닉네임은 2글자 이상 10글자 이하로 작성하고 공백을 포함하지 않아야 합니다."
        );
        return;
      }
      if (member.memberPw.length < 8) {
        CustomAlert(
          "warning",
          "회원가입",
          "비밀번호는 8글자 이상 작성해주세요."
        );
        return;
      }
      if (member.memberPw === checkPassword) {
        signUp(member)
          .then((response) => {
            CustomAlert(
              "success",
              "회원가입",
              "성공적으로 회원가입을 완료했습니다."
            );
            router.replace("/register");
          })
          .catch((error) => {
            CustomAlert(
              "warning",
              "회원가입",
              "동일한 이메일이 존재하거나, 동일한 닉네임이 존재합니다"
            );
            router.replace("/register");
          }); //회원가입 API
      } else {
        CustomAlert("warning", "회원가입", "비밀번호를 확인해주세요.");
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
            disabled={buttonText === "인증확인" || buttonText === "회원가입"}
            style={{
              backgroundColor:
                buttonText === "인증확인" || buttonText === "회원가입"
                  ? "#e0e0e0"
                  : undefined,
            }}
          />
        </div>
        {showVerification && (
          <div className="flex border border-gray-200 rounded-md my-4">
            <input
              className="w-full h-12 rounded-md px-2 bg-gray-100"
              type="text"
              placeholder={`인증번호(${remainingTime} 남음)`}
              onChange={handleCodeInput}
              disabled={buttonText === "회원가입"}
              style={{
                backgroundColor:
                  buttonText === "회원가입" ? "#e0e0e0" : undefined,
              }}
            />
            <button
              disabled={buttonText === "회원가입"}
              style={{
                cursor: buttonText === "회원가입" ? "not-allowed" : "pointer",
              }}
              onClick={sendAuthCode}
              className={`flex font-medium bg-brandcolor text-white  items-center justify-center rounded-md cursor-pointer w-32 ${
                showInputMemberInfo ? "my-1" : ""
              }`}
            >
              재발급
            </button>
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
