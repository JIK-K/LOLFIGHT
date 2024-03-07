"use client";

import { PostDTO } from "@/src/common/DTOs/board/post.dto";
import { useRouter } from "next/navigation";

interface BoardInfoComponentProps {
  slug: string;
  data: PostDTO;
}

const handleClick = () => {
  console.log("클릭");
};

const BoardInfoComponent = (props: BoardInfoComponentProps) => {
  const router = useRouter();
  const link = `${props.slug}/${props.data.id}`;

  const handleOnClick = () => {
    console.log("우리손주글함보자");
    router.push(link);
  };

  return (
    <div className="notice-info text-sm h-8 flex mt-1" onClick={handleClick}>
      <div className="notice-info__number w-1/12 flex items-center justify-center">
        {props.data.id}
      </div>
      <div className="notice-info__type w-1/12 flex items-center justify-center">
        {props.data.postBoard}
      </div>
      <div className="flex w-1/2 pl-4">
        <div className="notice-info__title flex items-center">
          {/* <a className="hover:underline" href={`${link}`}>
            {props.data.postTitle}
          </a> */}
          <a className="hover:underline cursor-pointer" onClick={handleOnClick}>
            {props.data.postTitle}
          </a>
        </div>
        <div className="notice-info__comment flex items-center text-gray-400">
          <a className="hover:underline" href="">
            [{props.data.postComments}]
          </a>
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
