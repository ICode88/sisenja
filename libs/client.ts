import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getCookie } from "cookies-next";

axios.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  config.headers["Content-Type"] = "application/json";
  const token = getCookie("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const toResponse = <T>(response: AxiosResponse<T>) => ({
  status: response.status,
  data: response.data,
});

const client = {
  get: <T>(url: string) => axios.get<T>(url).then(toResponse),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(toResponse),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(toResponse),
  delete: <T>(url: string) => axios.delete<T>(url).then(toResponse),
};

export default client;
