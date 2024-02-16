import constant from "../common/constant/constant";
import axios, { AxiosResponse } from "axios";
import { ResponseDTO } from "../common/DTOs/response.dto";
import { GuildDTO } from "../common/DTOs/guild/guild.dto";

const baseUrl = `${constant.SERVER_URL}/guild`;

/**
 * guild 생성
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

  // const body = {
  //   guildMaster: guildDTO.guildMaster,
  //   guildName: guildDTO.guildName,
  //   guildDescription: guildDTO.guildDescription,
  //   guildIcon: guildDTO.guildIcon,
  // };

  return await axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
