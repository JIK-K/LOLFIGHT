import NoticeNavComponent from "@/src/components/notice/NoticeNavComponent";
import NoticeComponent from "@/src/components/notice/NoticeComponent";

export default function Page() {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-1200px h-full mx-auto flex">
          <NoticeNavComponent></NoticeNavComponent>
          <NoticeComponent></NoticeComponent>
        </div>
      </div>
    </>
  );
}
