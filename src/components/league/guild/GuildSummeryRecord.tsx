import { CircularProgress } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import GuildSummeryBox from "./GuildSummeryBox";

const GuildSummeryRecord = () => {
  const winRate = 10; // 승률

  return (
    <div className="h-full w-full flex flex-col p-3 rounded bg-white">
      <p className="font-extrabold">최근 매치</p>

      <div className="flex p-3 items-center">
        <div className="flex w-400px items-center">
          <CircularProgress
            classNames={{
              svg: "w-36 h-36 drop-shadow-md",
              indicator: "stroke-blue-500",
              track: "stroke-red-500",
              value: "text-3xl font-semibold text-black",
            }}
            value={winRate}
            strokeWidth={5}
            showValueLabel={true}
          />
          <div className="flex flex-col items-center pl-5">
            <p className="text-22px">220전 113승 129패</p>
            <p className="text-red-500 text-22px p-2">( {winRate}% )</p>
            <p className="text-sky-500 font-extrabold text-16px">0 연승중</p>
          </div>
        </div>
        <div className="w-400px h-40 flex flex-col border-l-2 pl-10">
          <GuildSummeryBox />
          <GuildSummeryBox />
          <GuildSummeryBox />
        </div>
      </div>
    </div>
  );
};

export default GuildSummeryRecord;
