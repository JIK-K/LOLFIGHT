import React from "react";

interface Props {
  guildLadder: number | undefined;
  guildVictory: number | undefined;
  guildDefeat: number | undefined;
  guildRank: string | undefined;
}

const GuildDetail = (props: Props) => {
  return (
    <div className="w-full h-full rounded ml-3 p-3 flex flex-col bg-brandcolor dark:bg-branddark text-white">
      <div className="border-b-2 border-white p-1 text-xl">상세정보</div>
      <div className="flex border-b-2 border-white p-1 text-32px justify-between">
        래더 : <p>{props.guildLadder}점</p>
      </div>
      <div className="flex border-b-2 border-white p-1 text-32px justify-between">
        승률 :
        <p className="text-green-500">
          <span className="text-sm text-white">
            {props.guildVictory}승 {props.guildDefeat}패
          </span>{" "}
          {isNaN(
            (props.guildVictory! / (props.guildDefeat! + props.guildVictory!)) *
              100
          )
            ? "기록없음"
            : `(${(
                (props.guildVictory! /
                  (props.guildDefeat! + props.guildVictory!)) *
                100
              ).toFixed(2)}%)`}
        </p>
      </div>
      <div className="flex border-b-2 border-white p-1 text-32px justify-between">
        랭킹 :
        <p>
          <span className="text-sm">1부리그</span> {props.guildRank}등
        </p>
      </div>
    </div>
  );
};
export default GuildDetail;
