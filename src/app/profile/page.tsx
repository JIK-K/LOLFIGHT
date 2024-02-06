"use client";
import React, { useEffect, useState } from "react";
import ProfileInfoPage from "../profile/components/ProfileInfoPage";
import { MemberDTO } from "@/src/common/DTOs/member/member.dto";
import { findMember } from "@/src/api/member.api";
import ChangePasswordPage from "./components/ChangePasswordPage";
import WithdrawalPage from "./components/WithdrawalPage";

export default function Page() {
  const [member, setMember] = useState<MemberDTO>({
    id: "",
    memberId: "",
    memberPw: "",
    memberName: "",
    memberPhone: "",
    memberGuild: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMemberId = sessionStorage.getItem("memberId")!.toString();
      findMember(storedMemberId).then((response) => {
        const memberData: MemberDTO = response.data.data;
        setMember(memberData);
      });
    }
  }, []);
  const [currentPage, setCurrentPage] = useState("profile"); // 초기 페이지: 프로필 페이지

  // 페이지를 변경하는 함수
  const changePage = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-1200px mx-auto h-525px flex gap-5 rounded">
      <div className="flex flex-col w-56 h-full leading-5 bg-white items-center pt-2 rounded">
        <p className="font-bold text-xl p-5">내정보관리</p>
        <div className="w-full flex flex-col items-center pt-3 border-[#11235A] border-t-2">
          {/* 각 페이지로 이동하는 버튼들 */}
          <button
            onClick={() => changePage("profile")}
            className="w-full p-2 hover:text-lg"
          >
            개인정보 변경
          </button>
          <button
            onClick={() => changePage("password")}
            className="w-full p-2 hover:text-lg"
          >
            비밀번호 변경
          </button>
          <button
            onClick={() => changePage("withdrawal")}
            className="w-full p-2 hover:text-lg"
          >
            회원탈퇴
          </button>
          {/* <button onClick={() => changePage("customerService")}>고객센터</button>
          <button onClick={() => changePage("announcement")}>공지사항</button> */}
        </div>
      </div>
      <div className="w-full bg-white rounded">
        {currentPage === "profile" && <ProfileInfoPage member={member} />}
        {currentPage === "password" && <ChangePasswordPage member={member} />}
        {currentPage === "withdrawal" && <WithdrawalPage member={member} />}
      </div>
    </div>
  );
}
