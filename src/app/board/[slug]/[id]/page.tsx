"use client";

import React, { useEffect, useState } from "react";
import { getPostContent } from "@/src/api/post.api";
import BoardNavComponent from "../../components/BoardNavComponent";
import BoardPostComponent from "../../components/post/BoardPostComponent";
import { PostDTO } from "@/src/common/DTOs/board/post.dto";
import boardNavLinks from "@/src/data/boardNavLinks";
import { useRouter } from "next/router";

type PageProps = {
  slug: string;
  id: string;
};

interface postProps {
  data: PostDTO;
}

function getTitleFromSlug(slug: string) {
  const link = boardNavLinks.find((link) => link.href === `/board/${slug}`);
  return link?.title ?? "";
}

function getSlugFromTitle(title: string) {
  const link = boardNavLinks.find((link) => link.title === title);
  return link?.slug ?? "";
}

export default function Page(
  { params }: { params: PageProps },
  props: postProps
) {
  // const router = useRouter();
  // const { postDTO } = router.query;
  const [post, setPost] = useState<PostDTO>();

  useEffect(() => {
    if (!post) {
      // 전체 게시판인 경우 slug에서 문제가 생김
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
      <div className="w-full my-16">
        <div className="w-1200px mx-auto flex">
          <BoardNavComponent></BoardNavComponent>
          <BoardPostComponent data={post as PostDTO}></BoardPostComponent>
        </div>
      </div>
    </>
  );
}
