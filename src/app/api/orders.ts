import axiosInstance from "./axiosInstance";

const getAllOrders = async (token: any) => {
  const url = `/orders`;
  return axiosInstance.get(url, { headers: { token } });
};
const getOrderById = (orderId: any, token: any) => {
  const url = `/orders/${orderId}`;
  return axiosInstance.get(url, { headers: { token } });
};

const deleteOrder = (orderId: any, token: any) => {
  const url = `/orders/${orderId}`;
  return axiosInstance.delete(url, { headers: { token } });
};

export { getAllOrders, getOrderById, deleteOrder };
