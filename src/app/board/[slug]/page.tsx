import BoardNavComponent from "../../../components/board/BoardNavComponent";
import BoardComponent from "../../../components/board/BoardComponent";

type PageProps = {
  slug: string;
};

export default function Page({ params }: { params: PageProps }) {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-1200px h-full mx-auto flex">
          <BoardNavComponent></BoardNavComponent>
          <BoardComponent title={params.slug}></BoardComponent>
        </div>
      </div>
    </>
  );
}
