import React from "react";
import Image from "next/image";
import TestImg2 from "../../../assets/image/TestImg2.png";
import GuildFightBox from "./GuildFightBox";

interface Props {
  result: string;
}
const GuildFightList = (props: Props) => {
  const result = props.result;
  return (
    <div className="w-full h-full flex flex-col">
      {/* 1 */}
      <div
        className={`w-full h-full flex p-1 justify-between ${
          result === "win" ? "bg-blue-300" : "bg-red-300"
        }`}
      >
        <div className="flex">
          <p
            className={`font-extrabold pl-2 pr-2 ${
              result === "win" ? "text-blue-500" : "text-red-500"
            }`}
          >
            {result === "win" ? "승리" : "패배"}
          </p>
          <Image src={TestImg2} alt="GuildBanner" width={25} height={25} />
          <p className="font-semibold">marineClan</p>
        </div>
        <p className="text-14px text-gray-500">블루팀 1부리그 - 1233점</p>
      </div>

      {/* 2 */}
      <div className="w-full flex pl-2 pr-2 gap-3 text-12px">
        <div className="w-250px">플레이어</div>
        <div className="w-120px">KDA</div>
        <div className="w-250px">피해량</div>
        <div className="w-100px">CS</div>
        <div className="w-350px">아이템</div>
      </div>

      {/* 3 */}

      <GuildFightBox result={props.result} />
      <GuildFightBox result={props.result} />
      <GuildFightBox result={props.result} />
      <GuildFightBox result={props.result} />
      <GuildFightBox result={props.result} />
    </div>
  );
};

export default GuildFightList;
