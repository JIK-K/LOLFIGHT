"use client";
import constant from "@/src/common/constant/constant";
import React, { useState } from "react";

import championData from "../../../common/constant/champion_id_name_map.json";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ChampionsMap {
  [key: string]: string;
}

interface Summoner {
  name: string;
  line: string;
  tier: string;
}
export default function Page() {
  const router = useRouter();

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const [leftSummoner, setLeftSummoner] = useState<Summoner>({
    name: "",
    line: "",
    tier: "",
  });
  const [rightSummoner, setRightSummoner] = useState<Summoner>({
    name: "",
    line: "",
    tier: "",
  });

  const [champions] = useState<ChampionsMap>(championData);
  const [leftShowImages, setLeftShowImages] = useState<boolean>(false);
  const [rightShowImages, setRightShowImages] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedLeftChampion, setSelectedLeftChampion] = useState<string>("1");
  const [selectedRightChampion, setSelectedRightChampion] =
    useState<string>("2");

  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const filteredChampions = Object.entries(champions).filter(([id, name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const handleSummonerChange = (
    side: "left" | "right",
    field: keyof Summoner,
    value: string
  ) => {
    if (side === "left") {
      setLeftSummoner((prev) => ({ ...prev, [field]: value }));
    } else {
      setRightSummoner((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      const previewUrl = URL.createObjectURL(file);
      setVideoPreview(previewUrl);
    }
  };

  const handleVideoRemove = () => {
    setVideoFile(null);
    setVideoPreview(null);
  };

  const handleSaveClick = () => {
    console.log(
      `title: ${title}
  desc: ${description}
  leftSummoner: ${JSON.stringify(leftSummoner, null, 2)}
  rightSummoner: ${JSON.stringify(rightSummoner, null, 2)}` +
        `leftChampion:${selectedLeftChampion}` +
        `rightChampion:${selectedRightChampion}`
    );
  };

  const handleCancelClick = () => {
    router.replace("/");
  };

  // 왼쪽 이미지 클릭 핸들러
  const handleLeftImageClick = () => {
    setLeftShowImages(!leftShowImages);
    setRightShowImages(false);
    setSearchTerm("");
  };

  // 오른쪽 이미지 클릭 핸들러
  const handleRightImageClick = () => {
    setRightShowImages(!rightShowImages);
    setLeftShowImages(false);
    setSearchTerm("");
  };

  const handleChampionSelect = (id: string, isLeft: boolean) => {
    if (isLeft) {
      setSelectedLeftChampion(id);
    } else {
      setSelectedRightChampion(id);
    }
    setLeftShowImages(false);
    setRightShowImages(false);
  };

  return (
    <>
      <div className="w-full my-16">
        <div className="w-1200px mx-auto flex flex-col bg-white shadow-md dark:bg-dark p-12">
          <div className="mb-10 text-3xl font-extrabold">롤로세움</div>
          <input
            className="w-full h-10 mb-4 border rounded-md px-2 bg-gray-100 dark:bg-black dark:border-gray-700"
            type="text"
            placeholder="제목을 입력하세요"
            onChange={handleTitleChange}
          />
          <div className="flex w-full items-center justify-between">
            {/* left */}
            <div className="flex w-[500px] h-[130px] border dark:border-gray-700 rounded-md px-2 bg-gray-100 dark:bg-black items-center justify-center">
              <Image
                width={70}
                height={70}
                src={`${constant.SERVER_URL}/public/champions/${selectedLeftChampion}.png`}
                alt="Champion Icon"
                className="rounded-full cursor-pointer"
                onClick={handleLeftImageClick}
              />
              <div className="flex flex-col">
                <div className="flex flex-col w-[300px] justify-center text-sm ml-5">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-gray-700 dark:text-gray-400">
                      소환사명:
                    </p>
                    <input
                      className="text-right border rounded-md px-2 bg-gray-200 dark:bg-black dark:border-gray-700"
                      placeholder="LOLFIGHT#KR1"
                      onChange={(e) =>
                        handleSummonerChange("left", "name", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-gray-700 dark:text-gray-400">
                      라인:
                    </p>
                    <input
                      className="text-right border rounded-md px-2 bg-gray-200 dark:bg-black dark:border-gray-700"
                      placeholder="미드"
                      onChange={(e) =>
                        handleSummonerChange("left", "line", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-gray-700 dark:text-gray-400">
                      티어:
                    </p>
                    <input
                      className="text-right border rounded-md px-2 bg-gray-200 dark:bg-black dark:border-gray-700"
                      placeholder="골드 III"
                      onChange={(e) =>
                        handleSummonerChange("left", "tier", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* center */}
            <div className="px-10 text-lg font-bold">VS</div>

            {/* right */}
            <div className="flex w-[500px] h-[130px] border dark:border-gray-700 rounded-md px-2 bg-gray-100 dark:bg-black items-center justify-center">
              <div className="flex flex-col">
                <div className="flex flex-col w-[300px] justify-center text-sm mr-5">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-gray-700 dark:text-gray-400">
                      소환사명:
                    </p>
                    <input
                      className="text-right border rounded-md px-2 bg-gray-200 dark:bg-black dark:border-gray-700"
                      placeholder="LOLFIGHT#KR1"
                      onChange={(e) =>
                        handleSummonerChange("right", "name", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-gray-700 dark:text-gray-400">
                      라인:
                    </p>
                    <input
                      className="text-right border rounded-md px-2 bg-gray-200 dark:bg-black dark:border-gray-700"
                      placeholder="미드"
                      onChange={(e) =>
                        handleSummonerChange("right", "line", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-gray-700 dark:text-gray-400">
                      티어:
                    </p>
                    <input
                      className="text-right border rounded-md px-2 bg-gray-200 dark:bg-black dark:border-gray-700"
                      placeholder="골드 III"
                      onChange={(e) =>
                        handleSummonerChange("right", "tier", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <Image
                width={70}
                height={70}
                src={`${constant.SERVER_URL}/public/champions/${selectedRightChampion}.png`} // 기본 이미지
                alt="Champion Icon"
                className="rounded-full cursor-pointer"
                onClick={handleRightImageClick}
              />
            </div>
          </div>

          {/* 이미지 선택창 */}
          {(leftShowImages || rightShowImages) && (
            <div className="w-full h-auto p-4 bg-white dark:bg-gray-900 border rounded-md mt-4">
              <input
                className="w-full h-10 mb-4 border rounded-md px-2 bg-gray-100 dark:bg-black dark:border-gray-700"
                type="text"
                placeholder="챔피언 검색"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="grid grid-cols-12 gap-2">
                {filteredChampions.map(([id, name]) => (
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      key={id}
                      width={70}
                      height={70}
                      src={`${constant.SERVER_URL}/public/champions/${id}.png`}
                      alt={name}
                      className="cursor-pointer"
                      onClick={() => handleChampionSelect(id, leftShowImages)}
                    />
                    <p className="font-light text-[10px]">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <textarea
            className="w-full h-[100px] my-4 border rounded-md px-2 bg-gray-100 dark:bg-black dark:border-gray-700"
            placeholder="상황에 대한 설명을 작성해주세요"
            onChange={handleDescChange}
          />

          {/* 영상 업로드 부분 */}
          <div className="w-full my-4">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
              영상 업로드
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="mb-2 border rounded-md px-2 py-1 bg-gray-100 dark:bg-black dark:border-gray-700"
            />
            {videoPreview && (
              <div className="relative w-full h-full">
                <video
                  src={videoPreview}
                  controls
                  className="w-full h-full rounded-md"
                />
                <button
                  onClick={handleVideoRemove}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-md px-2"
                >
                  제거
                </button>
              </div>
            )}
          </div>

          <div className="w-full flex justify-between">
            <button
              className="w-16 h-10 flex font-medium border items-center justify-center rounded-md cursor-pointer my-4 dark:border-gray-700 dark:text-gray-100"
              onClick={handleCancelClick}
            >
              취소
            </button>
            <button
              className="w-32 h-10 flex font-medium bg-brandcolor text-white items-center justify-center rounded-md cursor-pointer my-4"
              onClick={handleSaveClick}
            >
              작성하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
