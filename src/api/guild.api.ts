import constant from "../common/constant/constant";
import axios, { Axios, AxiosResponse } from "axios";
import { ResponseDTO } from "../common/DTOs/response.dto";
import { GuildDTO } from "../common/DTOs/guild/guild.dto";
import { MemberDTO } from "../common/DTOs/member/member.dto";
import { GuildInviteDTO } from "../common/DTOs/guild/guild_invite.dto";
import { GuildInviteSendDTO } from "../common/DTOs/guild/guild_invite_send.dto";

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

/**
 * Guild-Invite 길드 가입신청
 * @param guildInviteDTO
 * @returns
 */
export const inviteGuild = async (
  memberId: string,
  guildId: string
): Promise<AxiosResponse<ResponseDTO<GuildInviteDTO>>> => {
  let url = `${baseUrl}/invite`;

  const body = {
    memberId: memberId,
    guildId: guildId,
  };

  return await axios.post(url, body);
};

/**
 * Guild-Invite 길드 가입신청자 리스트
 * @param guildName
 * @returns
 */
export const getInviteGuildList = async (
  guildName: string
): Promise<AxiosResponse<ResponseDTO<GuildInviteDTO[]>>> => {
  let url = `${baseUrl}/invite/list`;

  const queryParams = `?name=${guildName}`;
  url += queryParams;

  return await axios.get(url);
};

export const inviteAccept = async (
  memberId: string,
  guildId: string
): Promise<AxiosResponse<ResponseDTO<MemberDTO>>> => {
  let url = `${baseUrl}/invite/accept`;

  const queryParams = `?memberId=${memberId}&guildId=${guildId}`;
  url += queryParams;

  return await axios.get(url);
};
