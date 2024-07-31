"use client";

import { PostDTO } from "@/src/common/DTOs/board/post.dto";
import { useRouter } from "next/navigation";
import boardNavLinks from "@/src/data/boardNavLinks";
import { useState } from "react";

interface BoardInfoComponentProps {
  slug: string;
  data: PostDTO;
}

function getSlugFromTitle(title: string) {
  const link = boardNavLinks.find((link) => link.title === title);
  return link?.slug ?? "";
}

const BoardInfoComponent = (props: BoardInfoComponentProps) => {
  const router = useRouter();
  const link = `${props.slug}/${props.data.id}`;
  // const link = `${props.data.postBoard}/${props.data.id}`;
  const [postDate, setPostDate] = useState<String>();

  const handleOnClick = () => {
    if (props.slug == "all") {
      // router.push(`${props.data.postBoard}/${props.data.id}`);
      router.push(getSlugFromTitle(props.data.postBoard) + "/" + props.data.id);
    } else {
      router.push(link);
    }
  };

  const getDate = (date: string | number | Date) => {
    const today = new Date();
    const postDateTime = new Date(date);

    if (
      postDateTime.getDate() === today.getDate() &&
      postDateTime.getMonth() === today.getMonth() &&
      postDateTime.getFullYear() === today.getFullYear()
    ) {
      const hour = postDateTime.getHours().toString().padStart(2, "0");
      const minute = postDateTime.getMinutes().toString().padStart(2, "0");
      return `${hour}:${minute}`;
      // return `${postDateTime.getHours()}:${postDateTime.getMinutes()}`;
    } else {
      // const formattedDate = `${postDateTime.getFullYear()}-${
      //   postDateTime.getMonth() + 1
      // }-${postDateTime.getDate()}`;
      const month = (postDateTime.getMonth() + 1).toString().padStart(2, "0");
      const day = postDateTime.getDate().toString().padStart(2, "0");
      return `${month}.${day}`; // 오늘이 아니면 MM.DD 형태로 출력
    }
  };

  return (
    <div className="notice-info text-sm h-8 flex mt-1">
      <div className="notice-info__number w-1/12 flex items-center justify-center">
        {props.data.postLikes}
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
      <div className="notice-info__writer w-2/12 flex items-center justify-center">
        {props.data.postWriter}
      </div>
      <div className="notice-info__date w-1/6 flex items-center justify-center">
        {getDate(props.data.postDate)}
      </div>
      <div className="notice-info__views w-1/12 flex items-center justify-center">
        {props.data.postViews}
      </div>
    </div>
  );
};

export default BoardInfoComponent;
