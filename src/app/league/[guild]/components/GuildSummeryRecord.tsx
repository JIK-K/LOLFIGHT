import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  guildVictory: number | undefined;
  guildDefeat: number | undefined;
}

const GuildSummeryRecord = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col p-3 rounded bg-white dark:bg-dark">
      <p className="font-extrabold">최근 매치</p>

      <div className="flex p-3 items-center">
        <div className="flex w-400px items-center gap-10">
          <div style={{ width: "140px", height: "140px" }}>
            <CircularProgressbar
              value={
                isNaN(
                  (props.guildVictory! /
                    (props.guildDefeat! + props.guildVictory!)) *
                    100
                )
                  ? 0
                  : (props.guildVictory! /
                      (props.guildDefeat! + props.guildVictory!)) *
                    100
              }
              strokeWidth={8}
              text={
                (
                  (props.guildVictory! /
                    (props.guildDefeat! + props.guildVictory!)) *
                  100
                ).toFixed(2) + "%"
              }
              styles={{
                path: {
                  stroke: "#007fff",
                },
                text: {
                  fill: "currentcolor",
                  fontSize: "18px",
                  fontWeight: "600",
                },
              }}
              className="dark:text-white"
            />
          </div>
          <div className="flex flex-col items-center pl-6">
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
            {/* <p className="text-sky-500 font-extrabold text-16px">
              0 연승중(더미데이터)
            </p> */}
          </div>
        </div>
        <div className="w-400px h-40 flex flex-col border-l-2 pl-10">
          {/* <GuildSummeryBox />
          <GuildSummeryBox />
          <GuildSummeryBox /> */}
        </div>
      </div>
    </div>
  );
};

export default GuildSummeryRecord;
