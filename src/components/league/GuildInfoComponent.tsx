import Image from "next/image";

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
      <div className="flex items-center">
        <Image
          className=""
          width={32}
          height={32}
          src={props.guild.icon}
          alt="길드 아이콘"
        />
        <div className="guild-info__name">{props.guild.name}</div>
      </div>
      <div className="guild-info__description">{props.guild.tier}</div>
      <div className="guild-info__members">{props.guild.members}</div>
      <div className="guild-info__win">{props.guild.win}승</div>
      <div className="guild-info__lose">{props.guild.lose}패</div>
      <div className="guild-info__leader">{props.guild.leader}</div>
    </div>
  );
};

export default GuildInfoComponent;
