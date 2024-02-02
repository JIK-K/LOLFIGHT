import constant from "../common/constant/constant";
import { MemberDTO } from "../models/DTOs/member/member.dto";
import { TokenDTO } from "../models/DTOs/member/token.dto";
import axios, { AxiosResponse } from "axios";

const baseUrl = `${constant.SERVER_URL}/member`;

export const signUp = async (
  memberDTO: MemberDTO
): Promise<AxiosResponse<MemberDTO>> => {
  let url = `${baseUrl}`;
  const body = {
    memberId: memberDTO.memberId,
    memberPw: memberDTO.memberPw,
    memberName: memberDTO.memberName,
  };

  return await axios.post(url, body);
};

// export const login = async (
//   membername: string,
//   password: string
// ): Promise<AxiosResponse<TokenDTO>> => {
//   let url = `${API_URL}/auth/login`;

//   const body = {};

//   return await axios.post(url, body);
// };
