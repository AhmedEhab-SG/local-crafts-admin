import axiosInstance from "./axiosInstance";

const getAllUsers = (token: any) => {
  const url = `/users`;
  return axiosInstance.get(url, {
    headers: {
      token,
    },
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

export { getAllUsers, getusersById, createUser, updateUser, deleteUser };
