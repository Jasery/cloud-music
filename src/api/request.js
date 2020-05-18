import axios from "axios";

const axiosInstance = axios.create({
  timeout: 5000,
  baseURL: "http://localhost:3000"
});

axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    console.log("请求错误", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
