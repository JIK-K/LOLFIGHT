"use client";

import React, { useEffect, useRef, useState } from "react";
import { getPostContent, likePost, getLike } from "@/src/api/post.api";
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
import { useRouter } from "next/navigation";

interface BoardPostBodyComponentProps {
  data: PostDTO;
}

const BoardPostBodyComponent = (props: BoardPostBodyComponentProps) => {
  const router = useRouter();
  const [content, setContent] = useState<String>();
  const [commentContent, setCommentContent] = useState("");
  const [commentBoxKey, setCommentBoxKey] = useState(0); // State for key prop
  const [like, setLike] = useState(0);

  useEffect(() => {
    console.log("editorRef.current", props.data?.postContent);
    setContent(props.data?.postContent);
  }, [props.data]);

  useEffect(() => {
    const storedId = sessionStorage.getItem("id")?.toString();

    if (storedId) {
      getLike(props.data, storedId).then((res) => {
        console.log("교촌마을", res);
        if (res.data.data) {
          setLike(1);
        } else {
          setLike(0);
        }
      });
    }
  });

  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
    console.log(commentContent);
  };

  const handleOnClick = () => {
    console.log("죽고싶냐?", content);
    console.log("죽고잡냐?", props.data.postBoard);

    const storedId = sessionStorage.getItem("id")?.toString();
    if (storedId) {
      likePost(props.data, storedId).then((res) => {
        console.log(res);
        router.refresh();
      });
    } else {
      console.log("로그인이 필요합니다.");
    }
  };

  const handleSaveCommentClick = () => {
    console.log("댓글 저장");

    const storedId = sessionStorage.getItem("id")?.toString();
    if (storedId) {
      writeComment(props.data, storedId, commentContent).then((res) => {
        console.log(res);
        router.refresh();
        setCommentBoxKey((prevKey) => prevKey + 1);
        setCommentContent("");
        // window.location.reload();
      });
    } else {
      console.log("로그인이 필요합니다.");
    }
  };

  return (
    <div className="board-post-body flex flex-col m-12">
      <div className="board-post-body__body w-full mb-12">
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
      <div className="board-post-body__status m-auto">
        {/* 만약 like가 1이면 검정색 버튼 */}
        {/* 만약 like가 0이면 회색 버튼 */}
        {like === 0 ? (
          <button
            className="border border-gray-400 h-10 text-gray-400 rounded transition hover:bg-brandcolor hover:text-white w-20 m-1"
            onClick={handleOnClick}
          >
            <span className="">추천</span>
          </button>
        ) : (
          <button
            className="border border-gray-400 h-10 text-white rounded bg-brandcolor transition hover:bg-white hover:text-gray-400 w-20 m-1"
            onClick={handleOnClick}
          >
            <span className="">추천</span>
          </button>
        )}
        {/* <button className="border border-black bg-brandcolor text-white">
          공유
        </button> */}
        {/* <button className="border border-black bg-brandcolor text-white">
          스크랩
        </button> */}
      </div>
      <div className="board-post-body__comment">
        <div className="border-b w-full mt-4"></div>
        <div className="my-8">댓글 {props.data?.postComments}</div>
        <CommentBoxComponent
          key={commentBoxKey}
          data={props.data}
        ></CommentBoxComponent>
        <div className="w-full rounded-md px-2 border">
          {/* <span>니아이디props.id어쩌고</span> */}
          <div className="w-full h-36">
            <input
              className="w-full h-12 mx-2 focus:outline-none"
              placeholder="댓글을 입력하세요."
              value={commentContent}
              onChange={handleChangeComment}
            />
          </div>
          <div className="border-b w-full mt-4"></div>
          <div className="flex justify-end m-2">
            <button
              className="border rounded-md bg-brandcolor text-white w-20 h-8"
              onClick={handleSaveCommentClick}
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
