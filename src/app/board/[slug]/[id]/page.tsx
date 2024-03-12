"use client";

import React, { useEffect, useState } from "react";
import { getPostContent } from "@/src/api/post.api";
import BoardNavComponent from "../../components/BoardNavComponent";
import BoardPostComponent from "../../components/post/BoardPostComponent";
import { PostDTO } from "@/src/common/DTOs/board/post.dto";
import boardNavLinks from "@/src/data/boardNavLinks";

type PageProps = {
  slug: string;
  id: string;
};

function getTitleFromSlug(slug: string) {
  const link = boardNavLinks.find((link) => link.href === `/board/${slug}`);
  return link?.title ?? "";
}

export default function Page({ params }: { params: PageProps }) {
  const [post, setPost] = useState<PostDTO>();

  useEffect(() => {
    if (!post) {
      getPostContent(getTitleFromSlug(params.slug), params.id).then((res) => {
        console.log("res", res);
        setPost(res.data.data);
        // console.log("post", post);
        // console.log("postContent", res.data.data.postContent);
      });
    }
  });

  return (
    <>
      <div className="w-full h-full my-16">
        <div className="w-1200px h-full mx-auto flex">
          <BoardNavComponent></BoardNavComponent>
          <BoardPostComponent data={post as PostDTO}></BoardPostComponent>
        </div>
      </div>
    </>
  );
}
