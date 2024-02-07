import constant from "../common/constant/constant";
import { MemberDTO } from "../common/DTOs/member/member.dto";
import { TokenDTO } from "../common/DTOs/member/token.dto";
import axios, { Axios, AxiosResponse } from "axios";
import { ResponseDTO } from "../common/DTOs/response.dto";

const baseUrl = `${constant.SERVER_URL}/member`;

/**
 * member 회원가입
 * @param memberDTO
 * @returns
 */
export const signUp = async (
  memberDTO: MemberDTO
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}`;
  const body = {
    memberId: memberDTO.memberId,
    memberPw: memberDTO.memberPw,
    memberName: memberDTO.memberName,
  };

  return await axios.post(url, body);
};

/**
 * member 로그인
 * @param id
 * @param pw
 * @returns
 */
export const login = async (
  id: string,
  pw: string
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}/login`;

  let queryParams = `?id=${id}&pw=${pw}`;
  url += queryParams;

  return await axios.get(url);
};

/**
 * member 정보변경
 * @param memberDTO
 * @returns
 */
export const update = async (
  memberDTO: MemberDTO
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}`;

  const body = {
    memberId: memberDTO.memberId,
    memberPw: memberDTO.memberPw,
    memberName: memberDTO.memberName,
  };

  return await axios.patch(url, body);
};

/**
 * member 찾기
 * @param id
 * @returns
 */
export const findMember = async (
  id: string
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}/find`;

  let queryParams = `?id=${id}`;
  url += queryParams;
  return await axios.get(url);
};

export const deleteMember = async (
  id: string
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}`;

  let queryParams = `?id=${id}`;
  url += queryParams;
  return await axios.delete(url);
};
