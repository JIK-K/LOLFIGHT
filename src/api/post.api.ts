import constant from "../common/constant/constant";
import axios, { AxiosResponse } from "axios";
import { PostDTO } from "../common/DTOs/board/post.dto";
import { ResponseDTO } from "../common/DTOs/response.dto";
import { LikeDTO } from "../common/DTOs/board/like.dto";

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
export const getPostList = async (
  board: string
): Promise<AxiosResponse<ResponseDTO<PostDTO[]>>> => {
  let url = `${baseUrl}/list` + `?board=${board}`;
  console.log(url);
  return await axios.get(url);
};

/*
 * 게시글 내용 보기
 * @param board, postId
 * @returns
 */
export const getPostContent = async (
  board: string,
  postId: string
): Promise<AxiosResponse<ResponseDTO<PostDTO>>> => {
  let url = `${baseUrl}/?board=${board}&postId=${postId}`;

  return await axios.get(url);
};

/*
 * 게시글 추천
 * @param
 * @returns
 */
export const likePost = async (
  postDTO: PostDTO,
  memberId: string
): Promise<AxiosResponse<ResponseDTO<LikeDTO>>> => {
  let url = `${baseUrl}/like`;

  const body = {
    postDTO: postDTO,
    memberId: memberId,
  };

  return await axios.post(url, body);
};
