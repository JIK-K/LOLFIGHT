import BoardPostHeadComponent from "@/src/app/board/components/post/BoardPostHeadComponent";
import BoardPostBodyComponent from "@/src/app/board/components/post/BoardPostBodyComponent";

const BoardPostComponent = () => {
  return (
    <div className="w-full bg-white ml-8 shadow-md">
      <div className="">
        <div className="head">
          <BoardPostHeadComponent
            post={{
              title: "여기는 제목이 들어 갈래유",
              writer: "여기는 작성자",
              date: "여기는 날짜욘",
              views: 7,
            }}
          ></BoardPostHeadComponent>
        </div>
        <div className="body">
          <BoardPostBodyComponent />
        </div>
      </div>
    </div>
  );
};

export default BoardPostComponent;
