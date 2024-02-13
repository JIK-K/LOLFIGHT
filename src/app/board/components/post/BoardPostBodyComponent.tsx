import React from "react";

interface BoardPostBodyComponentProps {}

const BoardPostBodyComponent = (props: BoardPostBodyComponentProps) => {
  return (
    <div className="board-post-body flex flex-col m-12">
      <div className="board-post-body__body">
        <p className="">코로나18학번때문에 디지털 전환이 빠르게 이뤄지면서 산업 전반에 걸쳐 개발 인력이 부족한 상황입니다. 덕부에 스타트업부터 대기업까지 개발자 모시기에 정신이 없습니다. 그야마고 개발자 전성시대 입니다.ㅇㅇㅇㅇㅇ
        <p />dd
        군대 오쪼락호
        </p>
      </div>
      <div className="board-post-body__status">
        <button className="border border-black bg-brandcolor text-white">
          추천
        </button>
        <button className="border border-black bg-brandcolor text-white">
          공유
        </button>
        <button className="border border-black bg-brandcolor text-white">
          스크랩
        </button>
        <div className="border-b w-full mt-4"></div>
      </div>
      <div className="board-post-body__comment">
        <div className="my-8">댓글 props.comment</div>
        <div className="w-full rounded-md px-2 border">
          {/* <span>니아이디props.id어쩌고</span> */}
          <div className="w-full h-36">
            <input                 
            className="w-full h-12 mx-2 focus:outline-none"
            placeholder="댓글을 입력하세요."
            />
          </div>
          <div className="border-b w-full mt-4"></div>
          <div className="flex justify-end m-2">
            <button className="border rounded-md bg-brandcolor text-white w-20 h-8">
              작성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardPostBodyComponent;
