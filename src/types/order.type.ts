export type IOrder = {
  _id: string;
  customer: { _id: string; name: string };
  vendor: { _id: string; name: string };
  product?: {
    _id: string;
    name: string;
    price: number;
    description: string;
    photos: string[];
    category: { main: string; sub: string }[];
    totalOrders: number;
    avgRating: number;
    createdAt: string;
  };
  service?: {
    _id: string;
    name: string;
    price: number;
    description: string;
    photos: string[];
    category: { main: string; sub: string }[];
    totalOrders: number;
    avgRating: number;
    createdAt: string;
  };
  message: string;
  phone: string;
  createdAt: string;
  __v: number;
};
