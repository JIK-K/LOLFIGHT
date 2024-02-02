import BoardNavComponent from "../components/BoardNavComponent";
import BoardComponent from "../components/BoardComponent";
import { useRouter } from "next/router";
import boardNavLinks from "@/src/data/boardNavLinks";

type PageProps = {
  slug: string;
};

export default function Page({ params }: { params: PageProps }) {
  const title = getTitleFromSlug(params.slug);

  return (
    <>
      <div className="w-full h-full mt-16">
        <div className="w-1200px h-full mx-auto flex">
          <BoardNavComponent></BoardNavComponent>
          <BoardComponent title={title}></BoardComponent>
        </div>
      </div>
    </>
  );
}

function getTitleFromSlug(slug: string) {
  const link = boardNavLinks.find((link) => link.href === `/board/${slug}`);
  return link?.title ?? "";
}
