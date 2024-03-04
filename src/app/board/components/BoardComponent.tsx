import BoardInfoComponent from "./BoardInfoComponent";
import BoardHeadComponent from "./BoardHeadComponent";

interface BoardComponentProps {
  slug: string;
}

const BoardComponent = (props: BoardComponentProps) => {
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
        <BoardInfoComponent
          notice={{
            number: 1,
            type: "공지",
            title: "공지사항",
            comment: 100,
            writer: "관리자",
            date: "2021.10.10",
            views: 100,
          }}
        ></BoardInfoComponent>
      </div>
    </div>
  );
};

export default BoardComponent;
