import { BattleDTO } from "../common/DTOs/battle/battle.dto";
import { ResponseDTO } from "../common/DTOs/response.dto";
import constant from "../common/constant/constant";
import axios, { Axios, AxiosResponse } from "axios";

const baseUrl = `${constant.SERVER_URL}/battle`;

/**
 * Battle 길드 리스트
 * @returns
 */
export const getBattleList = async (
  guildName: string
): Promise<AxiosResponse<ResponseDTO<BattleDTO[]>>> => {
  let url = `${baseUrl}/getBattle`;
  let queryParams = `?guildName=${guildName}`;
  url += queryParams;

  return await axios.get(url);
};
