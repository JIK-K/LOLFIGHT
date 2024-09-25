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
      {/* 이 아래 section은 pathname.startsWith("/profile") 일때는 보이지 않게해줘 */}
      {!(
        pathname.startsWith("/profile") || pathname.startsWith("/league/")
      ) && (
        <section className="w-[1200px] mx-auto flex mb-1">
          <div className="bg-yellow w-[800px] h-[200px] flex items-center justify-center">
            <p className="text-lg font-bold">게시판 등등</p>
          </div>
          <div className="flex-col ml-2">
            <div className="bg-brandbgcolor dark:bg-branddark">
              {memberName ? (
                <div className="w-[400px] h-[150px] flex flex-col justify-between items-center p-4 border dark:border-branddark">
                  <div className="flex w-full items-center">
                    <Image
                      className="rounded-full mr-[20px]"
                      width={70}
                      height={70}
                      src={`${constant.SERVER_URL}/public/items/34.png`}
                      alt={"testimg"}
                    />
                    <div className="flex flex-col flex-grow">
                      <p className="font-extrabold text-lg">{memberName} 님</p>
                      <p className="font-light text-base">{memberId}</p>
                      <p>소속길드</p>
                    </div>
                    <div className="flex items-center px-2 py-1 border dark:border-gray-800 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                      <span className="mr-2" onClick={handleLogoutClick}>
                        로그아웃
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <button onClick={handleProfileClick}>내정보</button>
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
                    onClick={() => {
                      router.replace("/register");
                    }}
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
