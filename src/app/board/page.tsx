import BoardNavComponent from "@/src/components/board/BoardNavComponent";
import BoardComponent from "@/src/components/board/BoardComponent";

export default function Page() {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-1200px h-full mx-auto flex">
          <BoardNavComponent></BoardNavComponent>
          <BoardComponent></BoardComponent>
        </div>
      </div>
    </>
  );
}
