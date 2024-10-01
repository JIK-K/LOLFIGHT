import { MemberDTO } from "../common/DTOs/member/member.dto";
import { ResponseDTO } from "../common/DTOs/response.dto";
import constant from "../common/constant/constant";
import axios, { Axios, AxiosResponse } from "axios";

const baseUrl = `${constant.SERVER_URL}/auth`;

/**
 * 로그인
 * @param id
 * @param pw
 * @returns
 */
export const authLogin = async (id: string, pw: string) => {
  let url = `${baseUrl}/login`;
  const body = {
    id: id,
    pw: pw,
  };

  return await axios.post(url, body, { withCredentials: true });
};

/**
 * 로그아웃
 * @returns
 */
export const authLogout = async () => {
  let url = `${baseUrl}/logout`;

  // 로그아웃 요청을 서버로 보냄 (쿠키에서 refresh token 제거)
  return await axios.post(url, {}, { withCredentials: true });
};

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

export const findPassword = async (email: string) => {
  let url = `${baseUrl}/forgot-password`;
  const body = { email: email };

  return await axios.post(url, body, { withCredentials: true });
};
