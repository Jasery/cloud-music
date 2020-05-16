import axios from "axios";

const axiosInstance = axios.create({
  timeout: 5000
});

axiosInstance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log("请求错误", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
