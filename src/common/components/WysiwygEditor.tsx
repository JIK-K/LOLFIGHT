"use client";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
// import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import boardNavLinks from "@/src/data/boardNavLinks";
import { useRef } from "react";
import { writePost } from "@/src/api/post.api";
import constant from "@/src/common/constant/constant";
import { useState } from "react";
import { PostDTO } from "@/src/common/DTOs/board/post.dto";

const WysiwygEditor = () => {
  const editorRef = useRef<Editor>(null);
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["image"],
    ["code"],
    ["scrollSync"],
  ];

  const handleCancleClick = () => {
    console.log("취소");
    console.log(constant.SERVER_URL);
  };

  const handleSaveClick = async () => {
    const editorIns = editorRef.current?.getInstance().getHTML() || "";
    console.log(editorIns);
    const postDTO: PostDTO = {
      postTitle: "제목",
      postContent: editorIns,
      postWriter: "작성자",
      postDate: "2021-10-10",
      postBoard: "자유게시판",
      postViews: 0,
      postLikes: 0,
      postComments: 0,
    };
    writePost({
      ...postDTO,
    }).then((response) => {
      console.log(response);
      return;
    });
  };

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
          ref={editorRef}
          initialValue=" "
          placeholder="글을 작성해주세요"
          initialEditType="wysiwyg"
          previewStyle="tab"
          height="60rem"
          plugins={[colorSyntax]}
          toolbarItems={toolbarItems}
        />
      </div>
      <div className="w-full flex justify-between">
        <button
          className="w-16 h-10 flex font-medium border items-center justify-center rounded-md cursor-pointer my-4"
          onClick={handleCancleClick}
        >
          취소
        </button>
        <button
          className="w-32 h-10 flex font-medium bg-brandcolor text-white items-center justify-center rounded-md cursor-pointer my-4"
          onClick={handleSaveClick}
        >
          작성하기
        </button>
      </div>
    </div>
  );
};

export default WysiwygEditor;
