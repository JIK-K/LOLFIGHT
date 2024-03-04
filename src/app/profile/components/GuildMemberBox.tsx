import { GuildDTO } from "@/src/common/DTOs/guild/guild.dto";
import { MemberDTO } from "@/src/common/DTOs/member/member.dto";
import CustomAlert from "../../../common/components/alert/CustomAlert";
import { expulsionGuildMember } from "@/src/api/guild.api";

interface Props {
  guildIcon: string;
  guildMember: MemberDTO;
  guild: GuildDTO;
  user: string;
}

const GuildMemberBox = (props: Props) => {
  const expulsionMember = (member: MemberDTO) => {
    expulsionGuildMember(member.memberName, props.guild.guildName)
      .then((response) => {
        CustomAlert(
          "success",
          "길드추방",
          `${member.memberName}-길드원을 추방하였습니다.`
        );
      })
      .catch((error) => {});
  };

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
      <div>
        {props.guildMember.memberName !== props.guild.guildMaster &&
        props.guild.guildMaster === props.user ? (
          <button
            className="font-extrabold text-base hover:text-red-500 "
            onClick={() => expulsionMember(props.guildMember)}
          >
            추방
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default GuildMemberBox;
