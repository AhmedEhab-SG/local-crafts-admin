import axiosInstance from "./axiosInstance";

const getUsersPaginate = (token: any, queryParams: any) => {
  const { page, limit } = queryParams;
  const url = `/users`;
  return axiosInstance.get(url, {
    headers: { token },
    params: { page, limit },
  });
};
const getusersById = (params: any) => {
  const url = `/users`;
  return axiosInstance.get(url);
};

const createUser = (params: any) => {
  const url = `/users`;
  return axiosInstance.get(url);
};

const updateUser = (params: any) => {
  const url = `/users`;
  return axiosInstance.get(url);
};

const deleteUser = (params: any) => {
  const url = `/users`;
  return axiosInstance.get(url);
};

export { getUsersPaginate, getusersById, createUser, updateUser, deleteUser };
