import axiosInstance from "./axiosInstance";

type ITarget = "products" | "services" | any;

type IBodyCat = {
  name: string;
  description: string;
  photo: string;
};

type IBodySub = string[];

const getTargetCategories = async (target: ITarget, token?: string) => {
  const url = `/${target}/categories`;
  return axiosInstance.get(url, { headers: { token } });
};
const getTargetSubCat = (target: ITarget, categoryId: string, token?: any) => {
  const url = `/${target}/categories/${categoryId}`;
  return axiosInstance.get(url, { headers: { token } });
};

const createTargetCategory = (
  target: ITarget,
  body: IBodyCat,
  token?: string
) => {
  const url = `/${target}/categories`;
  return axiosInstance.post(url, body, { headers: { token } });
};

const createTargetSubCat = (
  target: ITarget,
  body: IBodySub,
  token?: string,
  categoryId?: string
) => {
  const url = `/${target}/categories/${categoryId}`;
  return axiosInstance.post(url, body, { headers: { token } });
};

const updateTargetCatOrSub = (
  target: ITarget,
  body: any,
  categoryOrSubId: string,
  token?: string
) => {
  const url = `/${target}/categories/${categoryOrSubId}`;
  return axiosInstance.patch(url, body, { headers: { token } });
};

const delelteTargetCatOrSub = (
  categoryOrSubId?: string,
  token?: string,
  target?: ITarget
) => {
  const url = `/${target}/categories/${categoryOrSubId}`;
  console.log(url);
  return axiosInstance.delete(url, { headers: { token } });
};

export {
  getTargetCategories,
  getTargetSubCat,
  createTargetCategory,
  createTargetSubCat,
  updateTargetCatOrSub,
  delelteTargetCatOrSub,
};
