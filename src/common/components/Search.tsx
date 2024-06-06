"use client";
import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "@/src/common/components/Link";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputRef.current && inputRef.current.value) {
        const summonerName = inputRef.current.value;
        const name = summonerName.split("#")[0];
        const tag = summonerName.split("#")[1];
        window.open(`https://www.op.gg/summoners/kr/${name}-${tag}`, "_blank");
      }
    }
  };

  const handleClick = () => {
    if (inputRef.current && inputRef.current.value) {
      const summonerName = inputRef.current.value;
      const name = summonerName.split("#")[0];
      const tag = summonerName.split("#")[1];
      window.open(`https://www.op.gg/summoners/kr/${name}-${tag}`, "_blank");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex w-540px border border-gray-200 rounded-md my-4 dark:bg-dark dark:border-dark">
        <input
          className="w-full h-12 rounded-l-md px-2 bg-gray-100 focus:outline-none dark:bg-dark"
          type="text"
          placeholder="태양같은사나이#KR1"
          onKeyDown={handleKeyPress}
        />
        <div className="bg-gray-100 w-12 h-12 flex flex-wrap justify-center content-center dark:bg-dark">
          <FaSearch />

        </div>
      </div>
    </div>
  );
};

export default Search;
