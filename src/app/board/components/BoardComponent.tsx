"use client";

import { useEffect, useState } from "react";
import { getPostList } from "@/src/api/post.api";
import boardNavLinks from "@/src/data/boardNavLinks";
import Pagination from "@mui/material/Pagination";
import BoardInfoComponent from "./BoardInfoComponent";
import BoardHeadComponent from "./BoardHeadComponent";
import { PostDTO } from "@/src/common/DTOs/board/post.dto";

interface BoardComponentProps {
  slug: string;
}

function getTitleFromSlug(slug: string) {
  const link = boardNavLinks.find((link) => link.href === `/board/${slug}`);
  return link?.title ?? "";
}

const BoardComponent = (props: BoardComponentProps) => {
  const [postList, setPostList] = useState<PostDTO[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // 총 페이지 수
  const postsPerPage = 15;

  useEffect(() => {
    getPostList(`${getTitleFromSlug(props.slug)}`).then((res) => {
      console.log(res);
      setPostList(res.data.data);
      setTotalPages(Math.ceil(res.data.data.length / postsPerPage));
    });
  }, []);

  const handlePageClick = (
    event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    setCurrentPage(pageNumber);
  };

  const paginatedPosts = postList.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="notice w-full bg-white dark:bg-dark ml-8 shadow-md">
      <div className="notice__head">
        <BoardHeadComponent
          head={{
            slug: props.slug,
          }}
        ></BoardHeadComponent>
      </div>
      <div className="notice__content">
        {paginatedPosts.map((post) => (
          <BoardInfoComponent
            key={post.id}
            data={post}
            slug={props.slug}
          ></BoardInfoComponent>
        ))}
      </div>
      <div className="notice__pagination w-full flex justify-center mt-3 p-3 border-t-2 border-brandcolor">
        <Pagination
          count={totalPages}
          shape="rounded"
          boundaryCount={2}
          onChange={(event, page) => handlePageClick(event, page)}
          sx={{
            ".dark & .Mui-selected": {
              backgroundColor: "#4C4C4C", // 원하는 색상으로 변경
              color: "#CACACA", // 텍스트 색상
              "&:hover": {
                backgroundColor: "#707070", // 호버 시 색상
              },
            },
            ".dark & .MuiPaginationItem-root": {
              color: "#EEEEEE", // 선택되지 않은 아이템의 기본 텍스트 색상
            },
            ".dark & .MuiPaginationItem-icon": {
              color: "#EEEEEE", // 텍스트 색상
            },
          }}
        />
      </div>
    </div>
  );
};

export default BoardComponent;
