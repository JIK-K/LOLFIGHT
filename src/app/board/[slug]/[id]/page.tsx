import BoardNavComponent from "../../../../components/board/BoardNavComponent";
import BoardPostComponent from "../../../../components/board/BoardPostComponent";
export default function Page() {
  return (
    <>
      <div className="w-full h-full mt-16">
        <div className="w-1200px h-full mx-auto flex">
          <BoardNavComponent></BoardNavComponent>
          <BoardPostComponent></BoardPostComponent>
        </div>
      </div>
    </>
  );
}
