"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Image } from "@nextui-org/react";
import constant from "@/src/common/constant/constant";
import CustomAlert from "@/src/common/components/alert/CustomAlert";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleClickJudgment = () => {
    alert("클릭했다오마리드");
  };
  const handleWriteClick = () => {
    const storedId = sessionStorage.getItem("id")?.toString();
    if (storedId) {
      router.replace(`/judgment//write`);
    } else {
      CustomAlert("info", "글쓰기", "로그인이 필요합니다");
    }
  };
  return (
    <div className="w-full my-16">
      <div className="w-1200px mx-auto mb-16">
        <div className="w-full bg-white dark:bg-dark shadow-md">
          <div className="flex flex-col">
            <div className="flex justify-between mx-8 mt-8 ">
              <span className="text-xl font-bold text-center justify-center items-center flex">
                롤로세움
              </span>
              <button
                className="h-8 w-16 border border-brandcolor bg-brandcolor text-white m-1 rounded-lg"
                onClick={handleWriteClick}
              >
                글쓰기
              </button>
            </div>

            <div className="flex justify-between font-semibold">
              <div className="flex my-2 ml-2"></div>
              <div className="flex w-[300px] border border-gray-200 rounded-md my-2 mr-2 dark:bg-black dark:border-black">
                <div className="bg-gray-100 w-12 h-10 flex flex-wrap justify-center content-center dark:bg-black">
                  <FaSearch />
                </div>
                <input
                  className="w-full h-10 rounded-md px-2 bg-gray-100 focus:outline-none dark:bg-black font-normal"
                  type="text"
                  placeholder="검색"
                  //   onChange={(e) => props.setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-[10px] text-sm flex border-t border-b border-slate-500 dark:bg-branddark" />
          <div className="flex flex-col w-full h-full p-[20px] gap-5">
            <div
              className="judgment_box flex-col border dark:border-gray-500 hover:border-brandcolor rounded-lg shadow-lg p-[20px]"
              onClick={handleClickJudgment}
            >
              <div className="judgment_title flex items-center justify-between">
                <p className="font-bold text-[20px]">
                  미드 vs 정글 3분 바위게 타이밍
                </p>
                <div className="flex items-end text-sm font-normal gap-3">
                  <p>조회수: 1</p>
                  <span className="text-gray-300">|</span>
                  <p>추천수: 20</p>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-end gap-1">
                    작성자:
                    <Image
                      width={25}
                      height={25}
                      src={`${constant.SERVER_URL}/public/member/Jihong2_.png`}
                      alt="light logo"
                    />
                    LOLFIGHT
                  </div>
                </div>
              </div>

              <div
                className="judgment_summation flex w-full mt-10 justify-center items-center rounded-lg"
                style={{
                  background:
                    "linear-gradient(to right, rgba(59, 130, 246, 1) 0%, rgba(59, 130, 246, 0) 50%, rgba(239, 68, 68, 0) 50%, rgba(239, 68, 68, 1) 100%)",
                }}
              >
                {/* Left side */}
                <div className="flex items-center">
                  <div className="flex flex-col w-[300px] justify-center text-sm mr-5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-semibold text-gray-700 dark:text-gray-400">
                        소환사명:
                      </p>
                      <p className="text-right font-bold transition duration-300">
                        반림동박치기공룡#세글자
                      </p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-semibold text-gray-700 dark:text-gray-400">
                        라인:
                      </p>
                      <p className="text-right font-bold transition duration-300">
                        미드
                      </p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-semibold text-gray-700 dark:text-gray-400">
                        티어:
                      </p>
                      <div className="flex items-center text-right font-bold transition duration-300 gap-1">
                        GOLD I
                        <Image
                          width={25}
                          height={25}
                          src={`${constant.SERVER_URL}/public/rank/GOLD.png`}
                          alt="light logo"
                        />
                      </div>
                    </div>
                  </div>

                  <Image
                    className="rounded-full"
                    width={70}
                    height={70}
                    src={`${constant.SERVER_URL}/public/champions/22.png`}
                    alt="light logo"
                  />
                </div>

                {/* VS in the center */}
                <div className="px-10 text-lg font-bold">VS</div>

                {/* Right side (mirrored) */}
                <div className="flex items-center">
                  <Image
                    className="rounded-full"
                    width={70}
                    height={70}
                    src={`${constant.SERVER_URL}/public/champions/23.png`}
                    alt="dark logo"
                  />
                  <div className="flex flex-col w-[300px] justify-center text-sm ml-5">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-semibold text-gray-700 dark:text-gray-400">
                        소환사명:
                      </p>
                      <p className="text-right font-bold transition duration-300">
                        반림동박치기공룡#세글자
                      </p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-semibold text-gray-700 dark:text-gray-400">
                        라인:
                      </p>
                      <p className="text-right font-bold transition duration-300">
                        미드
                      </p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-semibold text-gray-700 dark:text-gray-400">
                        티어:
                      </p>
                      <div className="flex items-center text-right font-bold transition duration-300 gap-1">
                        GOLD I
                        <Image
                          width={25}
                          height={25}
                          src={`${constant.SERVER_URL}/public/rank/CHALLENGER.png`}
                          alt="light logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full mt-5">
                <div className="flex h-4 w-full bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                  <div
                    className="h-full transition-all duration-300 ease-in-out"
                    style={{
                      width: "62%",
                      background:
                        "linear-gradient(to left, rgba(37, 99, 235, 0.5) 0%, rgba(37, 99, 235, 1) 50%)",
                    }} // 왼쪽 팀
                  ></div>
                  <div
                    className="h-full transition-all duration-300 ease-in-out"
                    style={{
                      width: "38%",
                      background:
                        "linear-gradient(to right, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 1) 50%)",
                    }} // 오른쪽 팀
                  ></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="font-bold text-blue-600">50%</span>
                  <span className="font-bold text-red-600">50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
