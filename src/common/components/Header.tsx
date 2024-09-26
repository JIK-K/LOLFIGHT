"use client";
import Image from "next/image";
import darklogo from "../../../public/icon-blue.png";
import lightlogo from "../../../public/icon.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import CustomAlert from "../components/alert/CustomAlert";
import Navigation from "./Navigation";
import ThemeToggler from "../components/Desktop/ThemeToggler";
import Search from "./Search";
import constant from "@/src/common/constant/constant";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [memberName, setMemberName] = useState<string | null>(null);
  const [memberId, setMemberId] = useState<string | null>(null);

  const [activeTabLeft, setActiveTabLeft] = useState("공지사항");
  const [activeTabRight, setActiveTabRight] = useState("자유게시판");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMemberName = sessionStorage.getItem("memberName");
      const storedMemberId = sessionStorage.getItem("memberId");

      setMemberName(storedMemberName);
      setMemberId(storedMemberId);
    }
  }, []);

  const actionList = (key: any) => {
    switch (key) {
      case "profile":
        handleProfileClick();
        break;
      case "logout":
        handleLogoutClick();
        break;
    }
  };

  const handleLogoutClick = () => {
    sessionStorage.clear();
    CustomAlert("success", "로그아웃", "로그아웃 되었습니다.");
    setMemberName("");
    router.replace("/");
  };

  const handleLoginClick = () => {
    router.replace("/register");
  };
  const handleProfileClick = () => {
    router.replace("/profile");
  };
  return (
    <header className="w-full top-0">
      <section className="w-[1200px] mx-auto">
        <Image
          className="hidden dark:block"
          onClick={() => router.replace("/")}
          width={100}
          height={100}
          src={lightlogo}
          alt="light logo"
        />
        <Image
          className="block dark:hidden"
          width={100}
          height={100}
          src={darklogo}
          alt="dark logo"
        />
      </section>
      <section className="w-full bg-brandcolor dark:bg-dark my-2">
        <div className="w-1200px mx-auto h-16 flex justify-between items-center">
          <div className="items-center">
            {/* <Image width={64} height={64} src={logo} alt="logo" /> */}
            <p className="font-extrabold text-white ml-2 text-xl">
              <Link key="home" href={"/"}>
                LOLFIGHT
              </Link>
            </p>
          </div>
          <Navigation />
          <ThemeToggler />
        </div>
      </section>
      {!(
        pathname.startsWith("/profile") || pathname.startsWith("/league/")
      ) && (
        <section className="w-[1200px] mx-auto flex mb-1">
          <div className="w-[800px] h-[200px] flex gap-1">
            <div className="w-1/2 h-full bg-brandbgcolor dark:bg-branddark">
              <div className="w-full flex items-center justify-between mb-4">
                <button
                  className={`w-1/2 px-8 py-3 ${
                    activeTabLeft === "공지사항"
                      ? "font-bold text-brandcolor dark:text-white"
                      : "bg-[#e4eefb] dark:bg-brandgray text-gray-500"
                  }`}
                  onClick={() => setActiveTabLeft("공지사항")}
                >
                  공지사항
                </button>
                <button
                  className={`w-1/2 px-8 py-3 ${
                    activeTabLeft === "이벤트"
                      ? "font-bold text-brandcolor dark:text-white"
                      : "bg-[#e4eefb] dark:bg-brandgray text-gray-500"
                  }`}
                  onClick={() => setActiveTabLeft("이벤트")}
                >
                  이벤트
                </button>
              </div>
              <div className="px-4 py-2">
                {activeTabLeft === "공지사항" && (
                  <div className="space-y-2">
                    <p className="hover:underline hover:decoration-gray-400 hover:decoration-opacity-50">
                      총 4개글
                    </p>
                  </div>
                )}
                {activeTabLeft === "이벤트" && (
                  <p className="hover:underline hover:decoration-gray-400 hover:decoration-opacity-50">
                    이벤트
                  </p>
                )}
              </div>
            </div>

            <div className="w-1/2 h-full bg-brandbgcolor dark:bg-branddark">
              <div className="flex justify-start mb-4">
                <button
                  className={`w-1/2 px-8 py-3 ${
                    activeTabRight === "자유게시판"
                      ? "font-bold text-brandcolor dark:text-white"
                      : "bg-[#e4eefb] dark:bg-brandgray text-gray-500"
                  }`}
                  onClick={() => setActiveTabRight("자유게시판")}
                >
                  자유게시판
                </button>
                <button
                  className={`w-1/2 px-8 py-3 ${
                    activeTabRight === "길드원 모집"
                      ? "font-bold text-brandcolor dark:text-white"
                      : "bg-[#e4eefb] dark:bg-brandgray text-gray-500"
                  }`}
                  onClick={() => setActiveTabRight("길드원 모집")}
                >
                  길드원 모집
                </button>
              </div>
              <div className="px-4 py-2">
                {activeTabRight === "자유게시판" && (
                  <div className="space-y-2">
                    <p className="hover:underline hover:decoration-gray-400 hover:decoration-opacity-50">
                      총 4개 글
                    </p>
                  </div>
                )}
                {activeTabRight === "길드원 모집" && <p>길드원 모집</p>}
              </div>
            </div>
          </div>
          <div className="flex-col ml-2">
            <div className="bg-brandbgcolor dark:bg-branddark">
              {memberName ? (
                <div className="w-[400px] h-[150px] flex flex-col justify-between items-centerborder dark:border-branddark">
                  <div className="flex w-full items-center p-4">
                    <Image
                      className="rounded-full mr-[20px]"
                      width={70}
                      height={70}
                      src={`${constant.SERVER_URL}/public/member/${memberName}.png`}
                      alt={"testimg"}
                    />
                    <div className="flex flex-col flex-grow">
                      <p className="font-extrabold text-lg">{memberName} 님</p>
                      <p className="font-light text-base">{memberId}</p>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-between dark:border-gray-800">
                    <button
                      className="w-1/2 h-full flex items-center justify-center px-2 py-1 cursor-pointer hover:bg-brandhover dark:hover:bg-gray-600 transition"
                      onClick={handleProfileClick}
                    >
                      내정보
                    </button>
                    <div className="w-[1px] h-full bg-gray-300 dark:bg-gray-600"></div>
                    <div
                      className="w-1/2 h-full flex items-center justify-center px-2 py-1 cursor-pointer hover:bg-brandhover dark:hover:bg-gray-600 transition"
                      onClick={handleLogoutClick}
                    >
                      <span>로그아웃</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-[400px] h-[150px] flex flex-col justify-between items-center p-4">
                  <p className="text-center">
                    롤파이트의 서비스를 편리하게 이용하세요
                  </p>
                  <button
                    className="w-full h-[50px] bg-brandcolor text-white text-xl font-bold py-2 px-4 rounded hover:bg-brandhover"
                    onClick={handleLoginClick}
                  >
                    롤파이트 로그인
                  </button>
                  <div className="mt-2 text-sm">
                    <Link key={"회원가입"} href="/register/signup">
                      회원가입
                    </Link>
                    <span className="mx-2">|</span>
                    <Link key={"비밀번호 찾기"} href="/register/find">
                      비밀번호 찾기
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Search />
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;
