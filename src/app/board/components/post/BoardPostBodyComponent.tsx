"use client";

import React, { useEffect, useRef, useState } from "react";
import { getPostContent } from "@/src/api/post.api";
import { writeComment } from "@/src/api/comment.api";
import { PostDTO } from "@/src/common/DTOs/board/post.dto";
import { Editor } from "@toast-ui/react-editor";
import { Viewer } from "@toast-ui/react-editor";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/toastui-editor-viewer.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CommentBoxComponent from "./comment/CommentBoxComponent";

interface BoardPostBodyComponentProps {
  data: PostDTO;
}

const BoardPostBodyComponent = (props: BoardPostBodyComponentProps) => {
  const [content, setContent] = useState<String>();
  const [commentContent, setCommentContent] = useState("");

  useEffect(() => {
    console.log("editorRef.current", props.data?.postContent);
    setContent(props.data?.postContent);
  }, [props.data]);

  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
    console.log(commentContent);
  };

  const handleOnClick = () => {
    console.log("죽고싶냐?", content);
    console.log("죽고잡냐?", props.data.postBoard);
  };

  const handleCommentSaveClick = () => {
    console.log("댓글 저장");

    const storedMemberId = sessionStorage.getItem("memberId")?.toString();
    if (storedMemberId) {
      writeComment(props.data, storedMemberId, commentContent).then((res) => {
        console.log(res);
      });
    } else {
      console.log("로그인이 필요합니다.");
    }
  };

  return (
    <div className="board-post-body flex flex-col m-12">
      <div className="board-post-body__body w-full">
        {/* <p className="">{props.data?.postContent}</p> */}
        {/* <Viewer height="60rem" initialValue={props.data?.postContent} /> */}
        {/* <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={props.data?.postContent}
          remarkPlugins={[remarkGfm]}
        ></ReactMarkdown> */}
        {/* {props.data?.postContent}.setHtml(); */}
        <div
          dangerouslySetInnerHTML={{
            __html: props.data?.postContent,
          }}
        ></div>
      </div>
      <div className="board-post-body__status">
        <button
          className="border border-black bg-brandcolor text-white"
          onClick={handleOnClick}
        >
          추천
        </button>
        <button className="border border-black bg-brandcolor text-white">
          공유
        </button>
        <button className="border border-black bg-brandcolor text-white">
          스크랩
        </button>
        <div className="border-b w-full mt-4"></div>
      </div>
      <div className="board-post-body__comment">
        <div className="my-8">댓글 {props.data?.postComments}</div>
        <CommentBoxComponent data={props.data}></CommentBoxComponent>
        <div className="w-full rounded-md px-2 border">
          {/* <span>니아이디props.id어쩌고</span> */}
          <div className="w-full h-36">
            <input
              className="w-full h-12 mx-2 focus:outline-none"
              placeholder="댓글을 입력하세요."
              onChange={handleChangeComment}
            />
          </div>
          <div className="border-b w-full mt-4"></div>
          <div className="flex justify-end m-2">
            <button
              className="border rounded-md bg-brandcolor text-white w-20 h-8"
              onClick={handleCommentSaveClick}
            >
              작성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardPostBodyComponent;
