"use client";
// 버튼쓸거면 놔두고 버튼 안쓸거면 지우기
import { FaSearch } from "react-icons/fa";
import { getPostList } from "@/src/api/post.api";
import boardNavLinks from "@/src/data/boardNavLinks";
import { useRouter } from "next/navigation";

interface BoardHeadComponentProps {
  head: {
    slug: string;
  };
}

function getTitleFromSlug(slug: string) {
  const link = boardNavLinks.find((link) => link.href === `/board/${slug}`);
  return link?.title ?? "";
}

const BoardHeadComponent = (props: BoardHeadComponentProps) => {
  const router = useRouter();

  const handleOnClick = () => {
    console.log("클릭");
    console.log(`${getTitleFromSlug(props.head.slug)}`);
    getPostList(`${getTitleFromSlug(props.head.slug)}`).then((res) => {
      console.log(res);
    });
  };

  const handleWriteClick = () => {
    console.log("글쓰기 클릭");
    router.replace(`/board/${props.head.slug}/write`);
  };

  return (
    <div className="notice-head">
      <div className="notice-head__title flex flex-col">
        <div className="flex justify-between m-8">
          <span className="text-xl font-bold text-center justify-center items-center flex">
            {getTitleFromSlug(props.head.slug)}
          </span>
          <button
            className="h-8 w-16 border border-brandcolor bg-brandcolor text-white m-1"
            onClick={handleWriteClick}
          >
            글쓰기
          </button>
        </div>

        <div className="flex justify-between font-semibold">
          <div className="flex my-2 ml-2">
            {/* <button
              className="w-16 border border-brandcolor bg-brandcolor text-white m-1"
              onClick={handleOnClick}
            >
              개념글
            </button>
            <button className="w-16 border border-brandcolor m-1">
              인기도
            </button>
            <button className="w-16 border border-brandcolor m-1">
              하이랜더
            </button>
            <button className="w-16 border border-brandcolor m-1">
              일비표창
            </button> */}
          </div>
          <div className="flex w-96 border border-gray-200 rounded-md my-2 mr-2 dark:bg-black dark:border-black">
            <input
              className="w-full h-10 rounded-md px-2 bg-gray-100 focus:outline-none dark:bg-black"
              type="text"
              placeholder="검색"
            />
            <div className="bg-gray-100 w-12 h-10 flex flex-wrap justify-center content-center dark:bg-black">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-16 text-sm flex border-t border-b border-slate-500 dark:bg-branddark">
        <div className="w-1/12 flex items-center justify-center">추천</div>
        <div className="w-1/12 flex items-center justify-center">말머리</div>
        <div className="w-1/2 flex items-center justify-center">제목</div>
        <div className="w-1/12 flex items-center justify-center">작성자</div>
        <div className="w-1/6 flex items-center justify-center">작성일</div>
        <div className="w-1/12 flex items-center justify-center">조회수</div>
      </div>
    </div>
  );
};

export default BoardHeadComponent;
