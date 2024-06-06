"use client";
import { useEffect, useState } from "react";
import GuildInfoComponent from "../league/components/guildinfo/GuildInfoComponent";
import LeagueHeaderComponent from "./components/LeagueHeaderComponent";
import { GuildDTO } from "@/src/common/DTOs/guild/guild.dto";
import { getGuildList } from "@/src/api/guild.api";
import Pagination from "@mui/material/Pagination";

export default function Page() {
  const [guildList, setGuildList] = useState<GuildDTO[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // 총 페이지 수
  const guildsPerPage = 10;

  useEffect(() => {
    getGuildList()
      .then((response) => {
        setGuildList(response.data.data);
        setTotalPages(Math.ceil(response.data.data.length / guildsPerPage));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePageClick = (
    event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    setCurrentPage(pageNumber);
  };

  const paginatedGuilds = guildList.slice(
    (currentPage - 1) * guildsPerPage,
    currentPage * guildsPerPage
  );

  return (
    <>
      <div className="w-full h-full h-96 mt-16 mb-14">
        <div className="w-1200px h-full mx-auto">
          <LeagueHeaderComponent guildLength={guildList.length} />
          <div className="flex flex-col">
            {/* {guildList.map((guild) => (
              <GuildInfoComponent key={guild.id} guild={guild} />
            ))} */}
            {paginatedGuilds.map((guild) => (
              <GuildInfoComponent key={guild.id} guild={guild} />
            ))}
          </div>
          <div className="notice__pagination w-full flex justify-center mt-1 p-3">
            <Pagination
              count={totalPages}
              shape="rounded"
              boundaryCount={2}
              onChange={(event, page) => handlePageClick(event, page)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
