import BoardNavComponent from "../../components/BoardNavComponent";
import BoardWriteComponent from "../../components/write/BoardWriteComponent";

type PageProps = {
  slug: string;
};

export default function Page({ params }: { params: PageProps }) {
//   const title = getTitleFromSlug(params.slug);

  return (
    <>
      <div className="w-full h-full mt-16">
        <div className="w-1200px h-full mx-auto flex">
            <BoardNavComponent></BoardNavComponent>
            {params.slug}
            <BoardWriteComponent></BoardWriteComponent>
        </div>
      </div>
    </>
  );
}