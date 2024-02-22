import { MemberDTO } from "@/src/common/DTOs/member/member.dto";

interface Props {
  guildIcon: string;
  guildMember: MemberDTO;
}

const GuildMemberBox = (props: Props) => {
  return (
    <div className="flex w-full bg-brandbgcolor p-2">
      <img src={props.guildIcon} alt="GuildIcon" className="h-30px w-30px" />
      <div className="flex w-250px items-center text-16px font-semibold pl-2">
        {props.guildMember.memberName}
      </div>
      <div className="flex w-250px items-center text-16px font-semibold pl-2">
        일이삼사오육칠팔구십일이삼사오육
      </div>
      <div className="flex w-250px items-center text-16px font-semibold pl-2">
        Gold3(더미데이터)
      </div>
    </div>
  );
};

export default GuildMemberBox;
