import { FaSearch } from "react-icons/fa";

interface BoardHeadComponentProps {
  head: {
    name: string;
  };
}

const BoardHeadComponent = (props: BoardHeadComponentProps) => {
  return (
    <div className="notice-head">
      <div className="notice-head__title flex flex-col">
        <span className="text-xl font-bold ml-2">{props.head.name}</span>
        <div className="flex justify-between font-semibold">
          <div className="flex my-4">
            <button className="w-16 border-b-2 border-brandcolor m-2">
              개념글
            </button>
            <button className="w-16 border-b-2 border-brandcolor m-2">
              인기도
            </button>
            <button className="w-16 border-b-2 border-brandcolor m-2">
              하이랜던
            </button>
            <button className="w-16 border-b-2 border-brandcolor m-2">
              일비표창
            </button>
          </div>
          <div className="flex w-96 border border-gray-200 rounded-md my-4">
            <input
              className="w-full h-10 rounded-md px-2 bg-gray-100 focus:outline-none"
              type="text"
              placeholder="검색"
            />
            <div className="bg-gray-100 w-12 h-10 flex flex-wrap justify-center content-center">
              <FaSearch />
            </div>
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

export default BoardHeadComponent;
