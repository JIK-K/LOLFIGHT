"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import constant from "@/src/common/constant/constant";
import { JudgmentDTO } from "@/src/common/DTOs/judgment/judgment.dto";

interface Props {
  judgment: JudgmentDTO;
}
const JudgmentBox = (props: Props) => {
  const router = useRouter();
  const totalLike =
    props.judgment.judgmentLeftLike + props.judgment.judgmentRightLike;
  const leftpercent =
    totalLike === 0 ? 50 : (props.judgment.judgmentLeftLike / totalLike) * 100;

  const rightpercent = 100 - leftpercent;

  const handleClickJudgment = () => {
    router.push(`/judgment/${props.judgment.id}`);
  };

  const getDate = (date: string | number | Date) => {
    const today = new Date();
    const postDateTime = new Date(date);

    if (
      postDateTime.getDate() === today.getDate() &&
      postDateTime.getMonth() === today.getMonth() &&
      postDateTime.getFullYear() === today.getFullYear()
    ) {
      const hour = postDateTime.getHours().toString().padStart(2, "0");
      const minute = postDateTime.getMinutes().toString().padStart(2, "0");
      return `${hour}:${minute}`;
    } else {
      const year = postDateTime.getFullYear().toString().padStart(2, "0");
      const month = (postDateTime.getMonth() + 1).toString().padStart(2, "0");
      const day = postDateTime.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
  };

  return (
    <div
      className="judgment_box flex-col border dark:border-gray-500 hover:border-brandcolor rounded-lg shadow-lg p-[20px]"
      onClick={handleClickJudgment}
    >
      <div className="judgment_title flex items-center justify-between">
        <p className="font-bold text-[20px]">{props.judgment.judgmentTitle}</p>
        <div className="flex items-end text-sm font-normal gap-3">
          <p>작성일: {getDate(props.judgment.createdAt!)}</p>
          <span className="text-gray-300">|</span>
          <p>조회수: {props.judgment.judgmentView}</p>
          <span className="text-gray-300">|</span>
          <p>추천수: {props.judgment.judgmentLike}</p>
          <span className="text-gray-300">|</span>
          <div className="flex items-end gap-1">
            작성자:
            <Image
              className="rounded-full"
              width={25}
              height={25}
              src={`${constant.SERVER_URL}/public/member/${props.judgment.judgmentWriter}.png`}
              alt="light logo"
            />
            {props.judgment.judgmentWriter}
          </div>
        </div>
      </div>

      <div
        className="judgment_summation flex w-full mt-10 justify-around items-center rounded-lg"
        style={{
          background: `linear-gradient(to right, rgba(59, 130, 246, 1) 0%, rgba(59, 130, 246, 0) ${leftpercent}%, rgba(239, 68, 68, 0) ${leftpercent}%, rgba(239, 68, 68, 1) 100%)`,
        }}
      >
        {/* Left side */}
        <div className="font-bold text-[28px] text-white drop-shadow-md">
          {leftpercent.toFixed(0)}%
        </div>
        <div className="flex items-center">
          <div className="flex flex-col w-[300px] justify-center text-sm mr-5 rounded-lg p-4">
            <div className="flex h-[30px] justify-between items-center">
              <p className="font-semibold text-gray-700 dark:text-gray-400">
                소환사명:
              </p>
              <p className="text-right font-bold transition duration-300">
                {props.judgment.judgmentLeftName}
              </p>
            </div>
            <div className="flex h-[30px] justify-between items-center">
              <p className="font-semibold text-gray-700 dark:text-gray-400">
                라인:
              </p>
              <p className="text-right font-bold transition duration-300">
                {props.judgment.judgmentLeftLine}
              </p>
            </div>
            <div className="flex h-[30px] justify-between items-center">
              <p className="font-semibold text-gray-700 dark:text-gray-400">
                티어:
              </p>
              <div className="flex items-center text-right font-bold transition duration-300 gap-1">
                {props.judgment.judgmentLeftTier}
                <Image
                  width={30}
                  height={30}
                  src={`${constant.SERVER_URL}/public/rank/${
                    props.judgment.judgmentLeftTier.split(" ")[0]
                  }.png`}
                  alt="light logo"
                />
              </div>
            </div>
          </div>

          <Image
            className="rounded-full"
            width={70}
            height={70}
            src={`${constant.SERVER_URL}/public/champions/${props.judgment.judgmentLeftChampion}.png`}
            alt="light logo"
          />
        </div>

        {/* VS in the center */}
        <div className="px-10 text-lg font-bold">VS</div>

        {/* Right side */}
        <div className="flex items-center">
          <Image
            className="rounded-full"
            width={70}
            height={70}
            src={`${constant.SERVER_URL}/public/champions/${props.judgment.judgmentRightChampion}.png`}
            alt="dark logo"
          />
          <div className="flex flex-col w-[300px] justify-center text-sm ml-5 p-4">
            <div className="flex h-[30px] justify-between items-center">
              <p className="font-semibold text-gray-700 dark:text-gray-400">
                소환사명:
              </p>
              <p className="text-right font-bold transition duration-300">
                {props.judgment.judgmentRightName}
              </p>
            </div>
            <div className="flex h-[30px] justify-between items-center">
              <p className="font-semibold text-gray-700 dark:text-gray-400">
                라인:
              </p>
              <p className="text-right font-bold transition duration-300">
                {props.judgment.judgmentRightLine}
              </p>
            </div>
            <div className="flex h-[30px] justify-between items-center">
              <p className="font-semibold text-gray-700 dark:text-gray-400">
                티어:
              </p>
              <div className="flex items-center text-right font-bold transition duration-300 gap-1">
                {props.judgment.judgmentLeftTier}
                <Image
                  width={30}
                  height={30}
                  src={`${constant.SERVER_URL}/public/rank/${
                    props.judgment.judgmentRightTier.split(" ")[0]
                  }.png`}
                  alt="light logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="font-bold text-[28px] text-white drop-shadow-md">
          {rightpercent.toFixed(0)}%
        </div>
      </div>
    </div>
  );
};

export default JudgmentBox;
