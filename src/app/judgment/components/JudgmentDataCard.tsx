"use client";

import { JudgmentDTO } from "@/src/common/DTOs/judgment/judgment.dto";
import Image from "next/image";
import constant from "@/src/common/constant/constant";
interface Props {
  judgment: JudgmentDTO;
}

const JudgmentDataCard = (props: Props) => {
  const totalLike =
    props.judgment?.judgmentLeftLike + props.judgment?.judgmentRightLike;
  const leftpercent =
    totalLike === 0 ? 50 : (props.judgment?.judgmentLeftLike / totalLike) * 100;

  const rightpercent = 100 - leftpercent;
  return (
    <div
      className="judgment_summation flex w-full justify-around items-center rounded-lg"
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
              {props.judgment?.judgmentLeftName}
            </p>
          </div>
          <div className="flex h-[30px] justify-between items-center">
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              라인:
            </p>
            <p className="text-right font-bold transition duration-300">
              {props.judgment?.judgmentLeftLine}
            </p>
          </div>
          <div className="flex h-[30px] justify-between items-center">
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              티어:
            </p>
            <div className="flex items-center text-right font-bold transition duration-300 gap-1">
              {props.judgment?.judgmentLeftTier}
              {props.judgment?.judgmentLeftTier ? (
                <Image
                  width={30}
                  height={30}
                  src={`${constant.SERVER_URL}/public/rank/${
                    props.judgment?.judgmentLeftTier.split(" ")[0]
                  }.png`}
                  alt="light logo"
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        {props.judgment?.judgmentLeftChampion ? (
          <Image
            className="rounded-full"
            width={70}
            height={70}
            src={`${constant.SERVER_URL}/public/champions/${props.judgment?.judgmentLeftChampion}.png`}
            alt="light logo"
          />
        ) : (
          <div></div>
        )}
      </div>

      {/* VS in the center */}
      <div className="px-10 text-lg font-bold">VS</div>

      {/* Right side */}
      <div className="flex items-center">
        {props.judgment?.judgmentRightChampion ? (
          <Image
            className="rounded-full"
            width={70}
            height={70}
            src={`${constant.SERVER_URL}/public/champions/${props.judgment?.judgmentRightChampion}.png`}
            alt="dark logo"
          />
        ) : (
          <div></div>
        )}

        <div className="flex flex-col w-[300px] justify-center text-sm ml-5 p-4">
          <div className="flex h-[30px] justify-between items-center">
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              소환사명:
            </p>
            <p className="text-right font-bold transition duration-300">
              {props.judgment?.judgmentRightName}
            </p>
          </div>
          <div className="flex h-[30px] justify-between items-center">
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              라인:
            </p>
            <p className="text-right font-bold transition duration-300">
              {props.judgment?.judgmentRightLine}
            </p>
          </div>
          <div className="flex h-[30px] justify-between items-center">
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              티어:
            </p>
            <div className="flex items-center text-right font-bold transition duration-300 gap-1">
              {props.judgment?.judgmentRightTier}
              {props.judgment?.judgmentRightTier ? (
                <Image
                  width={30}
                  height={30}
                  src={`${constant.SERVER_URL}/public/rank/${
                    props.judgment?.judgmentRightTier.split(" ")[0]
                  }.png`}
                  alt="light logo"
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold text-[28px] text-white drop-shadow-md">
        {rightpercent.toFixed(0)}%
      </div>
    </div>
  );
};

export default JudgmentDataCard;
