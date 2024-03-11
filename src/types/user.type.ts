export type User = {
  _id: string;
  email: string;
  photo: string;
  name: string;
  role: string;
  description: string;
  address: { city: string; gov: string };
  token: string;
};
