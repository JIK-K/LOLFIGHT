import NoticeInfoComponent from "./NoticeInfoComponent";
import NoticeHeadComponent from "./NoticeHeadComponent";

const NoticeComponent = () => {
  return (
    <div className="notice w-full">
      <div className="notice__head">
        <NoticeHeadComponent
          head={{
            name: "all",
            tap: "전체",
            filter: "말머리",
            search: "제목+내용",
          }}
        ></NoticeHeadComponent>
      </div>
      <div className="notice__content">
        <NoticeInfoComponent
          notice={{
            number: 1,
            type: "공지",
            title: "공지사항",
            comment: 100,
            writer: "관리자",
            date: "2021.10.10",
            views: 100,
          }}
        ></NoticeInfoComponent>
      </div>
    </div>
  );
};

export default NoticeComponent;
