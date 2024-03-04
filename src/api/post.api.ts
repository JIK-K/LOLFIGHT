import constant from "../common/constant/constant";
import axios, { AxiosResponse } from "axios";
import { PostDTO } from "../common/DTOs/board/post.dto";
import { ResponseDTO } from "../common/DTOs/response.dto";

const baseUrl = `${constant.SERVER_URL}/post`;

/*
 * 게시글 작성
 * @param postDTO
 * @returns
 */

export const writePost = async (
  postTitle: string,
  postContent: string,
  postWriter: string,
  postBoard: string
): Promise<AxiosResponse<ResponseDTO<PostDTO>>> => {
  let url = `${baseUrl}`;

  const formData = new FormData();
  formData.append("postTitle", postTitle);
  formData.append("postContent", postContent);
  formData.append("postWriter", postWriter);
  formData.append("postBoard", postBoard);

  console.log("FormData contents:");
  formData.forEach((value: FormDataEntryValue, key: string) => {
    console.log(key + ", " + value);
  });
  return await axios.post(url, formData);
};

/*
 * 게시글 목록 조회
 * @param postDTO
 * @returns
 */
