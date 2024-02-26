import { MemberDTO } from "@/src/common/DTOs/member/member.dto";

interface Props {
  guildIcon: string;
  guildMember: MemberDTO;
}

const GuildMemberBox = (props: Props) => {
  return (
    <div className="flex w-full bg-brandbgcolor p-2">
      {props.guildIcon === null || undefined ? (
        <div>yaya</div>
      ) : (
        <img src={props.guildIcon} alt="GuildIcon" className="h-30px w-30px" />
      )}
      <div className="flex w-250px items-center text-16px font-semibold pl-2">
        {props.guildMember.memberName}
      </div>
      <div className="flex w-250px items-center text-16px font-semibold pl-2">
        {props.guildMember.memberGame?.gameName}
      </div>
      <div className="flex w-250px items-center text-16px font-semibold pl-2">
        {props.guildMember.memberGame?.gameTier}
      </div>
    </div>
  );
};

export default GuildMemberBox;
