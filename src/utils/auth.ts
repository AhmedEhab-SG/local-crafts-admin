import axiosInstance from "./axiosInstance";

const login = (credentials: any) => {
  const url = `/auth/login`;
  const { email, password } = credentials;
  return axiosInstance.post(url, { email, password });
};

export default login;
