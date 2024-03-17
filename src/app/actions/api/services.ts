import axiosInstance from "./axiosInstance";

const getPagenateServices = (queryParams: any) => {
  const { page, limit } = queryParams;
  const url = `/services`;
  return axiosInstance.get(url, { params: { page, limit } });
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
