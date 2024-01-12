import { FaSearch } from "react-icons/fa";

interface NoticeHeadComponentProps {
  head: {
    name: string;
    tap: string;
    filter: string;
    search: string;
  };
}

const NoticeHeadComponent = (props: NoticeHeadComponentProps) => {
  return (
    <div className="notice-head">
      <div className="notice-head__title">
        <h1>{props.head.name}</h1>
        <div className="flex w-540px border border-gray-200 rounded-md my-4">
          <input
            className="w-full h-12 rounded-md px-2 bg-gray-100 focus:outline-none"
            type="text"
            placeholder="검색"
          />
          <div className="bg-gray-100 w-12 h-12 flex flex-wrap justify-center content-center">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="w-full h-16 text-sm flex border-t-2 border-b border-brandcolor">
        <div className="w-1/12 flex items-center justify-center">번호</div>
        <div className="w-1/12 flex items-center justify-center">말머리</div>
        <div className="w-1/2 flex items-center justify-center">제목</div>
        <div className="w-1/12 flex items-center justify-center">작성자</div>
        <div className="w-1/6 flex items-center justify-center">작성일</div>
        <div className="w-1/12 flex items-center justify-center">조회수</div>
      </div>
    </div>
  );
};

export default NoticeHeadComponent;
