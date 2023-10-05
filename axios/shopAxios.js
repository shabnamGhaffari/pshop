import axios from 'axios';
import { toast } from 'react-toastify';
const baseUrl = "http://localhost:8000/api";


export const shopAxios=axios.create({
    baseURL:baseUrl,
    headers:{
        "Content-Type":"application/json"
    }
})

shopAxios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const status = error.response.status;
      if (status >= 500) {
       toast.error("خطا در ارتباط با سرور", {position: "bottom-right"});
        return Promise.reject(error);
      } else if (status == 403) {
        const code = error.response.data.code;
        const message = ResponseCodes[code]
          ? ResponseCodes[code][1]
          : ResponseCodes[code][0];
        toast.error(message);
        return Promise.reject(error);
      }
      toast.error("نام کاربری یا رمز عبور اشتباه است", {position: "bottom-right"});
      return Promise.reject(error);
    }
  );
  