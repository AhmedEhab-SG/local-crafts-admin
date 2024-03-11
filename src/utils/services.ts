import axiosInstance from "./axiosInstance";

const getPagenateServices = (params: any) => {
  const url = `/services`;
  return axiosInstance.get(url);
};
const getServiceById = (params: any) => {
  const url = `/services`;
  return axiosInstance.get(url);
};

const createService = (params: any) => {
  const url = `/services`;
  return axiosInstance.get(url);
};

const updateService = (params: any) => {
  const url = `/services`;
  return axiosInstance.get(url);
};

const deleteService = (params: any) => {
  const url = `/services`;
  return axiosInstance.get(url);
};

export {
  getPagenateServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
