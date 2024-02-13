import BoardPostHeadComponent from "./BoardPostHeadComponent";
import BoardPostBodyComponent from "./BoardPostBodyComponent";

const BoardPostComponent = () => {
  return (
    <div className="w-full bg-white ml-8 shadow-md">
      <div className="">
        <div className="head">
          <BoardPostHeadComponent
            post={{
              title: "[정보]석",
              writer: "태양같은나이",
              date: "2022.03.02",
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
