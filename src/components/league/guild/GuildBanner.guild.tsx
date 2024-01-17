import React from "react";
import Image from "next/image";
import TestImg from "../../../assets/image/TestImg.png";

const GuildBanner = () => {
  return (
    <div className="w-full h-44 flex justify-between bg-brandcolor">
      <div className=" flex flex-col justify-center">
        <div className="flex flex-row">
          <div>
            <Image src={TestImg} alt="GuildBanner" width={50} height={50} />
          </div>
          <div className="flex flex-col">
            <div className="font-extra text-white text-16px">
              롤파이트 공식리그 - 1부리그 - 28위
            </div>
            <div className="font-extrabold text-white text-24px">
              MaM지존MaM
            </div>
          </div>
        </div>
        <button className="flex ml-4 text-black bg-white w-20 h-10 items-center justify-center rounded-md cursor-pointer">
          <span>로그인</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div>길드마스터</div>
        <div>클랜원수</div>
        <div>창단일</div>
      </div>
    </div>
  );
};

export default GuildBanner;
