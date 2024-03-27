import { PostDTO } from "@/src/common/DTOs/board/post.dto";
import { useEffect, useState } from "react";
import { getCommentList } from "@/src/api/comment.api";
import { CommentDTO } from "@/src/common/DTOs/board/comment.dto";

interface CommentBoxComponentProps {
  data: PostDTO;
}

const CommentBoxComponent = (props: CommentBoxComponentProps) => {
  const [commentList, setCommentList] = useState<CommentDTO[]>([]);

  useEffect(() => {
    if (props.data && props.data.id) {
      console.log("짐에게 댓글을 대령하거라", props.data.id);
      getCommentList(props.data).then((res) => {
        console.log(res);
        setCommentList(res.data.data);
      });
    }
  }, [props.data]);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedMemberName = sessionStorage.getItem("memberName");
  //     console.log("storedMemberName", storedMemberName);
  //   }
  // }, []);

  const getMargin = (depth: number) => {
    return { marginLeft: `${depth * 2}rem` };
  };

  return (
    <div className="comment_box">
      {commentList.map((comment) => (
        <div
          className="my-4 border-y border-brandcolor"
          key={comment.id}
          style={getMargin(comment.depth)}
        >
          <div className="bg-red-400">작성자 : {comment.writer}</div>
          {comment.commentContent}
        </div>
      ))}
    </div>
  );
};

export default CommentBoxComponent;
