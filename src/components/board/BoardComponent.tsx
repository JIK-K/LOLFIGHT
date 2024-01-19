import BoardInfoComponent from "./BoardInfoComponent";
import BoardHeadComponent from "./BoardHeadComponent";

interface BoardComponentProps {
  notice: {
    title: string;
  };
}

//여기서는 작게 부분적으로 라우팅을 해야할것 같은데?
//컴포넌트가 아니라 페이지로 가야하는거 아닌가?
const BoardComponent = () => {
  return (
    <div className="notice w-full">
      <div className="notice__head">
        <BoardHeadComponent
          head={{
            name: "여기를api로 받아와야합니다~",
            tap: "전체",
            filter: "말머리",
            search: "제목+내용",
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
