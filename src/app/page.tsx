"use client";
import Main from "./Main";
import Search from "../common/components/Search";
import Slider from "../common/components/Slider";
// import { useState, useEffect } from "react";
import GuildInfoComponent from "./league/components/guildinfo/GuildInfoComponent";
import LeagueHeaderComponent from "./league/components/LeagueHeaderComponent";
import { GuildDTO } from "../common/DTOs/guild/guild.dto";
import { getGuildList } from "@/src/api/guild.api";
import { useState, useEffect } from "react";

export default function Page() {
  const [guildList, setGuildList] = useState<GuildDTO[]>([]);

  useEffect(() => {
    getGuildList()
      .then((response) => {
        const sortedGuilds = response.data.data.sort(
          (a: GuildDTO, b: GuildDTO) => {
            const rankA =
              a.guildRecord?.recordRanking !== "기록없음"
                ? parseInt(a.guildRecord!.recordRanking, 10)
                : Infinity;
            const rankB =
              b.guildRecord?.recordRanking !== "기록없음"
                ? parseInt(b.guildRecord!.recordRanking, 10)
                : Infinity;
            return rankA - rankB;
          }
        );
        setGuildList(sortedGuilds);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* <Main /> */}
      <Slider></Slider>
      <div className="w-1200px mx-auto mb-16">
        <LeagueHeaderComponent guildLength={guildList.length} />
        <div className="flex flex-col">
          {guildList.map((guild) => (
            <GuildInfoComponent key={guild.id} guild={guild} />
          ))}
        </div>
      </div>
    </>
  );
}
