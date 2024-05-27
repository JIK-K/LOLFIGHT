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
        setGuildList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* <Main /> */}
      <Search></Search>
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
