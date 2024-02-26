import { MemberDTO } from "@/src/common/DTOs/member/member.dto";
import { useRouter } from "next/navigation";
import { FaRegQuestionCircle, FaArrowCircleRight } from "react-icons/fa";
import constant from "@/src/common/constant/constant";
import { useEffect, useState } from "react";
import CustomAlert from "../../../common/components/alert/CustomAlert";
import {
  destroyGuild,
  getGuildInfo,
  getGuildMemberList,
  getInviteGuildList,
  inviteAccept,
  inviteGuild,
} from "@/src/api/guild.api";
import GuildMemberBox from "./GuildMemberBox";
import { GuildDTO } from "@/src/common/DTOs/guild/guild.dto";
import { GuildInviteDTO } from "@/src/common/DTOs/guild/guild_invite.dto";

interface Props {
  member: MemberDTO;
}
const GuildManagePage = (props: Props) => {
  const [guildMembers, setGuildMembers] = useState<MemberDTO[]>([]);
  const [inviteMembers, setInviteMembers] = useState<GuildInviteDTO[]>([]);
  const [guild, setGuild] = useState<GuildDTO>();
  const [currentTab, setCurrentTab] = useState("description");
  const [checked, setChecked] = useState(false);

  const router = useRouter();
  const handleCreateGuild = () => {
    router.replace("/league/guild/create");
  };
  const changeTab = (tab: string) => {
    setCurrentTab(tab);
  };
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const deleteGuild = () => {
    if (checked) {
      destroyGuild(props.member.memberGuild!.guildName).then((response) => {
        CustomAlert("success", "길드해체", "성공적으로 길드가 해체되었습니다.");
        router.replace("/");
      });
    } else {
      CustomAlert(
        "warning",
        "길드해체",
        "주의사항 확인 체크를 활성화 시켜주십시오."
      );
    }
  };
  const acceptMember = (member: GuildInviteDTO) => {
    inviteAccept(member.memberId!.id, member.guildId!.id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const rejectMember = (member: GuildInviteDTO) => {
    alert("길드가입신청거절(미구현)" + member.guildId?.id);
  };

  useEffect(() => {
    if (
      !(
        props.member.memberGuild === null ||
        props.member.memberGuild === undefined
      )
    ) {
      getGuildMemberList(props.member.memberGuild!.guildName)
        .then((response) => {
          console.log(response);
          setGuildMembers(response.data.data);
        })
        .catch((error) => {});
      getGuildInfo(props.member.memberGuild.guildName)
        .then((response) => {
          setGuild(response.data.data);
        })
        .catch((error) => {});
      getInviteGuildList(props.member.memberGuild.guildName)
        .then((response) => {
          setInviteMembers(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full leading-5 pt-2 bg-white rounded ">
      <p className="font-bold text-xl p-5">길드</p>
      <div className="border-[#11235A] border-t-2 p-10">
        {props.member.memberGuild === null ||
        props.member.memberGuild === undefined ? (
          <div className="flex w-full">
            <div className="flex flex-col w-full border-2 border-black rounded-lg p-7">
              <div className="mb-10">
                <p className="font-extrabold text-4xl">롤파이트에 오신것을</p>
                <p className="font-extrabold text-4xl">환영합니다</p>
              </div>
              <div className="mb-10">
                <p className="font-extrabold text-3xl text-brandcolor">
                  길드를 생성하세요
                </p>
                <p className="font-extrabold text-3xl text-brandcolor">
                  나만의 길드를 운영해보세요.
                </p>
              </div>
              <button
                className="flex h-45px rounded-lg w-200px items-center justify-center bg-brandcolor gap-2"
                onClick={handleCreateGuild}
              >
                <FaArrowCircleRight className="w-30px h-30px text-white" />
                <p className="text-3xl text-white">길드만들기</p>
              </button>
            </div>
            <div className="flex flex-col pl-5">
              <div className="flex w-full gap-2 pb-3">
                <FaRegQuestionCircle className="w-30px h-30px text-brandcolor" />
                <p className="font-extrabold text-2xl text-brandcolor">
                  롤파이트 길드란?
                </p>
              </div>
              <p className="text-lg">
                롤파이트 유저가 자신만의 길드를 만들어 원하는 다른 길드들과 함께
                롤파이트 전적시스템을 이용할 수 있습니다.
              </p>
              <div className="flex w-full gap-2 pb-3 pt-3">
                <FaRegQuestionCircle className="w-30px h-30px text-brandcolor" />
                <p className="font-extrabold text-2xl text-brandcolor">
                  어떻게 참여하나요?
                </p>
              </div>
              <p className="text-lg">
                길드생성을 하면 자동으로 롤파이트 공식 리그에 참여하여 참여 중인
                다른 길드들과 경쟁하세요.
              </p>
              <div className="flex w-full gap-2 pb-3 pt-3">
                <FaRegQuestionCircle className="w-30px h-30px text-brandcolor" />
                <p className="font-extrabold text-2xl text-brandcolor">
                  길드는 어떻게 만들수 있나요.
                </p>
              </div>
              <p className="text-lg">
                롤파이트 클라이언트를 통해 롤 계정 인증을 완료한 유저만 길드를
                생성할 수 있습니다. 길드를 생성해 강한팀을 만들어 보세요.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full border-2 gap-2 p-5">
            <div className="flex items-center">
              <div className="border-2  rounded p-2 w-100px h-100px">
                <img
                  src={`${constant.SERVER_URL}/${props.member.memberGuild?.guildIcon}`}
                  alt="GuildIcon"
                  className="h-full"
                />
              </div>
              <div className="w-full flex flex-col ml-2 gap-0.5">
                <div className="flex border-2  items-center rounded">
                  <div className="flex h-45px items-center border-r-2  pl-5 pr-5">
                    <p className="flex w-100px font-extrabold text-xl justify-center">
                      길드명
                    </p>
                  </div>
                  <div className="flex w-full h-45px items-center pl-5 bg-brandbgcolor">
                    <p className="font-extrabold text-xl text-brandcolor ">
                      {props.member.memberGuild.guildName}
                    </p>
                  </div>
                </div>
                <div className="flex border-2  items-center rounded">
                  <div className="flex h-45px items-center border-r-2  pl-5 pr-5">
                    <p className="flex w-100px font-extrabold text-xl justify-center">
                      길드마스터
                    </p>
                  </div>
                  <div className="flex w-full h-45px items-center pl-5 bg-brandbgcolor">
                    <p className="font-extrabold text-xl text-brandcolor">
                      {props.member.memberGuild.guildMaster}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-45px gap-2">
              <div className="flex w-full border-2  rounded">
                <div className="flex items-center border-r-2  pl-5 pr-5">
                  <p className="flex w-100px font-extrabold text-xl justify-center">
                    길드인원
                  </p>
                </div>
                <div className="flex w-full bg-brandbgcolor items-center pl-5">
                  <p className="font-extrabold text-xl text-brandcolor">
                    {props.member.memberGuild.guildMaster}
                  </p>
                </div>
              </div>
              <div className="flex w-full border-2  rounded">
                <div className="flex items-center border-r-2  pl-5 pr-5">
                  <p className="flex w-100px font-extrabold text-xl justify-center">
                    래더점수
                  </p>
                </div>
                <div className="flex w-full bg-brandbgcolor items-center pl-5">
                  <p className="font-extrabold text-xl text-brandcolor">
                    {guild?.guildRecord?.recordLadder}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-45px gap-2">
              <div className="flex w-full border-2  rounded">
                <div className="flex items-center border-r-2  pl-5 pr-5">
                  <p className="flex w-100px font-extrabold text-xl justify-center">
                    길드티어
                  </p>
                </div>
                <div className="flex w-full bg-brandbgcolor items-center pl-5">
                  <p className="font-extrabold text-xl text-brandcolor">
                    {props.member.memberGuild.guildTier}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-45px gap-2">
              <div className="flex w-full border-2  rounded">
                <div className="flex items-center border-r-2  pl-5 pr-5">
                  <p className="flex w-100px font-extrabold text-xl justify-center">
                    길드랭킹
                  </p>
                </div>
                <div className="flex w-full bg-brandbgcolor items-center pl-5">
                  <p className="font-extrabold text-xl text-brandcolor">
                    {guild?.guildRecord?.recordRanking}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-45px gap-2">
              <div className="flex w-full border-2  rounded">
                <div className="flex items-center border-r-2  pl-5 pr-5">
                  <p className="flex w-100px font-extrabold text-xl justify-center">
                    길드전적
                  </p>
                </div>
                <div className="flex w-full bg-brandbgcolor items-center pl-5">
                  <p className="font-extrabold text-xl text-brandcolor">
                    {guild?.guildRecord?.recordDefeat! +
                      guild?.guildRecord?.recordVictory!}
                    전 {guild?.guildRecord?.recordVictory}승{" "}
                    {guild?.guildRecord?.recordDefeat}패{" "}
                    {isNaN(
                      (guild?.guildRecord?.recordVictory! /
                        (guild?.guildRecord?.recordDefeat! +
                          guild?.guildRecord?.recordVictory!)) *
                        100
                    )
                      ? "기록없음"
                      : `(${(
                          (guild?.guildRecord?.recordVictory! /
                            (guild?.guildRecord?.recordDefeat! +
                              guild?.guildRecord?.recordVictory!)) *
                          100
                        ).toFixed(2)}%)`}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col border-2  rounded overflow-x-hidden">
              <div className="flex p-2 gap-2 border-b-2 ">
                <button
                  className="font-extrabold text-lg rounded hover:text-xl hover:text-brandcolor"
                  onClick={() => changeTab("description")}
                >
                  길드소개
                </button>
                <button
                  className="font-extrabold text-lg rounded hover:text-xl hover:text-brandcolor"
                  onClick={() => changeTab("members")}
                >
                  길드원
                </button>
                {props.member.memberName ===
                props.member.memberGuild.guildMaster ? (
                  <button
                    className="font-extrabold text-lg rounded hover:text-xl hover:text-brandcolor"
                    onClick={() => changeTab("applicants")}
                  >
                    가입신청자
                  </button>
                ) : null}
                {props.member.memberName ===
                props.member.memberGuild.guildMaster ? (
                  <button
                    className="font-extrabold text-lg rounded hover:text-xl hover:text-brandcolor"
                    onClick={() => changeTab("delete")}
                  >
                    길드해체
                  </button>
                ) : null}
              </div>
              <div className="p-4">
                {currentTab === "description" && (
                  <div className="font-bold text-xl">
                    {props.member.memberGuild.guildDescription}
                  </div>
                )}
                {currentTab === "members" && (
                  <div>
                    <div className="flex w-full bg-slate-200 h-20px">
                      <p className="w-250px text-light text-sm ml-12">닉네임</p>
                      <p className="w-250px text-light text-sm">소환사명</p>
                      <p className="w-250px text-light text-sm">티어</p>
                    </div>
                    <div className="font-bold text-xl">
                      {guildMembers.map((member) => (
                        <GuildMemberBox
                          key={member.id}
                          guildIcon={`${constant.SERVER_URL}/${props.member.memberGuild?.guildIcon}`}
                          guildMember={member}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {currentTab === "applicants" && (
                  <div>
                    <div className="flex w-full bg-slate-200 h-20px">
                      <p className="w-250px text-light text-sm ml-2">닉네임</p>
                      <p className="w-250px text-light text-sm">소환사명</p>
                      <p className="w-250px text-light text-sm">티어</p>
                    </div>

                    <div className="font-bold text-xl">
                      {inviteMembers.map((invite) => (
                        <div
                          className="w-full bg-brandbgcolor hover:bg-sky-100 rounded"
                          key={invite.id}
                        >
                          <div className="flex">
                            <div className="flex w-250px items-center text-16px font-semibold pl-2">
                              {invite.memberId?.memberName}
                            </div>
                            <div className="flex w-250px items-center text-16px font-semibold pl-2">
                              {invite.memberId?.memberGame?.gameName}
                            </div>
                            <div className="flex w-250px items-center text-16px font-semibold pl-2">
                              {invite.memberId?.memberGame?.gameTier}
                            </div>
                            <button
                              aria-label="수락"
                              onClick={() => acceptMember(invite)}
                              className="flex items-center text-16px font-semibold pl-2 hover:text-blue-700"
                            >
                              수락
                            </button>
                            <button
                              aria-label="거절"
                              onClick={() => rejectMember(invite)}
                              className="flex items-center text-16px font-semibold pl-2 hover:text-red-500"
                            >
                              거절
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {currentTab === "delete" && (
                  <div className="flex flex-col items-center">
                    <div className="p-2">
                      <div>
                        <span className="text-sky-950 font-bold">
                          1. 정보 유실
                        </span>
                        <p className="text-sm">
                          길드를 해체하면 해당 길드와 관련된 모든 데이터가
                          삭제될 수 있습니다.
                        </p>
                      </div>
                      <div>
                        <span className="text-sky-950 font-bold">
                          2. 접근 권한
                        </span>
                        <p className="text-sm">
                          길드를 해체하면 해당 길드에 대한 접근 권한을 잃게
                          됩니다.
                        </p>
                      </div>
                      <div>
                        <span className="text-sky-950 font-bold">
                          3. 서비스 이용 중단
                        </span>
                        <p className="text-sm">
                          길드를 해체한 후에는 해당 길드의 서비스 및 혜택을 더
                          이상 이용할 수 없게 됩니다.
                        </p>
                      </div>
                      <div>
                        <span className="text-sky-950 font-bold">
                          4. 서비스 연관성
                        </span>
                        <p className="text-sm">
                          길드를 해체할 경우 해당 길드와 연관된 모든 서비스와
                          기능에 대한 접근 권한이 손실될 수 있습니다. 이는 길드
                          멤버 간의 활동 및 협업에 영향을 줄 수 있습니다.
                        </p>
                      </div>
                    </div>
                    <label>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                      />
                      주의사항을 모두 확인하였습니다.
                    </label>
                    <button
                      className="w-full bg-red-500 rounded p-2"
                      onClick={deleteGuild}
                    >
                      <p className="text-white font-extrabold tracking-widest">
                        길드해체
                      </p>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuildManagePage;
