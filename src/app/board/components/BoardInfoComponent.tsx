"use client";

import { PostDTO } from "@/src/common/DTOs/board/post.dto";

interface BoardInfoComponentProps {
  // number: number;
  // type: string;
  // title: string;
  // comment: number;
  // writer: string;
  // date: string;
  // views: number;
  data: PostDTO;
  // onClick?: () => void;
}

const handleClick = () => {
  console.log("클릭");
};

const BoardInfoComponent = (props: BoardInfoComponentProps) => {
  return (
    <div className="notice-info text-sm h-8 flex mt-1" onClick={handleClick}>
      <div className="notice-info__number w-1/12 flex items-center justify-center">
        {props.data.id}
      </div>
      <div className="notice-info__type w-1/12 flex items-center justify-center">
        여기뭐넣지
      </div>
      <div className="flex w-1/2 pl-4">
        <div className="notice-info__title flex items-center">
          {props.data.postTitle}
        </div>
        <div className="notice-info__comment flex items-center">
          [{props.data.postComments}]
        </div>
      </div>
      <div className="notice-info__writer w-1/12 flex items-center justify-center">
        {props.data.postWriter}
      </div>
      <div className="notice-info__date w-1/6 flex items-center justify-center">
        {props.data.createAt?.getDate().toString()}
      </div>
      <div className="notice-info__views w-1/12 flex items-center justify-center">
        {props.data.postViews}
      </div>
    </div>
  );
};

export default BoardInfoComponent;
