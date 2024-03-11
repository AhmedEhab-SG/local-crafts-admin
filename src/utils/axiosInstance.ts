import axios from "axios";
import config from "./config";

const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
});

export default axiosInstance;
