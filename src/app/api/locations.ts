import axiosInstance from "./axiosInstance";

type IBodyLocation = {
  name: string | string[] | any;
};

const getTargetLocations = async (
  target: "governorates" | "cities",
  govId?: string
) => {
  let url = `/locations/${target}`;
  if (govId && target === "cities") url += `/${govId}`;
  return axiosInstance.get(url);
};

const createTargetLocation = (
  target: "governorates" | "cities",
  body: IBodyLocation,
  token?: string,
  govId?: string,
) => {
  let url = `/locations/${target}`;
  if (govId && target === "cities") url += `/${govId}`;
  console.log(url);
  return axiosInstance.post(url, body, { headers: { token } });
};

const deleteTargetLocation = (
  targetId?: string,
  token?: string,
  target?: "governorates" | "cities" | any
) => {
  const url = `/locations/${target}/${targetId}`;
  return axiosInstance.delete(url, { headers: { token } });
};

export { getTargetLocations, createTargetLocation, deleteTargetLocation };
