import { GuildDTO } from "@/src/common/DTOs/guild/guild.dto";
import { MemberDTO } from "@/src/common/DTOs/member/member.dto";
import ButtonAlert from "../../../common/components/alert/ButtonAlert";
import CustomAlert from "../../../common/components/alert/CustomAlert";
import { changeGuildMaster, expulsionGuildMember } from "@/src/api/guild.api";
import constant from "@/src/common/constant/constant";

interface Props {
  guildIcon: string;
  guildMember: MemberDTO;
  guild: GuildDTO;
  user: string;
}

const GuildMemberBox = (props: Props) => {
  const expulsionMember = (member: MemberDTO) => {
    const expulsion = () => {
      expulsionGuildMember(member.memberName, props.guild.guildName)
        .then((response) => {
          CustomAlert(
            "success",
            "길드추방",
            `${member.memberName}-길드원을 추방하였습니다.`
          );
        })
        .catch((error) => {
          console.log(error);
        });
    };

    ButtonAlert(
      "길드추방",
      `${member.memberName}길드원을 추방하시겠습니까?`,
      "추방",
      expulsion
    );
  };

  const transferGuildMaste = (memberName: string, guildName: string) => {
    const changeMaster = () => {
      changeGuildMaster(memberName, guildName)
        .then((response) => {
          CustomAlert(
            "success",
            "길드마스터 변경",
            `${guildName}의 길드마스터가 ${memberName}으로 변경되었습니다`
          );
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    ButtonAlert(
      "길드마스터 변경",
      `길드마스터를 ${memberName}으로 변경하시겠습니까?`,
      "변경",
      changeMaster
    );
  };

  return (
    <div className="flex w-full p-2 dark:bg-dark border-b border-gray-700">
      <div className="flex w-250px items-center text-16px font-medium pl-2">
        {props.guildMember.memberName}
      </div>
      <div className="flex w-250px items-center text-16px font-medium pl-2">
        {props.guildMember.memberGame?.gameName}
      </div>
      <div className="flex w-250px items-center text-16px font-medium pl-2">
        <img
          src={`${constant.SERVER_URL}/public/rank/${
            props.guildMember.memberGame?.gameTier.split(" ")[0]
          }.png`}
          alt="Champion"
          width={30}
          height={30}
        />
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
      <div className="pl-2 ">
        {props.guildMember.memberName !== props.guild.guildMaster &&
        props.guild.guildMaster === props.user ? (
          <button
            className="font-extrabold text-base hover:text-green-500 "
            onClick={() =>
              transferGuildMaste(
                props.guildMember.memberName,
                props.guild.guildName
              )
            }
          >
            길드 마스터 변경
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default GuildMemberBox;
