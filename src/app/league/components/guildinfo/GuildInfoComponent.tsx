import { GuildDTO } from "@/src/common/DTOs/guild/guild.dto";
import constant from "@/src/common/constant/constant";
import Image from "next/image";
import React from "react";

interface GuildInfoComponentProps {
  // guild: {
  //   icon: string;
  //   name: string;
  //   tier: string;
  //   members: number;
  //   description: string;
  //   win: number;
  //   lose: number;
  //   leader: string;
  // };
  guild: GuildDTO;
}

const GuildInfoComponent = (props: GuildInfoComponentProps) => {
  const handleGuildInfo = () => {};

  return (
    <div className="guild-info h-16 flex justify-around items-center bg-white mt-1">
      <div
        className="flex items-center w-220px text-center gap-1"
        onClick={handleGuildInfo}
      >
        <img
          className=""
          width={32}
          height={32}
          src="/images/meso390.png"
          alt="길드 아이콘"
        />
        <img
          className=""
          width={35}
          height={35}
          src={`${constant.SERVER_URL}/${props.guild.guildIcon}`}
          alt="길드 아이콘"
        />
        <div className="guild-info__name text-sm pl-2">
          {props.guild.guildName}
        </div>
      </div>
      <div className="guild-info__description w-1/4 text-center text-sm">
        {props.guild.guildDescription}
      </div>
      <div className="guild-info__members w-1/12 text-center">
        {props.guild.guildMembers}
      </div>
      <div className="guild-info__win w-1/12 text-center">
        {props.guild.guildRecord.recordVictory}승
      </div>
      <div className="guild-info__lose w-1/12 text-center">
        {props.guild.guildRecord.recordDefeat}패
      </div>
      <div className="guild-info__lose w-1/12 text-center">
        {props.guild.guildTier}
      </div>
      <div className="guild-info__leader w-1/6 text-center">
        {props.guild.guildMaster}
      </div>
    </div>
  );
};

export default GuildInfoComponent;
