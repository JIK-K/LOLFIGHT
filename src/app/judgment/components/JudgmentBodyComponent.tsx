"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CustomAlert from "@/src/common/components/alert/CustomAlert";
import { JudgmentDTO } from "@/src/common/DTOs/judgment/judgment.dto";
import Image from "next/image";
import JudgmentDataCard from "./JudgmentDataCard";
import constant from "@/src/common/constant/constant";

interface JudgmentBodyComponentProp {
  judgment: JudgmentDTO;
}

const JudgmentBodyComponent = (props: JudgmentBodyComponentProp) => {
  const router = useRouter();
  const [commentContent, setCommentContent] = useState("");
  const [commentBoxKey, setCommentBoxKey] = useState(0); // State for key prop
  const [like, setLike] = useState(0);

  useEffect(() => {
    const storedId = sessionStorage.getItem("id")?.toString();

    if (storedId) {
      if (props.judgment) {
        // getLike(props.data, storedId).then((res) => {
        //   if (res.data.data) {
        //     setLike(1);
        //   } else {
        //     setLike(0);
        //   }
        // });
      }
    }
  }, [props.judgment]);

  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };

  const handleOnClick = () => {
    const storedId = sessionStorage.getItem("id")?.toString();
    if (storedId) {
      // @todo judgment 추천
      //   likePost(props.data, storedId).then((res) => {
      //     router.refresh();
      //     if (like === 0) {
      //       setLike(1);
      //     } else {
      //       setLike(0);
      //     }
      //   });
    } else {
      CustomAlert("info", "추천", "로그인이 필요합니다");
    }
  };

  const handleSaveCommentClick = () => {
    const storedId = sessionStorage.getItem("id")?.toString();
    if (!storedId) {
      CustomAlert("info", "댓글", "로그인이 필요합니다");
    } else if (!commentContent || commentContent.trim() === "") {
      CustomAlert("info", "댓글", "댓글을 작성해주세요");
    } else {
      // @todo judgment 댓글 작성
      //   writeComment(props.data, storedId, commentContent).then((res) => {
      //     router.refresh();
      //     setCommentBoxKey((prevKey) => prevKey + 1);
      //     setCommentContent("");
      //     // window.location.reload();
      //   });
    }
  };

  return (
    <div className="flex flex-col m-12 gap-12">
      <div className="flex flex-col gap-2">
        <div className="text-[22px] font-bold">재판 상황</div>
        <JudgmentDataCard judgment={props.judgment} />
      </div>

      <div className="flex flex-col gap-2 ">
        <div className="text-[22px] font-bold">상황 설명</div>
        <div className="border rounded-lg p-2">
          {props.judgment?.judgmentDesc}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-[22px] font-bold">영상 자료</div>
        {props.judgment?.judgmentVideo ? (
          <video className="w-full max-w-xl rounded-lg shadow-lg" controls>
            <source
              src={`${constant.SERVER_URL}/${props.judgment?.judgmentVideo}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="text-gray-500">영상 자료가 없습니다.</div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-[22px] font-bold">투표 하기</div>

        <div className="flex justify-between gap-4">
          <button className="w-1/2 p-4 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300">
            무죄
          </button>

          <button className="w-1/2 p-4 text-white font-semibold rounded-lg bg-red-500 hover:bg-red-600 transition duration-300">
            무죄
          </button>
        </div>
      </div>

      <div className="m-auto">
        {like === 0 ? (
          <button
            className="border border-gray-400 h-10 text-gray-400 rounded transition hover:bg-brandcolor hover:text-white w-20 m-1"
            onClick={handleOnClick}
          >
            <span className="">추천</span>
          </button>
        ) : (
          <button
            className="border border-gray-400 h-10 text-white rounded bg-brandcolor transition hover:bg-white hover:text-gray-400 w-20 m-1 dark:border-gray-700"
            onClick={handleOnClick}
          >
            <span className="">추천</span>
          </button>
        )}
      </div>
      <div className="border-b w-full mt-4 dark:border-gray-700"></div>
      <div className="my-8">댓글 </div>
      {/* <CommentBoxComponent
          key={commentBoxKey}
          data={props.data}
        ></CommentBoxComponent>
        <div className="w-full rounded-md px-4 border dark:border-gray-700 dark:bg-black">
          <div className="w-full h-36">
            <input
              className="w-full h-12 focus:outline-none dark:bg-black"
              placeholder="댓글을 입력하세요."
              value={commentContent}
              onChange={handleChangeComment}
            />
          </div>
          <div className="border-b w-full mt-4 dark:border-gray-700"></div>
          <div className="flex justify-end m-2">
            <button
              className="border rounded-md bg-brandcolor text-white w-20 h-8 dark:border-gray-700"
              onClick={handleSaveCommentClick}
            >
              작성하기
            </button>
          </div>
        </div> */}
    </div>
  );
};

export default JudgmentBodyComponent;
