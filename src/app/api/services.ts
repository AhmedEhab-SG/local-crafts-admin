import axiosInstance from "./axiosInstance";

const getPagenateServices = async (queryParams: any) => {
  const { page, limit } = queryParams;
  const url = `/services`;
  return axiosInstance.get(url, { params: { page, limit } });
};
const getServiceById = (serviceId: any) => {
  const url = `/services/${serviceId}`;
  return axiosInstance.get(url);
};

const createService = (body: any, token: string) => {
  const url = `/services`;
  return axiosInstance.post(url, body, { headers: { token } });
};

const updateService = (_id: string, body: any, token?: string) => {
  const url = `/services/${_id}`;
  return axiosInstance.patch(url, body, { headers: { token } });
};

const deleteService = (serviceId: any, token: any) => {
  const url = `/services/${serviceId}`;
  return axiosInstance.delete(url, { headers: { token } });
};

export {
  getPagenateServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
