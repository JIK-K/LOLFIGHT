import constant from "../common/constant/constant";
import axios, { AxiosResponse } from "axios";
import { ResponseDTO } from "../common/DTOs/response.dto";
import { GuildDTO } from "../common/DTOs/guild/guild.dto";
import { MemberDTO } from "../common/DTOs/member/member.dto";

const baseUrl = `${constant.SERVER_URL}/guild`;

/**
 * Guild 생성
 * @param guildDTO
 * @returns
 */
export const createGuild = async (
  guildDTO: GuildDTO,
  guildImage?: File | null
): Promise<AxiosResponse<ResponseDTO<GuildDTO>>> => {
  let url = `${baseUrl}`;

  const formData = new FormData();

  formData.append("guildMaster", guildDTO.guildMaster);
  formData.append("guildName", guildDTO.guildName);
  formData.append("guildDescription", guildDTO.guildDescription);
  if (guildImage) {
    formData.append("guildImage", guildImage);
  }

  return await axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * Guild 길드 리스트
 * @returns
 */
export const getGuildList = async (): Promise<
  AxiosResponse<ResponseDTO<GuildDTO[]>>
> => {
  let url = `${baseUrl}/list`;
  return await axios.get(url);
};

/**
 * Guild 정보
 * @param guildName
 * @returns
 */
export const getGuildInfo = async (
  guildName: string
): Promise<AxiosResponse<ResponseDTO<GuildDTO>>> => {
  let url = `${baseUrl}/info`;

  const queryParams = `?name=${guildName}`;
  url += queryParams;
  return await axios.get(url);
};

/**
 * Guild 길드원 리스트
 * @param guildName
 * @returns
 */
export const getGuildMemberList = async (
  guildName: string
): Promise<AxiosResponse<ResponseDTO<MemberDTO[]>>> => {
  let url = `${baseUrl}/guildMember`;

  const queryParams = `?name=${guildName}`;
  url += queryParams;

  return await axios.get(url);
};

/**
 * Guild 해체
 * @param guildName
 * @returns
 */
export const destroyGuild = async (
  guildName: string
): Promise<AxiosResponse<ResponseDTO<GuildDTO>>> => {
  let url = `${baseUrl}`;

  const queryParams = `?name=${guildName}`;
  url += queryParams;
  return await axios.delete(url);
};
