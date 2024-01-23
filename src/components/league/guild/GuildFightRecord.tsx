"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";
import GuildFightMember from "./GuildFightMember";

import TestImg from "../../../assets/image/TestImg.png";
import TestImg2 from "../../../assets/image/TestImg2.png";
import GuildFightDetail from "./GuildFightDetail";

interface Props {
  result: string;
}
const GuildFightRecord = (props: Props) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const result = props.result;

  const clickDetailFight = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <div
        className={`w-1200px h-130px flex mb-2 border shadow ${
          result === "win"
            ? "border-blue-300 bg-blue-100"
            : "border-red-300 bg-red-100"
        }`}
      >
        {/* 1 */}
        <div className="w-130px flex flex-col justify-center items-center p-3">
          <p className="font-extrabold text-16px">소환사의 협곡</p>
          <p className="font-light text-14px">30분 32초</p>
          <p
            className={`font-extrabold text-18px ${
              result === "win" ? "text-blue-500" : "text-red-500"
            }`}
          >
            {result === "win" ? "승리" : "패배"}
          </p>
          <p className="font-light text-14px">5분전</p>
        </div>

        {/* 2 */}
        <div className="flex w-400px justify-center items-center p-3 ">
          <div className="flex flex-col items-center m-3">
            <div className="flex p-3">
              <Image src={TestImg} alt="GuildBanner" width={30} height={30} />
              <p className="pl-1 pt-1 font-normal text-16px">marineClan</p>
            </div>
            <p className="text-14px">1부리그 1,123점</p>
          </div>
          <p className="font-normal text-12px">VS</p>
          <div className="flex flex-col items-center m-3">
            <div className="flex p-3">
              <Image src={TestImg2} alt="GuildBanner" width={30} height={30} />
              <p className="pl-1 pt-1 font-normal text-16px">AngKaraClan</p>
            </div>
            <p className="text-14px">1부리그 1,123점</p>
          </div>
        </div>

        {/* 3 */}
        <div className="w-120px flex flex-col items-center justify-center">
          <p className="font-bold">래더</p>
          <p
            className={`font-extrabold text-20px ${
              result === "win" ? "text-blue-500" : "text-red-500"
            }`}
          >
            {result === "win" ? `+${14}점` : `-${14}점`}
          </p>
        </div>

        {/* 4 */}
        <div className="w-500px p-3">
          <GuildFightMember />
        </div>

        {/* 5 */}
        <div
          className={`w-80px flex flex-col border-l justify-center items-center ${
            result === "win" ? "border-blue-300" : "border-red-300 "
          }`}
        >
          <button
            aria-label="상세보기"
            className="flex flex-col w-full h-full items-center justify-center"
            onClick={clickDetailFight}
          >
            상세보기
            <SlArrowDown className="mt-5" />
          </button>
        </div>
      </div>
      {showDetails && (
        <div className="w-full h-full pb-2">
          <GuildFightDetail />
        </div>
      )}
    </div>
  );
};

export default GuildFightRecord;
