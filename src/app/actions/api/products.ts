import axiosInstance from "./axiosInstance";

const getPagenateProducts = async (queryParams: any) => {
  const { page, limit } = queryParams;
  const url = `/products`;
  return axiosInstance.get(url, { params: { page, limit } });
};
const getProductById = (productId: any) => {
  const url = `/products/${productId}`;
  return axiosInstance.get(url);
};

const createProduct = (body: any, token: string) => {
  const url = `/products`;
  return axiosInstance.post(url, body, { headers: { token } });
};

const updateProduct = (body: any, token: string) => {
  const url = `/products`;
  return axiosInstance.patch(url, body, { headers: { token } });
};

const deleteProduct = (productId: any, token: any) => {
  const url = `/products/${productId}`;
  return axiosInstance.delete(url, { headers: { token } });
};

export {
  getPagenateProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
