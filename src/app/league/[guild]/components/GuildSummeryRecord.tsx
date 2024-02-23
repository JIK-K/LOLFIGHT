import { CircularProgress } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import GuildSummeryBox from "./GuildSummeryBox";
import { GuildDTO } from "@/src/common/DTOs/guild/guild.dto";

interface Props {
  guildVictory: number | undefined;
  guildDefeat: number | undefined;
}

const GuildSummeryRecord = (props: Props) => {
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
            value={
              isNaN(
                (props.guildVictory! /
                  (props.guildDefeat! + props.guildVictory!)) *
                  100
              )
                ? 0 // NaN 대신 표시할 값 설정
                : (props.guildVictory! /
                    (props.guildDefeat! + props.guildVictory!)) *
                  100
            }
            strokeWidth={5}
            showValueLabel={true}
          />

          <div className="flex flex-col items-center pl-5">
            <p className="text-22px">
              {props.guildVictory! + props.guildDefeat!}전 {props.guildVictory}
              승 {props.guildDefeat}패
            </p>
            <p className="text-red-500 text-22px p-2">
              {isNaN(
                (props.guildVictory! /
                  (props.guildDefeat! + props.guildVictory!)) *
                  100
              )
                ? "기록없음"
                : `(${(
                    (props.guildVictory! /
                      (props.guildDefeat! + props.guildVictory!)) *
                    100
                  ).toFixed(2)}%)`}
            </p>
            <p className="text-sky-500 font-extrabold text-16px">
              0 연승중(더미데이터)
            </p>
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
