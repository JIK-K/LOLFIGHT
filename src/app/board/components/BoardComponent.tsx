import BoardInfoComponent from "./BoardInfoComponent";
import BoardHeadComponent from "./BoardHeadComponent";
import { PostDTO } from "@/src/common/DTOs/board/post.dto";

interface BoardComponentProps {
  slug: string;
}

const BoardComponent = (props: BoardComponentProps) => {
  const testyaya: PostDTO = {
    id: "1",
    postTitle: "겟앰프드 2.0 출시!",
    postContent: "겟앰프드 2.0이 출시되었습니다. 많은 관심 부탁드립니다.",
    postWriter: "다람지",
    postDate: "2058.02.11",
    postViews: 1000000,
    postLikes: 1,
    postComments: 0,
    postBoard: "공지",
    createAt: new Date(),
  };

  return (
    <div className="notice w-full bg-white ml-8 shadow-md">
      <div className="notice__head">
        <BoardHeadComponent
          head={{
            slug: props.slug,
          }}
        ></BoardHeadComponent>
      </div>
      <div className="notice__content">
        {/* 리스트로 꺼내와서 dto형태로 props하고 클릭하면 더 필요한거 있으면 가져오기로 */}
        <BoardInfoComponent
          data={testyaya}
          // onClick={() => {
          //   console.log("클릭");
          // }}
        ></BoardInfoComponent>
      </div>
    </div>
  );
};

export default BoardComponent;
