import React from "react";

const GuildDetail = () => {
  return (
    <div className="w-full h-full rounded ml-3 p-3 flex flex-col bg-brandcolor text-white">
      <div className="border-b-2 border-white p-1 text-xl">상세정보</div>
      <div className="flex border-b-2 border-white p-1 text-32px justify-between">
        래더 : <p>1200점</p>
      </div>
      <div className="flex border-b-2 border-white p-1 text-32px justify-between">
        승률 :
        <p className="text-green-500">
          <span className="text-sm text-white">2100승 1900패</span> 55%
        </p>
      </div>
      <div className="flex border-b-2 border-white p-1 text-32px justify-between">
        랭킹 :
        <p>
          <span className="text-sm">1부리그</span> 23등
        </p>
      </div>
    </div>
  );
};
export default GuildDetail;
