import React, { useEffect } from "react";
import { getPostContent } from "@/src/api/post.api";
import { PostDTO } from "@/src/common/DTOs/board/post.dto";

interface BoardPostBodyComponentProps {
  data: PostDTO;
}

const BoardPostBodyComponent = (props: BoardPostBodyComponentProps) => {
  return (
    <div className="board-post-body flex flex-col m-12">
      <div className="board-post-body__body">
        <p className="">{props.data?.postContent}</p>
      </div>
      <div className="board-post-body__status">
        <button className="border border-black bg-brandcolor text-white">
          추천
        </button>
        <button className="border border-black bg-brandcolor text-white">
          공유
        </button>
        <button className="border border-black bg-brandcolor text-white">
          스크랩
        </button>
        <div className="border-b w-full mt-4"></div>
      </div>
      <div className="board-post-body__comment">
        <div className="my-8">댓글 {props.data?.postComments}</div>
        <div className="w-full rounded-md px-2 border">
          {/* <span>니아이디props.id어쩌고</span> */}
          <div className="w-full h-36">
            <input
              className="w-full h-12 mx-2 focus:outline-none"
              placeholder="댓글을 입력하세요."
            />
          </div>
          <div className="border-b w-full mt-4"></div>
          <div className="flex justify-end m-2">
            <button className="border rounded-md bg-brandcolor text-white w-20 h-8">
              작성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardPostBodyComponent;
