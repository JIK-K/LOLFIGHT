import BoardNavComponent from "@/src/app/board/components/BoardNavComponent";
import BoardComponent from "@/src/app/board/components/BoardComponent";

export default function Page() {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-1200px h-full mx-auto flex">
          <BoardNavComponent></BoardNavComponent>
          <BoardComponent slug="yaya"></BoardComponent>
        </div>
      </div>
    </>
  );
}
