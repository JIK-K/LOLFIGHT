"use client";
import GuildBanner from "@/src/app/league/guild/components/GuildBanner";
import GuildDetail from "@/src/app/league/guild/components/GuildDetail";
import GuildFightRecord from "@/src/app/league/guild/components/GuildFightRecord";
import GuildSummeryRecord from "@/src/app/league/guild/components/GuildSummeryRecord";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    console.log(router.query);
  }, []);
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full mx-auto">
          <GuildBanner
            guildName="marineClan"
            guildBanner="yaya"
            guildCreate="2000년 1월 1일"
            guildMaster="태양같은사나이"
            guildMembers={1}
            guildRank="99"
          />
          <div className="flex mt-5 mb-5">
            <div className="w-1200px mx-auto h-full flex flex-col items-center">
              <div className="w-full flex pb-5">
                <GuildSummeryRecord />
                <GuildDetail />
              </div>
              <div className="w-full flex flex-col">
                <GuildFightRecord result="win" />
                <GuildFightRecord result="win" />
                <GuildFightRecord result="lose" />
                <GuildFightRecord result="win" />
                <GuildFightRecord result="lose" />
                <GuildFightRecord result="win" />
                <GuildFightRecord result="lose" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
