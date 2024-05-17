import React, { useEffect } from "react";
import { BattlePlayerDTO } from "@/src/common/DTOs/battle/battle_player.dto";
import constant from "@/src/common/constant/constant";
interface Props {
  battlePlayerData: BattlePlayerDTO;
  result: boolean;
  guildName: string;
  highestDamage: number;
}

const GuildFightBox = (props: Props) => {
  const result = props.result ? "win" : "lose";
  const kda =
    props.battlePlayerData?.deaths === 0
      ? "Perfect"
      : (
          (props.battlePlayerData?.killed + props.battlePlayerData?.assists) /
          props.battlePlayerData?.deaths
        ).toFixed(2);

  // KDA에 따라 색상을 동적으로 지정하는 함수
  const getKDABackgroundColor = (kda: number | string) => {
    if (
      kda === "Perfect" ||
      (typeof kda === "string" && parseFloat(kda) >= 4.0)
    ) {
      return "text-red-500 font-bold underline"; // Perfect일 경우 빨간색
    } else if (typeof kda === "string" && parseFloat(kda) >= 3.0) {
      return "text-blue-500 font-bold"; // 4.0 이상일 경우 초록색
    } else if (typeof kda === "string" && parseFloat(kda) >= 2.0) {
      return "text-green-500"; // 3.0 이상일 경우 파란색
    } else {
      return "text-gray-500"; // 그 외의 경우 회색
    }
  };

  if (props.battlePlayerData == null || undefined) {
    return <div></div>;
  }

  return (
    <div
      className={`w-full h-45px flex text-14px pl-2 pr-2 gap-3 ${
        result === "win" ? "bg-sky-100" : "bg-rose-100"
      }`}
    >
      {/* 플레이어 */}
      <div className="flex h-full font-medium text-14px pb-3 pt-3 w-250px gap-2">
        <img
          src={`${constant.SERVER_URL}/public/guild/${props.guildName}.png`}
          alt="GuildBanner"
          width={22}
          height={22}
        />
        <img
          src={`${constant.SERVER_URL}/public/champions/${props.battlePlayerData.championId}.png`}
          alt="Champion"
          width={20}
          height={20}
        />
        <p>{props.battlePlayerData.summonerName}</p>
      </div>

      {/* Spell/Rune */}
      <div className="flex w-50px gap-1">
        <div className="flex flex-col">
          <img
            src={`${constant.SERVER_URL}/public/spell/${props.battlePlayerData.spell1Id}.png`}
            alt="spell1"
            width={20}
          />
          <img
            src={`${constant.SERVER_URL}/public/spell/${props.battlePlayerData.spell2Id}.png`}
            alt="spell2"
            width={20}
          />
        </div>
        <div className="flex flex-col">
          <img
            src={`${constant.SERVER_URL}/public/rune/${props.battlePlayerData.perk0}.png`}
            alt="rune"
            width={20}
          />
          <img
            src={`${constant.SERVER_URL}/public/rune/${props.battlePlayerData.perkSub}.png`}
            alt="sub_rune"
            width={18}
          />
        </div>
      </div>
      {/* KDA */}
      <div className={`flex flex-col justify-center font-medium w-120px `}>
        <div className={`text-12px ${getKDABackgroundColor(kda)}`}>
          평점 {kda}
        </div>
        <div className="font-light">
          {props.battlePlayerData.killed} / {props.battlePlayerData.deaths} /{" "}
          {props.battlePlayerData.assists}
        </div>
      </div>

      {/* 피해량 */}
      <div className="flex pb-3 pt-3 w-220px">
        <div className="w-200px h-full bg-gray-500 relative drop-shadow-md rounded">
          <div
            className={`h-full bg-red-500 rounded`}
            style={{
              width: `${
                (props.battlePlayerData.totalChampionsDamage /
                  props.highestDamage) *
                100
              }%`,
            }}
          ></div>
          <p className="absolute text-12px top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ">
            {props.battlePlayerData.totalChampionsDamage}
          </p>
        </div>
      </div>

      {/* CS */}
      <div className="flex flex-col pb-1 pt-2 w-60px text-12px">
        <p className="h-full font-normal">
          레벨 {props.battlePlayerData.level}
        </p>
        <p className="h-full font-extrabold ">
          CS {props.battlePlayerData.minionsKilled}
        </p>
      </div>

      {/* 시야점수 */}
      <div className="flex flex-col pb-1 pt-2 w-60px text-14px">
        <p className="font-light pl-2 pt-1">
          {props.battlePlayerData.visionScore}
        </p>
      </div>

      {/* 아이템 */}
      <div className="flex w-300px pt-2 pb-2 text-12px gap-1">
        {props.battlePlayerData.items.split(",").map((itemId, index) => {
          const itemNumber = parseInt(itemId.trim());
          return (
            itemNumber !== 0 && (
              <img
                key={index}
                src={`${constant.SERVER_URL}/public/items/${itemNumber}.png`}
                className="object-contain w-30px"
                alt={`Item${itemNumber}`}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default GuildFightBox;
