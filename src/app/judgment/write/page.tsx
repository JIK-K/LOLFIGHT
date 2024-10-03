type PageProps = {
  slug: string;
};

export default function Page({ params }: { params: PageProps }) {
  //   const title = getTitleFromSlug(params.slug);

  return (
    <>
      <div className="w-full my-16">
        <div className="w-1200px mx-auto flex">글을쓰자</div>
      </div>
    </>
  );
}
