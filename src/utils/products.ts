import axiosInstance from "./axiosInstance";

const getPagenateProducts = (params: any) => {
  const url = `/products`;
  return axiosInstance.get(url);
};
const getProductById = (params: any) => {
  const url = `/products`;
  return axiosInstance.get(url);
};

const createProduct = (params: any) => {
  const url = `/products`;
  return axiosInstance.get(url);
};

const updateProduct = (params: any) => {
  const url = `/products`;
  return axiosInstance.get(url);
};

const deleteProduct = (params: any) => {
  const url = `/products`;
  return axiosInstance.get(url);
};

export {
  getPagenateProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
