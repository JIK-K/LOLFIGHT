import BoardNavComponent from "../../components/BoardNavComponent";
import BoardPostComponent from "../../components/post/BoardPostComponent";
export default function Page() {
  return (
    <>
      <div className="w-full h-full my-16">
        <div className="w-1200px h-full mx-auto flex">
          <BoardNavComponent></BoardNavComponent>
          <BoardPostComponent></BoardPostComponent>
        </div>
      </div>
    </>
  );
}
