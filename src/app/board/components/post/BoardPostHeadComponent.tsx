import { deletePost } from "@/src/api/post.api";
import React, { useEffect, useState } from "react";
import { PostDTO } from "@/src/common/DTOs/board/post.dto";
import { useRouter } from "next/navigation";
import ButtonAlert from "../../../../common/components/alert/ButtonAlert";
import CustomAlert from "../../../../common/components/alert/CustomAlert";

interface BoardPostHeadComponentProps {
  post: PostDTO;
}

const BoardPostHeadComponent = (props: BoardPostHeadComponentProps) => {
  const [isMine, setIsMine] = useState(false);
  const router = useRouter();
  const postDateTime = new Date(props.post?.postDate);
  const year = postDateTime.getFullYear();
  const month = (postDateTime.getMonth() + 1).toString().padStart(2, "0");
  const day = postDateTime.getDate().toString().padStart(2, "0");

  useEffect(() => {
    const storedName = sessionStorage.getItem("memberName")?.toString();
    if (storedName) {
      if (props.post?.postWriter === storedName) {
        setIsMine(true);
      }
    }
  }, [props.post]);

  const handleDeleteButtonClick = () => {
    const onConfirmDelete = () => {
      deletePost(props.post).then((res) => {
        CustomAlert("success", "게시글 삭제", "게시글을 삭제했습니다.");
      });
      router.replace("/board/free");
    };

    ButtonAlert(
      "게시글 삭제",
      "게시글을 삭제하시겠습니까?",
      "삭제",
      onConfirmDelete
    );
  };

  return (
    <div className="board-post-head flex flex-col m-12">
      <div className="board-post-head__title flex justify-between">
        <span className="text-3xl font-bold">{props.post?.postTitle}</span>
      </div>
      <div className="text-sm board-post-head__status mt-8 flex justify-between">
        <div className="flex">
          <span className="text-black dark:text-gray-100">
            {props.post?.postWriter}
          </span>
          {/* <span className="h-4 w-1px mx-1 bg-gray-700"></span> */}
          <span className="mx-1"></span>
          <span className="text-gray-400">{`${year}.${month}.${day}`}</span>
          {/* <span className="h-4 w-1px mx-1 bg-gray-700"></span> */}
          <span className="mx-1"></span>

          <span className="text-gray-400">
            조회수 : {props.post?.postViews}
          </span>
        </div>
        {isMine && (
          <div className="head_btn content-center">
            <button className="text-gray-400" onClick={handleDeleteButtonClick}>
              <span className="p-1">삭제</span>
            </button>
          </div>
        )}
      </div>
      <div className="border-b w-full mt-4 dark:border-gray-700"></div>
    </div>
  );
};

export default BoardPostHeadComponent;
