"use client";
import { useEffect, useState } from "react";
import GuildInfoComponent from "../league/components/guildinfo/GuildInfoComponent";
import LeagueHeaderComponent from "./components/LeagueHeaderComponent";
import { GuildDTO } from "@/src/common/DTOs/guild/guild.dto";
import { getGuildList } from "@/src/api/guild.api";

const blackurl = "/images/검은주먹해적단.png";

export default function Page() {
  const [guildList, setGuildList] = useState<GuildDTO[]>([]);

  useEffect(() => {
    getGuildList()
      .then((response) => {
        setGuildList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="w-full h-full h-96 mt-16">
        <div className="w-1200px h-full mx-auto">
          <LeagueHeaderComponent guildLength={guildList.length} />
          <div className="flex flex-col">
            {guildList.map((guild) => (
              <GuildInfoComponent key={guild.id} guild={guild} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
