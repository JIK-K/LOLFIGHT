import BoardNavComponent from "../../components/BoardNavComponent";
import BoardWriteComponent from "../../components/write/BoardWriteComponent";

type PageProps = {
  slug: string;
};

export default function Page({ params }: { params: PageProps }) {
  //   const title = getTitleFromSlug(params.slug);

  return (
    <>
      <div className="w-full my-16">
        <div className="w-1200px mx-auto flex">
          <BoardNavComponent></BoardNavComponent>
          <BoardWriteComponent></BoardWriteComponent>
        </div>
      </div>
    </>
  );
}
