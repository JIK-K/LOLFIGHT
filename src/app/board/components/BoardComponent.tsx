"use client";

import BoardInfoComponent from "./BoardInfoComponent";
import BoardHeadComponent from "./BoardHeadComponent";
import { PostDTO } from "@/src/common/DTOs/board/post.dto";
import { useEffect, useState } from "react";
import { getPostList } from "@/src/api/post.api";
import boardNavLinks from "@/src/data/boardNavLinks";

interface BoardComponentProps {
  slug: string;
}

function getTitleFromSlug(slug: string) {
  const link = boardNavLinks.find((link) => link.href === `/board/${slug}`);
  return link?.title ?? "";
}

const BoardComponent = (props: BoardComponentProps) => {
  const [postList, setPostList] = useState<PostDTO[]>([]);

  useEffect(() => {
    getPostList(`${getTitleFromSlug(props.slug)}`).then((res) => {
      console.log(res);
      setPostList(res.data.data);
    });
  }, []);

  return (
    <div className="notice w-full bg-white ml-8 shadow-md">
      <div className="notice__head">
        <BoardHeadComponent
          head={{
            slug: props.slug,
          }}
        ></BoardHeadComponent>
      </div>
      <div className="notice__content">
        {postList.map((post) => (
          <BoardInfoComponent
            key={post.id}
            data={post}
            slug={props.slug}
          ></BoardInfoComponent>
        ))}
      </div>
    </div>
  );
};

export default BoardComponent;
