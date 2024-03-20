type IGovernorate = {
  _id: string;
  name: string;
};

type ICity = {
  _id: string;
  name: string;
  gov: string;
};

export { type ICity, type IGovernorate };
