import { usePathname } from "next/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  guildLength: number;
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
}

const LeagueHeaderComponent = ({
  guildLength,
  searchTerm,
  setSearchTerm,
}: Props) => {
  const pathName = usePathname();
  const isSearchVisible = pathName === "/";
  return (
    <>
      <div className="flex items-center">
        <div className="flex w-50px rounded rounded-full bg-white text-black items-center p-1">
          <p className="pl-1 pr-1 font-extrabold text-sm">공식</p>
          <div className="flex w-8px h-8px bg-green-500 rounded-full" />
        </div>
        <div className="pl-5">{guildLength}개의 길드 참여중</div>
        {!isSearchVisible && (
          <div className="flex justify-center ml-auto">
            <div className="bg-gray-100 w-12 h-10 flex flex-wrap justify-center content-center dark:bg-dark rounded-l-md">
              <FaSearch />
            </div>
            <input
              className="w-full h-10 px-2 bg-gray-100 focus:outline-none dark:bg-dark font-normal rounded-r-md"
              type="text"
              placeholder="길드 이름 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm!(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className="w-full h-30px flex justify-around items-center bg-brandcolor text-white dark:bg-dark font-thin mt-2 rounded-t">
        <div className="w-220px text-center">길드이름</div>
        <div className="w-1/4 text-center">길드소개</div>
        <div className="w-1/12 text-center">길드원</div>
        <div className="w-1/12 text-center">승</div>
        <div className="w-1/12 text-center">패</div>
        <div className="w-1/12 text-center">티어</div>
        <div className="w-1/6 text-center">길드장</div>
      </div>
    </>
  );
};

export default LeagueHeaderComponent;
