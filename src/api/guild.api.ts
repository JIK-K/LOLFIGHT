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
  guildDTO: GuildDTO
): Promise<AxiosResponse<ResponseDTO<GuildDTO>>> => {
  let url = `${baseUrl}`;
  const body = {
    guildMaster: guildDTO.guildMaster,
    guildName: guildDTO.guildName,
    guildDescription: guildDTO.guildDescription,
    guildIcon: guildDTO.guildIcon,
  };

  return await axios.post(url, body);
};
