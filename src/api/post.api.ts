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

/*
 * 게시글 추천 여부 조회
 * @param
 * @returns
 */
export const getLike = async (
  postDTO: PostDTO,
  memberId: string
): Promise<AxiosResponse<ResponseDTO<LikeDTO>>> => {
  let url = `${baseUrl}/getLike`;

  const body = {
    postDTO: postDTO,
    memberId: memberId,
  };

  return await axios.post(url, body);
};

/*
 * 게시글 조회수 증가
 * @param
 * @returns
 */
export const increaseView = async (
  postDTO: PostDTO
): Promise<AxiosResponse<ResponseDTO<PostDTO>>> => {
  let url = `${baseUrl}/view`;

  const body = {
    postDTO: postDTO,
  };

  return await axios.post(url, body);
};

/*
 * 게시글 삭제
 * @param
 * @returns
 */
export const deletePost = async (
  postDTO: PostDTO
): Promise<AxiosResponse<ResponseDTO<PostDTO>>> => {
  let url = `${baseUrl}/delete`;

  const body = {
    postDTO: postDTO,
  };

  return await axios.post(url, body);
};
