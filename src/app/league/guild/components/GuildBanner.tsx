"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TestImg from "../../../assets/image/TestImg.png";

interface Props {
  guildName: string;
  guildMembers: number;
  guildRank: string;
  guildMaster: string;
  guildCreate: string;
  guildBanner: string;
}

const GuildBanner = (props: Props) => {
  // const [guildName, setGuildName] = useState<string>();
  // const [guildMembers, setGuildMembers] = useState<number>();
  // const [guildRank, setGuildRank] = useState<string>();
  // const [guildMaster, setGuildMaster] = useState<string>();
  // const [guildCreate, setGuildCreate] = useState<string>();

  // useEffect(() => {
  //   setGuildName(props.guildName);
  //   setGuildMembers(props.guildMembers);
  //   setGuildRank(props.guildRank);
  //   setGuildMaster(props.guildMaster);
  //   setGuildCreate(props.guildCreate);
  // }, [props]);

  const handleClickRecordRenewal = () => {
    console.log("전적갱신");
    alert("전적갱신 미구현");
  };
  const handleClickFavorite = () => {
    console.log("즐겨찾기");
    alert("즐겨찾기 미구현");
  };
  return (
    <div className="w-full bg-brandcolor">
      <section className="w-1200px mx-auto h-44 flex justify-between items-center bg-brandcolor">
        {/* Left */}
        <div className="w-1200px flex flex-col justify-center">
          <div className="flex flex-row mb-3">
            <div className="">
              <Image src={TestImg} alt="GuildBanner" width={50} height={50} />
            </div>
            <div className="flex flex-col ml-3">
              <div className="font-extra text-white text-12px mt-1">
                롤파이트 공식리그 - 1부리그 - {props.guildRank}위
              </div>
              <div className="font-extrabold text-white text-24px">
                {props.guildName}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              aria-label="전적갱신"
              className="flex text-black bg-white w-24 h-10 items-center justify-center cursor-pointer rounded hover:bg-gray-200"
              onClick={handleClickRecordRenewal}
            >
              전적갱신
            </button>
            <button
              aria-label="즐겨찾기"
              className="flex text-black bg-white w-24 h-10 items-center justify-center cursor-pointer rounded hover:bg-gray-200"
              onClick={handleClickFavorite}
            >
              즐겨찾기
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="w-350px h-full flex flex-col justify-end pb-4">
          <div className="flex mt-3">
            <div className=" text-white text-14px">
              길드 마스터: {props.guildMaster}
            </div>
            <p className="text-white font-thin ml-2 mr-2"> | </p>
            <div className="text-white text-14px">
              클랜원: {props.guildMembers} 명
            </div>
          </div>
          <div className="text-white text-14px mt-3  mb-5">
            길드 설립일: {props.guildCreate}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuildBanner;
