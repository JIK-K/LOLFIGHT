import { MemberDTO } from "@/src/models/DTOs/member/member.dto";
import Link from "next/link";
import { useState } from "react";

const SettingComponent = () => {
  const [member, setMember] = useState<MemberDTO>();

  const handleClickRegister = () => {
    console.log("yaya");
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
            placeholder="닉네임"
          />
        </div>
        <div className="border border-gray-200 rounded-md my-4">
          <input
            className="w-full h-12 rounded-md px-2 bg-gray-100"
            type="text"
            placeholder="비밀번호"
          />
        </div>
        <div className="border border-gray-200 rounded-md my-4">
          <input
            className="w-full h-12 rounded-md px-2 bg-gray-100"
            type="text"
            placeholder="비밀번호 확인"
          />
        </div>
        <div className="border-b w-full"></div>
        <button
          className="flex font-medium bg-brandcolor text-white h-10 items-center justify-center rounded-md cursor-pointer my-4 w-full my-1"
          onClick={handleClickRegister}
        >
          <Link href="/">가입완료</Link>
        </button>
      </div>
    </>
  );
};

export default SettingComponent;
