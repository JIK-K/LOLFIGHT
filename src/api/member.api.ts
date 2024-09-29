import constant from "../common/constant/constant";
import { MemberDTO } from "../common/DTOs/member/member.dto";
import { TokenDTO } from "../common/DTOs/member/token.dto";
import axios, { Axios, AxiosResponse } from "axios";
import { ResponseDTO } from "../common/DTOs/response.dto";
import { GuildDTO } from "../common/DTOs/guild/guild.dto";
import { MemberGameDTO } from "../common/DTOs/member/member_game.dto";
import api from "./interceptors/axiosInstance";

const baseUrl = `${constant.SERVER_URL}/member`;

// /**
//  * member 회원가입
//  * @param memberDTO
//  * @returns
//  */
// export const signUp = async (
//   memberDTO: MemberDTO
// ): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
//   let url = `${baseUrl}`;
//   const body = {
//     memberId: memberDTO.memberId,
//     memberPw: memberDTO.memberPw,
//     memberName: memberDTO.memberName,
//   };

//   return await axios.post(url, body);
// };

// /**
//  * member 로그인
//  * @param id
//  * @param pw
//  * @returns
//  */
// export const login = async (
//   id: string,
//   pw: string
// ): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
//   let url = `${baseUrl}/login`;

//   let queryParams = `?id=${id}&pw=${pw}`;
//   url += queryParams;

//   return await axios.get(url);
// };

/**
 * member 정보변경
 * @param memberDTO
 * @returns
 */
export const update = async (
  id?: string,
  memberId?: string,
  memberPw?: string,
  memberName?: string,
  memberGuild?: GuildDTO | null,
  memberGame?: MemberGameDTO | null
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}`;

  const body = {
    id: id,
    memberId: memberId,
    memberPw: memberPw,
    memberName: memberName,
    memberGuild: memberGuild,
    memberGame: memberGame,
  };

  return await api.patch(url, body);
};

/**
 * member 길드 탈퇴
 * @param id
 * @returns
 */
export const leaveMember = async (
  id: string
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}/leave`;

  const queryParams = `?id=${id}`;

  url += queryParams;

  return api.patch(url);
};

/**
 * member 찾기 (id)
 * @param id
 * @returns
 */
export const findMember = async (
  id: string
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}/find`;

  let queryParams = `?id=${id}`;
  url += queryParams;
  return await api.get(url);
};

/**
 * member 찾기 (name)
 * @param id
 * @returns
 */
export const findMemberByName = async (
  name: string
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}/findByName`;

  let queryParams = `?name=${name}`;
  url += queryParams;
  return await api.get(url);
};

/**
 * member 탈퇴
 * @param id
 * @returns
 */
export const deleteMember = async (
  id: string
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}`;

  let queryParams = `?id=${id}`;
  url += queryParams;
  return await api.delete(url);
};

/**
 * member 아이콘 변경
 * @param memberDTO
 * @param memberIcon
 * @returns
 */
export const updateMemberIcon = async (
  memberDTO: MemberDTO,
  memberIcon?: File | null
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}/icon`;

  const formData = new FormData();

  formData.append("memberId", memberDTO.memberId);
  formData.append("memberName", memberDTO.memberName);
  if (memberIcon) {
    formData.append("memberIcon", memberIcon);
  }
  return await api.patch(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
