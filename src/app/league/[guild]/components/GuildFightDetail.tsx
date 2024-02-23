import React from "react";
import GuildFightList from "./GuildFightList";

const GuildFightDetail = () => {
  return (
    <div className="w-1200px border flex flex-col shadow pt-3 pb-3 bg-white border">
      {/* 1 */}
      <div className="flex justify-between text-14px items-center p-1 pl-3">
        <div className="flex gap-3">
          <p className="font-bold">소환사의 협곡</p>
          <p className="text-gray-500">5 vs 5</p>
        </div>
        <p className="text-gray-500">2024년 1월 1일 20시 22분</p>
      </div>

      {/* 2 */}
      <div>
        <GuildFightList result="win" />
        <GuildFightList result="lose" />
      </div>
    </div>
  );
};

export default GuildFightDetail;
