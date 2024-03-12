import constant from "../common/constant/constant";
import axios from "axios";
import { PostDTO } from "../common/DTOs/board/post.dto";
import { CommentDTO } from "../common/DTOs/board/comment.dto";
import { ResponseDTO } from "../common/DTOs/response.dto";
import { AxiosResponse } from "axios";

const baseUrl = `${constant.SERVER_URL}/comment`;

/*
 * 댓글 작성
 * @param postDTO, memberId, commentContent
 * @returns
 */
export const writeComment = async (
  post: PostDTO,
  memberId: string,
  commentContent: string
): Promise<AxiosResponse<ResponseDTO<CommentDTO>>> => {
  let url = `${baseUrl}`;
  // let url = `${baseUrl}/${post.postBoard}/${post.id}`;
  // let url = `${baseUrl}/${encodeURIComponent(post.postBoard)}/${post.id}`;
  const formData = new FormData();

  formData.append("postId", post.id.toString());
  formData.append("postBoard", post.postBoard);
  formData.append("memberId", memberId);
  formData.append("commentContent", commentContent);

  console.log("FormData contents:", formData);

  const body = {
    postId: post.id,
    postBoard: post.postBoard,
    post: post,
    memberId: memberId,
    commentContent: commentContent,
  };

  console.log("body:", body);

  return await axios.post(url, body);
};
