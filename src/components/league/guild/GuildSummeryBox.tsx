import React, { useEffect, useState } from "react";
import Image from "next/image";
import TestImg from "../../../assets/image/TestImg.png";

const GuildSummeryBox = () => {
  return (
    <div className="flex items-center pb-2">
      <p className="pr-3">vs</p>
      <Image src={TestImg} alt="GuildBanner" width={30} height={30} />
      <div className="flex flex-col pl-3">
        <p>StyleClan</p>
        <p>6전 3승 3패 (50%)</p>
      </div>
    </div>
  );
};
export default GuildSummeryBox;
