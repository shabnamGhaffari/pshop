import axios from "axios";
import { toast } from "react-toastify";
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

AxiosWithToken.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const status = error.response.status;
    if (status >= 500) {
      toast.error("خطا در ارتباط با سرور", {position: "bottom-right"});
      return Promise.reject(error);
    } else if (status == 404) {
      toast.error("آدرس مورد نظر یافت نشد", {position: "bottom-right"});
      return Promise.reject(error);
    } else if (status == 403) {
      toast.error(error.response.data.message, {position: "bottom-right"});
      return Promise.reject(error);
    } else if (status == "401") {
      localStorage.clear();
      sessionStorage.clear();
      const currentUrl = window.location.pathname;
      if (currentUrl != "/") {
        window.location.href = `/login?next=${currentUrl}`;
      } else {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
    const code = error.response.data.code;
    const message = ResponseCodes[code]
      ? ResponseCodes[code][1]
      : ResponseCodes[code][0];
    toast.error(message, {position: "bottom-right"});
    return Promise.reject(error);
  }
);



