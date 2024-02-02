interface BoardInfoComponentProps {
  notice: {
    number: number;
    type: string;
    title: string;
    comment: number;
    writer: string;
    date: string;
    views: number;
  };
}

const BoardInfoComponent = (props: BoardInfoComponentProps) => {
  return (
    <div className="notice-info text-sm h-8 flex mt-1">
      <div className="notice-info__number w-1/12 flex items-center justify-center">
        {props.notice.number}
      </div>
      <div className="notice-info__type w-1/12 flex items-center justify-center">
        {props.notice.type}
      </div>
      <div className="flex w-1/2 pl-4">
        <div className="notice-info__title flex items-center">
          {props.notice.title}
        </div>
        <div className="notice-info__comment flex items-center">
          [{props.notice.comment}]
        </div>
      </div>
      <div className="notice-info__writer w-1/12 flex items-center justify-center">
        {props.notice.writer}
      </div>
      <div className="notice-info__date w-1/6 flex items-center justify-center">
        {props.notice.date}
      </div>
      <div className="notice-info__views w-1/12 flex items-center justify-center">
        {props.notice.views}
      </div>
    </div>
  );
};

export default BoardInfoComponent;
