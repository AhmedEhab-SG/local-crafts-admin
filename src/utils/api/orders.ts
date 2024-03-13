import axiosInstance from "./axiosInstance";

const getAllOrders = async (token: any) => {
  const url = `/orders`;
  return axiosInstance.get(url, { headers: { token } });
};
const getProductById = (orderId: any) => {
  const url = `/orders/${orderId}`;
  return axiosInstance.get(url);
};

const createProduct = (body: any, token: string) => {
  const url = `/orders`;
  return axiosInstance.post(url, body, { headers: { token } });
};

const updateProduct = (body: any, token: string) => {
  const url = `/orders`;
  return axiosInstance.patch(url, body, { headers: { token } });
};

const deleteProduct = (orderId: any) => {
  const url = `/orders/${orderId}`;
  return axiosInstance.delete(url);
};

export {
  getAllOrders,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
