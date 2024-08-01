"use client";
import {
  getGuildInfo,
  getGuildMemberList,
  inviteGuild,
} from "@/src/api/guild.api";
import GuildBanner from "./components/GuildBanner";
import GuildDetail from "./components/GuildDetail";
import GuildFightRecord from "./components/GuildFightRecord";
import GuildSummeryRecord from "./components/GuildSummeryRecord";
import { useRouter, usePathname, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GuildDTO } from "@/src/common/DTOs/guild/guild.dto";
import constant from "@/src/common/constant/constant";
import GuildMemberBox from "../../profile/components/GuildMemberBox";
import { MemberDTO } from "@/src/common/DTOs/member/member.dto";
import CustomAlert from "@/src/common/components/alert/CustomAlert";
import { GuildInviteSendDTO } from "@/src/common/DTOs/guild/guild_invite_send.dto";
import { BattleDTO } from "@/src/common/DTOs/battle/battle.dto";
import { getBattleList } from "@/src/api/battle.api";
import { BattleTeamDTO } from "@/src/common/DTOs/battle/battle_team.dto";
import Pagination from "@mui/material/Pagination";

export default function GuildPage() {
  const router = useRouter();
  const [guildData, setGuildData] = useState<GuildDTO>();
  const [currentTab, setCurrentTab] = useState("guildInfo");
  const [guildMembers, setGuildMembers] = useState<MemberDTO[]>([]);
  const [memberId, setMemberId] = useState<string>();
  const [battleDataList, setBattleDataList] = useState<BattleDTO[]>([]);
  const guild = usePathname();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // 총 페이지 수
  const battlesPerPage = 10;

  useEffect(() => {
    // const guildName = guild.replace(/^\/league\//, "");
    const guildName = decodeURIComponent(guild.replace(/^\/league\//, ""));

    getGuildInfo(guildName)
      .then((response) => {
        setGuildData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        router.replace("/error");
      });
    getGuildMemberList(guildName)
      .then((response) => {
        setGuildMembers(response.data.data);
      })
      .catch((error) => {});

    getBattleList(guildName).then((response) => {
      let tempBattle: BattleDTO[] = response.data.data;
      let tempBattleTeam: BattleTeamDTO;
      tempBattle.forEach((battle) => {
        if (battle.teamA.guildName !== guildName) {
          tempBattleTeam = battle.teamA;
          battle.teamA = battle.teamB;
          battle.teamB = tempBattleTeam;
        }
      });
      setBattleDataList(tempBattle);
      setTotalPages(Math.ceil(response.data.data.length / battlesPerPage));
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMemberId = sessionStorage.getItem("id");
      if (storedMemberId) {
        setMemberId(storedMemberId);
      }
    }
  }, []);

  const changeTab = (tab: string) => {
    setCurrentTab(tab);
  };

  const handlePageClick = (
    event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    setCurrentPage(pageNumber);
  };

  const paginatedBattles = battleDataList.slice(
    (currentPage - 1) * battlesPerPage,
    currentPage * battlesPerPage
  );

  return (
    <>
      <div className="w-full h-full">
        <GuildBanner
          guildId={guildData?.id}
          guildName={guildData?.guildName}
          guildIcon={`${constant.SERVER_URL}/${guildData?.guildIcon}`}
          guildCreate={guildData?.createdAt?.toString()}
          guildMaster={guildData?.guildMaster}
          guildMembers={guildData?.guildMembers}
          guildRank={guildData?.guildRecord?.recordRanking}
          memberId={memberId}
        />
        <div className="w-full h-full mx-auto">
          <div className="flex mt-5 mb-5">
            <div className="w-1200px mx-auto h-full flex flex-col items-center">
              <div className="w-full bg-white m-2 gap-1 border dark:bg-dark dark:border-gray-700">
                <button
                  className="font-extrabold text-lg hover:bg-gray-300 p-2 dark:hover:bg-gray-700"
                  onClick={() => changeTab("guildInfo")}
                >
                  길드정보
                </button>
                <button
                  className="font-extrabold text-lg hover:bg-gray-300 p-2 dark:hover:bg-gray-700"
                  onClick={() => changeTab("members")}
                >
                  길드원
                </button>
              </div>

              {currentTab === "guildInfo" && (
                <div>
                  <div className="w-full flex pb-5 dark:border-gray-700">
                    <GuildSummeryRecord
                      guildVictory={guildData?.guildRecord?.recordVictory}
                      guildDefeat={guildData?.guildRecord?.recordDefeat}
                    />
                    <GuildDetail
                      guildVictory={guildData?.guildRecord?.recordVictory}
                      guildDefeat={guildData?.guildRecord?.recordDefeat}
                      guildLadder={guildData?.guildRecord?.recordLadder}
                      guildRank={guildData?.guildRecord?.recordRanking}
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    {paginatedBattles.map((battle) => (
                      <GuildFightRecord key={battle.id} battleData={battle} />
                    ))}
                  </div>
                  <div className="notice__pagination w-full flex justify-center mt-1 p-3">
                    <Pagination
                      count={totalPages}
                      shape="rounded"
                      boundaryCount={2}
                      onChange={(event, page) => handlePageClick(event, page)}
                      sx={{
                        ".dark & .Mui-selected": {
                          backgroundColor: "#4C4C4C",
                          color: "#CACACA", // 텍스트 색상
                          "&:hover": {
                            backgroundColor: "#707070", // 호버 시 색상
                          },
                        },
                        ".dark & .MuiPaginationItem-root": {
                          color: "#EEEEEE", // 선택되지 않은 아이템의 기본 텍스트 색상
                        },
                        ".dark & .MuiPaginationItem-icon": {
                          color: "#EEEEEE", // 텍스트 색상
                        },
                      }}
                    />
                  </div>
                </div>
              )}
              {currentTab === "members" && (
                <div className="w-full">
                  <div className="flex w-full bg-slate-200 h-20px dark:bg-dark ">
                    <p className="w-250px text-light text-sm ml-12">닉네임</p>
                    <p className="w-250px text-light text-sm">소환사명</p>
                    <p className="w-250px text-light text-sm">티어</p>
                  </div>
                  <div className="font-bold text-xl ">
                    {guildMembers.map((member) => (
                      <GuildMemberBox
                        key={member.id}
                        guildIcon={`${constant.SERVER_URL}/${guildData?.guildIcon}`}
                        guildMember={member}
                        guild={guildData!}
                        user={member.memberName}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
