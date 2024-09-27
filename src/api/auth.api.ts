import constant from "../common/constant/constant";
import { MemberDTO } from "../common/DTOs/member/member.dto";
import { TokenDTO } from "../common/DTOs/member/token.dto";
import axios, { Axios, AxiosResponse } from "axios";
import { ResponseDTO } from "../common/DTOs/response.dto";
import { GuildDTO } from "../common/DTOs/guild/guild.dto";
import { MemberGameDTO } from "../common/DTOs/member/member_game.dto";

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

  return await axios.post(url, body);
};
