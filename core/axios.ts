import axios from "axios";
import { parseCookies } from "nookies";

axios.defaults.baseURL = "http://nazarovasadbek.uz:1001/";

axios.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const { _token } = parseCookies();

    config.headers.Authorization = "Bearer " + _token;
  }

  return config;
});

export default axios;
