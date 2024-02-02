interface BoardPostHeadComponentProps {
  post: {
    title: string;
    writer: string;
    date: string;
    views: number;
  };
}

const BoardPostHeadComponent = (props: BoardPostHeadComponentProps) => {
  return (
    <div className="board-post-head flex flex-col bg-red-200">
      <div className="board-post-head__title">
        <span className="text-3xl font-bold">{props.post.title}</span>
      </div>
      <div className="text-sm board-post-head__status">
        <span>{props.post.date}</span>
        <span>작성자 : {props.post.writer}</span>
        <span>조회수 : {props.post.views}</span>
      </div>
    </div>
  );
};

export default BoardPostHeadComponent;
