import BoardWriteHeadComponent from "./BoardWriteHeadComponent";
import BoardWriteBodyComponent from './BoardWriteBodyComponent';

const BoardWriteComponent = () => {
  return (
    <div className="w-full bg-white ml-8 shadow-md">
      <div className="">
        <div className="head">
            <BoardWriteHeadComponent />
        </div>
        <div className="body">
            <BoardWriteBodyComponent />
        </div>
      </div>
    </div>
  );
};

export default BoardWriteComponent;
