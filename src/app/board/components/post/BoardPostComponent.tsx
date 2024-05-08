import BoardPostHeadComponent from "./BoardPostHeadComponent";
import BoardPostBodyComponent from "./BoardPostBodyComponent";
import { PostDTO } from "@/src/common/DTOs/board/post.dto";

interface PostProps {
  data: PostDTO;
}

const BoardPostComponent = (props: PostProps) => {
  return (
    <div className="w-full bg-white ml-8 shadow-md">
      <div className="">
        <div className="head">
          <BoardPostHeadComponent post={props.data}></BoardPostHeadComponent>
        </div>
        <div className="body">
          <BoardPostBodyComponent data={props.data} />
        </div>
      </div>
    </div>
  );
};

export default BoardPostComponent;
