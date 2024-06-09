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

  //여기서 guildList[0].guildRecord?.recordRanking 이걸 기준으로 정렬해줘 recordRanking은 1, 2, 3 이런식으로 적용된다.

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
