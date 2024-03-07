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
    <div className="board-post-head flex flex-col m-12">
      <div className="board-post-head__title">
        <span className="text-3xl font-bold">{props.post.title}</span>
      </div>
      <div className="text-sm board-post-head__status mt-8 flex justify-between">
        <div className="flex">        
          <span className="">{props.post.date}</span>
          <span className="h-4 w-1px mx-1 bg-gray-700"></span>
          <span>{props.post.writer}</span>
          <span className="h-4 w-1px mx-1 bg-gray-700"></span>
          <span>조회수 : {props.post.views}</span>
        </div>
        <div>
          <span>어쩔래미저쩔래미</span>
        </div>
      </div>
      <div className="border-b w-full mt-4"></div>
    </div>
  );
};

export default BoardPostHeadComponent;
