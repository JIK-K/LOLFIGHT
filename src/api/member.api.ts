import { TokenDTO } from "../models/DTOs/member/token.dto";
import axios, { AxiosResponse } from "axios";

const API_URL = `http://localhost:8000/`;

export const login = async (
  membername: string,
  password: string
): Promise<AxiosResponse<TokenDTO>> => {
  let url = `${API_URL}/auth/login`;

  const body = {};

  return await axios.post(url, body);
};
