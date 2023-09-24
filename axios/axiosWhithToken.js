import axios from "axios";
const baseUrl = "http://localhost:8000/api";
const token = localStorage.getItem("access_token");
export const AxiosWithToken = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json"
  },
});
AxiosWithToken.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
