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

export default function GuildPage() {
  const router = useRouter();
  const [guildData, setGuildData] = useState<GuildDTO>();
  const [currentTab, setCurrentTab] = useState("guildInfo");
  const [guildMembers, setGuildMembers] = useState<MemberDTO[]>([]);
  const [memberId, setMemberId] = useState<string>();
  const [battleDataList, setBattleDataList] = useState<BattleDTO[]>([]);
  const guild = usePathname();

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
      console.log(guildName);
      console.log(response);
      let tempBattle: BattleDTO[] = response.data.data;
      let tempBattleTeam: BattleTeamDTO;
      tempBattle.forEach((battle) => {
        if (battle.teamA.guildName !== guildName) {
          console.log(battle);
          tempBattleTeam = battle.teamA;
          battle.teamA = battle.teamB;
          battle.teamB = tempBattleTeam;
        }
      });
      setBattleDataList(tempBattle);
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

  return (
    <>
      <div className="w-full h-full">
        <GuildBanner
          guildId={guildData?.id}
          guildName={guildData?.guildName}
          guildIcon={`${constant.SERVER_URL}/${guildData?.guildIcon}`}
          guildCreate={guildData?.createAt?.toString()}
          guildMaster={guildData?.guildMaster}
          guildMembers={guildData?.guildMembers}
          guildRank={guildData?.guildRecord?.recordRanking}
          memberId={memberId}
        />
        <div className="w-full h-full mx-auto">
          <div className="flex mt-5 mb-5">
            <div className="w-1200px mx-auto h-full flex flex-col items-center">
              <div className="w-full bg-white p-2 m-2 gap-1 border">
                <button
                  className="font-extrabold text-lg rounded hover:text-xl hover:text-brandcolor pr-2"
                  onClick={() => changeTab("guildInfo")}
                >
                  길드정보
                </button>
                <button
                  className="font-extrabold text-lg rounded hover:text-xl hover:text-brandcolor"
                  onClick={() => changeTab("members")}
                >
                  길드원
                </button>
              </div>

              {currentTab === "guildInfo" && (
                <div>
                  <div className="w-full flex pb-5">
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
                    {battleDataList.map((battle) => (
                      <GuildFightRecord key={battle.id} battleData={battle} />
                    ))}
                  </div>
                </div>
              )}
              {currentTab === "members" && (
                <div className="w-full border-2 border-white">
                  <div className="flex w-full bg-slate-200 h-20px">
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
