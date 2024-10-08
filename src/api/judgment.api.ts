import constant from "../common/constant/constant";
import axios, { AxiosResponse } from "axios";
import { ResponseDTO } from "../common/DTOs/response.dto";
import { JudgmentDTO } from "../common/DTOs/judgment/judgment.dto";
import api from "./interceptors/axiosInstance";

const baseUrl = `${constant.SERVER_URL}/judgment`;

/**
 * Judgment 생성
 * @param judgmentDTO
 * @param judgmentVideo
 * @returns
 */
export const createJudgment = async (
  judgmentDTO: JudgmentDTO,
  judgmentVideo?: File | null
): Promise<AxiosResponse<ResponseDTO<JudgmentDTO>>> => {
  const url = `${baseUrl}`;
  const formData = new FormData();

  //   formData.append("id", judgmentDTO.id);
  formData.append("judgmentWriter", judgmentDTO.judgmentWriter);
  formData.append("judgmentTitle", judgmentDTO.judgmentTitle);
  formData.append("judgmentDesc", judgmentDTO.judgmentDesc);
  formData.append("judgmentLeftChampion", judgmentDTO.judgmentLeftChampion);
  formData.append("judgmentLeftName", judgmentDTO.judgmentLeftName);
  formData.append("judgmentLeftTier", judgmentDTO.judgmentLeftTier);
  formData.append("judgmentLeftLine", judgmentDTO.judgmentLeftLine);
  formData.append("judgmentLeftLike", String(judgmentDTO.judgmentLeftLike));
  formData.append("judgmentRightChampion", judgmentDTO.judgmentRightChampion);
  formData.append("judgmentRightName", judgmentDTO.judgmentRightName);
  formData.append("judgmentRightTier", judgmentDTO.judgmentRightTier);
  formData.append("judgmentRightLine", judgmentDTO.judgmentRightLine);
  formData.append("judgmentRightLike", String(judgmentDTO.judgmentRightLike));

  if (judgmentVideo) {
    formData.append("judgmentVideo", judgmentVideo);
  }

  return await api.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * Judgment get List
 * @returns
 */
export const getJudgmentList = async (): Promise<
  AxiosResponse<ResponseDTO<JudgmentDTO[]>>
> => {
  const url = `${baseUrl}/list`;
  return await axios.get(url);
};
