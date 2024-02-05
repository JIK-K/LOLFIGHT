import constant from "../common/constant/constant";
import { MemberDTO } from "../common/DTOs/member/member.dto";
import { TokenDTO } from "../common/DTOs/member/token.dto";
import axios, { AxiosResponse } from "axios";
import { ResponseDTO } from "../common/DTOs/response.dto";

const baseUrl = `${constant.SERVER_URL}/member`;

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

export const login = async (
  id: string,
  pw: string
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}/login`;

  let queryParams = `?id=${id}&pw=${pw}`;
  url += queryParams;

  return await axios.get(url);
};

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
// export const login = async (
//   membername: string,
//   password: string
// ): Promise<AxiosResponse<TokenDTO>> => {
//   let url = `${API_URL}/auth/login`;

//   const body = {};

//   return await axios.post(url, body);
// };
