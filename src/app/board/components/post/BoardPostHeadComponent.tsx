interface BoardPostHeadComponentProps {
  post: {
    title: string;
    writer: string;
    date: Date;
    views: number;
  };
}

const BoardPostHeadComponent = (props: BoardPostHeadComponentProps) => {
  const postDateTime = new Date(props.post.date);
  const year = postDateTime.getFullYear();
  const month = (postDateTime.getMonth() + 1).toString().padStart(2, "0");
  const day = postDateTime.getDate().toString().padStart(2, "0");

  return (
    <div className="board-post-head flex flex-col m-12">
      <div className="board-post-head__title">
        <span className="text-3xl font-bold">{props.post.title}</span>
      </div>
      <div className="text-sm board-post-head__status mt-8 flex justify-between">
        <div className="flex">
          <span className="">{`${year}.${month}.${day}`}</span>
          <span className="h-4 w-1px mx-1 bg-gray-700"></span>
          <span>{props.post.writer}</span>
          {/* <span className="h-4 w-1px mx-1 bg-gray-700"></span>
          <span></span> */}
        </div>
        <div>조회수 : {props.post.views}</div>
      </div>
      <div className="border-b w-full mt-4"></div>
    </div>
  );
};

export default BoardPostHeadComponent;
