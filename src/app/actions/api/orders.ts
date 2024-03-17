import axiosInstance from "./axiosInstance";

const getAllOrders = async (token: any) => {
  const url = `/orders`;
  return axiosInstance.get(url, { headers: { token } });
};
const getOrderById = (orderId: any) => {
  const url = `/orders/${orderId}`;
  return axiosInstance.get(url);
};

const createOrder = (body: any, token: string) => {
  const url = `/orders`;
  return axiosInstance.post(url, body, { headers: { token } });
};

const updateOrder = (body: any, token: string) => {
  const url = `/orders`;
  return axiosInstance.patch(url, body, { headers: { token } });
};

const deleteOrder = (orderId: any) => {
  const url = `/orders/${orderId}`;
  return axiosInstance.delete(url);
};

export {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
