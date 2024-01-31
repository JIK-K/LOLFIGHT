import React from "react";
import Image from "next/image";
import TestImg2 from "../../../assets/image/TestImg2.png";
interface Props {
  result: string;
}
const GuildFightBox = (props: Props) => {
  const result = props.result;
  return (
    <div
      className={`w-full h-45px flex text-14px pl-2 pr-2 gap-3 ${
        result === "win" ? "bg-sky-100" : "bg-rose-100"
      }`}
    >
      {/* 플레이어 */}
      <div className="flex h-full font-medium text-14px pb-3 pt-3 w-250px gap-2">
        <Image src={TestImg2} alt="GuildBanner" width={22} height={22} />
        <p>태양같은사나이</p>
      </div>

      {/* KDA */}
      <div className="flex font-medium pb-3 pt-3 w-120px">2.42</div>

      {/* 피해량 */}
      <div className="flex pb-3 pt-3 w-250px">
        <div className="w-3/4 h-full bg-gray-500 relative drop-shadow-md rounded">
          <div
            className={`h-full bg-red-500 rounded`}
            style={{ width: "30%" }} // 여기에 피해량에 대한 백분율 값을 동적으로 설정
          ></div>
          <p className="absolute text-12px top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ">
            12,200
          </p>
        </div>
      </div>

      {/* CS */}
      <div className="flex flex-col pb-1 pt-2 w-100px text-12px">
        <p className="h-full font-extrabold">100</p>
        <p className="h-full text-12px text-gray-500"> 분당 5.2</p>
      </div>

      {/* 아이템 */}
      <div className="flex w-300px pt-2 pb-2 text-12px gap-1">
        <img
          src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/item/6653.png?image=q_auto,f_webp,w_64,h_64&amp;v=1705738385020"
          className="object-contain w-30px"
          alt="리안드리의 고통"
        />
        <img
          src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/item/2055.png?image=q_auto,f_webp,w_64,h_64&amp;v=1705738385020"
          className="object-contain w-30px"
          alt="제어 와드"
        />
        <img
          src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/item/3145.png?image=q_auto,f_webp,w_64,h_64&amp;v=1705738385020"
          className="object-contain w-30px"
          alt="마법공학 교류 발전기"
        />
        <img
          src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/item/3118.png?image=q_auto,f_webp,w_64,h_64&amp;v=1705738385020"
          className="object-contain w-30px"
          alt="악의"
        />
        <img
          src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/item/3115.png?image=q_auto,f_webp,w_64,h_64&amp;v=1705738385020"
          className="object-contain w-30px"
          alt="내셔의 이빨"
        />
        <img
          src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/item/3009.png?image=q_auto,f_webp,w_64,h_64&amp;v=1705738385020"
          className="object-contain w-30px"
          alt="신속의 장화"
        />
        <img
          src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/item/3364.png?image=q_auto,f_webp,w_64,h_64&amp;v=1705738385020"
          className="object-contain w-30px"
          alt="예언자의 렌즈"
        />
      </div>
    </div>
  );
};

export default GuildFightBox;
