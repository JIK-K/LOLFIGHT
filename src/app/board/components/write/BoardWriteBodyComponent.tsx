import dynamic from "next/dynamic";

const WysiwygEditor = dynamic(
  () => import("@/src/common/components/WysiwygEditor"),
  {
    ssr: false,
  }
);

const BoardWriteBodyComponent = () => {
  return (
    <div className="board-write-body flex flex-col m-12">
      <WysiwygEditor />
    </div>
  );
};

export default BoardWriteBodyComponent;
