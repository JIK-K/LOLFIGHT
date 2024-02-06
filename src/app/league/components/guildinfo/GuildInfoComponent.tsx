import Image from "next/image";
import React from "react";

interface GuildInfoComponentProps {
  guild: {
    icon: string;
    name: string;
    tier: string;
    members: number;
    win: number;
    lose: number;
    leader: string;
  };
}

const GuildInfoComponent = (props: GuildInfoComponentProps) => {
  return (
    <div className="guild-info h-16 flex justify-around items-center bg-white mt-1">
      <div className="flex items-center w-1/6 text-center justify-center">
        <Image
          className=""
          width={32}
          height={32}
          src="/images/meso390.png"
          alt="길드 아이콘"
        />
        <Image
          className=""
          width={32}
          height={32}
          src={props.guild.icon}
          alt="길드 아이콘"
        />
        <div className="guild-info__name">{props.guild.name}</div>
      </div>
      <div className="guild-info__description w-1/4 text-center">{props.guild.tier}</div>
      <div className="guild-info__members w-1/12 text-center">{props.guild.members}</div>
      <div className="guild-info__win w-1/12 text-center">{props.guild.win}승</div>
      <div className="guild-info__lose w-1/12 text-center">{props.guild.lose}패</div>
      <div className="guild-info__leader w-1/6 text-center">{props.guild.leader}</div>
    </div>
  );
};

export default GuildInfoComponent;
