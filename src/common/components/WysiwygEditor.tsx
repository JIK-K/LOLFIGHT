"use client";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
// import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import boardNavLinks from "@/src/data/boardNavLinks";

const WysiwygEditor = () => {
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["image"],
    ["code"],
    ["scrollSync"],
  ];

  return (
    <div className="flex flex-col h-full">
      <select className="w-32 h-10 border rounded-md mb-4">
        {boardNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <option key={link.title} value={link.title}>
              {link.title}
            </option>
          ))}
      </select>
      <input
        className="w-full h-10 mb-4 border rounded-md px-2 bg-gray-100"
        type="text"
        placeholder="제목을 입력하세요"
      ></input>
      <div className="w-full overflow-hidden overflow-y-scroll">
        <Editor
          initialValue=""
          placeholder="글을 작성해주세요"
          initialEditType="wysiwyg"
          previewStyle="tab"
          height="60rem"
          plugins={[colorSyntax]}
          toolbarItems={toolbarItems}
        ></Editor>
      </div>
      <div className="w-full flex justify-between">
        <button className="w-16 h-10 flex font-medium border items-center justify-center rounded-md cursor-pointer my-4">
          취소
        </button>
        <button className="w-32 h-10 flex font-medium bg-brandcolor text-white items-center justify-center rounded-md cursor-pointer my-4">
          작성하기
        </button>
      </div>
    </div>
  );
};

export default WysiwygEditor;
