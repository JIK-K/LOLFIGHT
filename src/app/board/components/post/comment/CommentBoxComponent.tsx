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
    console.log("짐에게 댓글을 대령하거라");
    getCommentList(props.data).then((res) => {
      console.log(res);
      setCommentList(res.data.data);
    });
  }, [props.data]);

  return (
    <div className="comment_box">
      {commentList.map((comment) => (
        <div className="my-4 border-y border-brandcolor" key={comment.id}>
          <div className="bg-red-400">작성자 : {comment.writer}</div>
          {comment.commentContent}
        </div>
      ))}
    </div>
  );
};

export default CommentBoxComponent;
