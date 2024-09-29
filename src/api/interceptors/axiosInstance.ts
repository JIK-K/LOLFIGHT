import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import constant from "../../common/constant/constant";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: constant.SERVER_URL,
  withCredentials: true,
});

// Request Interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");

    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Refresh Token 요청
      const memberId = sessionStorage.getItem("memberId");
      const res = await api.post("/auth/refresh", { id: memberId });
      const newAccessToken = res.data.accessToken;

      // 새로운 Access Token 저장
      localStorage.setItem("accessToken", newAccessToken);

      // 원래 요청에 새로운 Access Token 추가 후 재시도
      originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;
