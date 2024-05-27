"use client";
import Image from "next/image";
import logo from "../../../public/icon.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CustomAlert from "../components/alert/CustomAlert";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Navigation from "./Navigation";
import ThemeToggler from "../components/Desktop/ThemeToggler";

const Header = () => {
  const router = useRouter();
  const [memberName, setMemberName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMemberName = sessionStorage.getItem("memberName");
      setMemberName(storedMemberName);
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
    <header className="sticky w-full bg-brandcolor top-0">
      <section className="w-1200px mx-auto h-16 flex justify-between items-center">
        <div className="flex items-center">
          {/* <Image width={64} height={64} src={logo} alt="logo" /> */}
          <p className="font-extrabold text-white ml-2 text-xl">
            <Link key="home" href={"/"}>
              LOL.FIGHT
            </Link>
          </p>
        </div>
        <Navigation />
        <div className="flex items-center">
          {memberName ? (
            <Dropdown className="bg-white rounded">
              <DropdownTrigger>
                <Button className="font-light text-white">{memberName}</Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="member-setting"
                onAction={(key) => actionList(key)}
              >
                <DropdownItem
                  key="profile"
                  className="rounded hover:bg-gray-100"
                >
                  프로필
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  className="rounded hover:bg-red-100 hover:text-red-500"
                >
                  로그아웃
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Link
              href="/register"
              className="flex ml-4 text-black bg-white w-20 h-10 items-center justify-center rounded-md cursor-pointer"
            >
              로그인
            </Link>
          )}
        </div>
        <ThemeToggler />
      </section>
    </header>
  );
};

export default Header;
