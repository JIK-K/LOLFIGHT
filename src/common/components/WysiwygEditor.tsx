"use client";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
// import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
<<<<<<< Updated upstream

const WysiwygEditor = () => {
=======
import boardNavLinks from "@/src/data/boardNavLinks";
import { useEffect, useRef } from "react";
import { writePost } from "@/src/api/post.api";
import constant from "@/src/common/constant/constant";
import { useState } from "react";
import { PostDTO } from "@/src/common/DTOs/board/post.dto";
import axios from "axios";
import { blob } from "stream/consumers";
import { on } from "events";
import { useRouter } from "next/navigation";

const WysiwygEditor = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const editorRef = useRef<Editor>(null);
>>>>>>> Stashed changes
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["image"],
    ["code"],
    ["scrollSync"],
  ];

<<<<<<< Updated upstream
=======
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook("addImageBlobHook");

      editorRef.current
        .getInstance()
        .addHook("addImageBlobHook", (blob: any, callback: any) => {
          onUploadImage(blob, callback);
        });
    }
  }, [editorRef]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    console.log(category);
  };

  const handleCancleClick = () => {
    console.log("취소");
    console.log(constant.SERVER_URL);
  };

  const handleSaveClick = async () => {
    const link = "";
    const editorIns = editorRef.current?.getInstance().getHTML() || "";
    writePost(title, editorIns, "작성자", category).then((response) => {
      console.log(response);
      boardNavLinks
        .filter((link) => link.href !== "/")
        .map((link) => {
          if (link.title === category) {
            router.replace(link.href + "/" + response.data.data.id);
          }
        });
      return;
    });
  };

  const onUploadImage = async (blob: any, callback: any) => {
    console.log(blob);
    const formData = new FormData();
    formData.append("file", blob);
    try {
      const imageRes = await axios.post(
        `${constant.SERVER_URL}/post/image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("imageRes", imageRes);
      console.log("imageRes", imageRes.data.data);
      const imageUrl = `${constant.SERVER_URL}/` + imageRes.data.data;
      console.log("imgurl", imageUrl);
      setImage(imageUrl);
      callback(imageUrl, "image");
    } catch (error) {
      console.log(error);
    }
  };

>>>>>>> Stashed changes
  return (
    <div className="flex flex-col justify-center items-center h-full">
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
        <button className="w-16 h-10 flex font-medium border  items-center justify-center rounded-md cursor-pointer my-4">
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
