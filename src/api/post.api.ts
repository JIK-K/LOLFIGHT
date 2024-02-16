import constant from "../common/constant/constant";
import axios, { AxiosResponse } from "axios";
import { PostDTO } from "../common/DTOs/board/post.dto";

const baseUrl = `${constant.SERVER_URL}/post`;

/**
 * 게시글 작성
 * @param postDTO
 * @returns
 */
export const writePost = async (
  postDTO: PostDTO
): Promise<AxiosResponse<PostDTO>> => {
  let url = `${baseUrl}`;

  const body = {
    postTitle: postDTO.postTitle,
    postContent: postDTO.postContent,
    postWriter: postDTO.postWriter,
    postDate: postDTO.postDate,
    postBoard: postDTO.postBoard,
  };

  return await axios.post(url, body);
};
