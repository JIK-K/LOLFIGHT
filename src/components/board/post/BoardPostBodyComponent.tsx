import React from "react";

interface BoardPostBodyComponentProps {}

const BoardPostBodyComponent = (props: BoardPostBodyComponentProps) => {
  return (
    <div className="board-post-head flex flex-col bg-blue-200">
      <div className="board-post-body__body">
        <span className="">여기 단순하게 글 내용들이 들어오면 될 것이구요</span>
      </div>
      <div className="board-post-body__status">
        <button className="border border-black bg-brandcolor text-white">
          추천
        </button>
      </div>
    </div>
  );
};

export default BoardPostBodyComponent;
