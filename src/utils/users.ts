import axiosInstance from "./axiosInstance";

const getPagenateUsers = (params: any) => {
  const url = `/users`;
  return axiosInstance.get(url);
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

export { getPagenateUsers, getusersById, createUser, updateUser, deleteUser };
