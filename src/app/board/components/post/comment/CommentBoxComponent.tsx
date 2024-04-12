import { PostDTO } from "@/src/common/DTOs/board/post.dto";
import { SetStateAction, useEffect, useState } from "react";
import { getCommentList } from "@/src/api/comment.api";
import { CommentDTO } from "@/src/common/DTOs/board/comment.dto";
import { writeReplyComment } from "@/src/api/comment.api";

interface CommentBoxComponentProps {
  data: PostDTO;
}

const CommentBoxComponent = (props: CommentBoxComponentProps) => {
  const [commentList, setCommentList] = useState<CommentDTO[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [openCommentId, setOpenCommentId] = useState<string>("");
  const [replyCommentContent, setReplyCommentContent] = useState("");
  const [refresh, setRefresh] = useState(1);
  // const [commentBoxKey, setCommentBoxKey] = useState(0);

  useEffect(() => {
    if (props.data && props.data.id) {
      console.log("짐에게 댓글을 대령하거라", props.data.id);
      getCommentList(props.data).then((res) => {
        console.log(res);
        setCommentList(res.data.data);
      });
    }
  }, [props.data, refresh]);

  const handleChangeReplyComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyCommentContent(e.target.value);
    console.log(replyCommentContent);
  };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedMemberName = sessionStorage.getItem("memberName");
  //     console.log("storedMemberName", storedMemberName);
  //   }
  // }, []);

  const handleReplyButtonClick = (comment: CommentDTO) => {
    setIsOpen(!isOpen); // isOpen 상태를 토글합니다.
    setOpenCommentId(comment.id as string);
    console.log(comment.id);
  };

  const handleSaveReplyButtonClick = () => {
    const storedId = sessionStorage.getItem("id")?.toString();
    if (storedId) {
      writeReplyComment(
        props.data,
        storedId,
        replyCommentContent,
        openCommentId
      ).then((res) => {
        console.log(res);
        // router.refresh();
        setRefresh((prev) => prev + 1);
        setIsOpen(false);
        setOpenCommentId("");
        setReplyCommentContent("");
        // setCommentBoxKey((prevKey) => prevKey + 1);
      });
    } else {
      console.log("로그인이 필요합니다.");
    }
  };

  const getDate = (date: string | number | Date) => {
    const today = new Date();
    const commentDateTime = new Date(date);

    const diffMilliseconds = today.getTime() - commentDateTime.getTime();
    const diffSeconds = Math.floor(diffMilliseconds / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths =
      today.getMonth() -
      commentDateTime.getMonth() +
      12 * (today.getFullYear() - commentDateTime.getFullYear());

    if (
      commentDateTime.getDate() === today.getDate() &&
      commentDateTime.getMonth() === today.getMonth() &&
      commentDateTime.getFullYear() === today.getFullYear()
    ) {
      if (diffMinutes < 60) {
        return `${diffMinutes}분 전`;
      } else if (diffHours < 24) {
        return `${diffHours}시간 전`;
      }
    } else if (diffDays < 7) {
      return `${diffDays}일 전`;
    } else if (diffWeeks < 4) {
      return `${diffWeeks}주 전`;
    } else {
      return `${diffMonths}달 전`;
    }
  };

  const getMargin = (depth: number) => {
    return {
      marginLeft: `${depth * 2}rem`,
    };
  };

  return (
    <div className="comment_box">
      {commentList.map((comment) => (
        <div
          className="my-4 p-2 flex"
          key={comment.id}
          style={getMargin(comment.depth)}
        >
          {comment.depth > 0 && (
            <div className="border-b-2 border-l-2 border-brandcolor w-2 h-2 mr-4" />
          )}
          <div className="w-full">
            <div className="">
              <span className="font-bold">{comment.writer}</span>
              <span className="text-gray-600 pl-4 font-normal">
                {getDate(comment.commentDate)}
              </span>
            </div>
            <span className="font-normal text-base">
              {comment.commentContent}
            </span>
            {comment.depth == 0 && (
              <div className="my-1">
                <button onClick={() => handleReplyButtonClick(comment)}>
                  <span className="text-gray-400 py-1 hover:bg-gray-100">
                    답글 쓰기
                  </span>
                </button>
              </div>
            )}

            {isOpen && comment.id == openCommentId && (
              <div className="my-4 p-2">
                <div className="rounded-md ml-8 border">
                  <div className=" h-36">
                    <input
                      className="w-full h-12 mx-2 focus:outline-none"
                      placeholder="댓글을 입력하세요."
                      onChange={handleChangeReplyComment}
                    />
                  </div>
                  <div className="border-b w-full mt-4"></div>
                  <div className="flex justify-end m-2">
                    <button
                      className="border rounded-md bg-brandcolor text-white w-20 h-8"
                      onClick={handleSaveReplyButtonClick}
                    >
                      작성하기
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentBoxComponent;
