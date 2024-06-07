"use client";
import Link from "next/link";
import DownloadButton from "./DownloadButton";
import { downloadFile } from "@/src/api/file.api";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="h-screen relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] "
      >
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/backgroundVideo.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  최고의 내전, <br />
                  LOLFIGHT Desktop과 함께!
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  당신과, 당신의 팀원들의 수준급 플레이를 보여주세요! <br />
                  숨어있는 강자들의 팀들과 수준 높은 경기력을 가질 수 있습니다.
                  <br />
                  적팀과 싸워서 승리를 쟁취하고 더 높은 경기력을 가진 팀이
                  되어보세요!
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    // href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-brandcolor px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    onClick={downloadFile}
                  >
                    🔥 태어나기
                  </button>
                  {/* <DownloadButton /> */}
                  <Link
                    href="https://jik-k.github.io/gameland"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    깃허브 가보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div> */}
        {/* <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />

            <defs>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div> */}
      </section>
    </>
  );
};

export default Hero;
