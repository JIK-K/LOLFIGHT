"use client";
import { login } from "@/src/api/member.api";
import Link from "@/src/common/components/Link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CustomAlert from "../../common/components/alert/CustomAlert";

export default function Page() {
  const router = useRouter();
  const [memberId, setMemberId] = useState("");
  const [memberPw, setMemberPw] = useState("");
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberId(e.target.value);
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberPw(e.target.value);
  };

  const handleLoginClick = () => {
    login(memberId, memberPw)
      .then((response) => {
        if (response.data.isSuccess === "T") {
          CustomAlert("success", "로그인", "로그인 성공.");

          sessionStorage.setItem("id", response.data.data.id);
          sessionStorage.setItem("memberId", response.data.data.memberId);
          sessionStorage.setItem("memberName", response.data.data.memberName);
          sessionStorage.setItem("memberPhone", response.data.data.memberPhone);
          sessionStorage.setItem("memberGuild", response.data.data.memberGuild);

          router.replace("/");
        } else {
          CustomAlert("warning", "로그인", "아이디 비밀번호를 확인해주세요.");
        }
      })
      .catch((error) => {
        CustomAlert("warning", "로그인", "아이디 비밀번호를 확인해주세요.");
        // CustomAlert("error", "로그인", "에러");
      });
  };
  return (
    <>
      <span className="text-32px mb-4">
        무자비하게 <p />
        우리와 함께하세요
      </span>
      <div className="w-full">
        {/* <button className="flex font-medium bg-yellow-400 h-10 items-center justify-center rounded-md cursor-pointer w-full my-2">카카오톡으로 로그인</button>
                            <button className="flex font-medium bg-green-400 h-10 items-center justify-center rounded-md cursor-pointer w-full my-2">구글로 로그인</button>
                            <button className="flex font-medium text-white bg-black h-10 items-center justify-center rounded-md cursor-pointer w-full my-2">애플로 로그인</button> */}
        {/* <div className="border-b w-full"></div> */}
        <div className="border border-gray-200 rounded-md my-4">
          <input
            className="w-full h-12 rounded-md px-2 bg-gray-100"
            type="text"
            placeholder="이메일"
            onChange={handleIdChange}
          />
        </div>
        <div className="border border-gray-200 rounded-md my-4">
          <input
            className="w-full h-12 rounded-md px-2 bg-gray-100"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwChange}
          />
        </div>
        <div className="border-b w-full"></div>
        <button
          className="flex font-medium bg-brandcolor text-white h-10 items-center justify-center rounded-md cursor-pointer my-4 w-full my-1"
          onClick={handleLoginClick}
        >
          이메일로 로그인
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <span className="text-xs text-gray-700 font-bold mx-2">
          <Link key={"회원가입"} href="/register/signup">
            회원가입
          </Link>
        </span>
        <span className="h-4 w-1px mx-1 bg-gray-700"></span>
        <span className="text-xs text-gray-700 font-bold mx-2">
          <Link key={"비밀번호 찾기"} href="/register/find">
            비밀번호 찾기
          </Link>
        </span>
      </div>
    </>
  );
}
