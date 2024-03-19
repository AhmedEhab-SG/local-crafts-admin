export type IService = {
  _id?: string;
  id?: string;
  approved: boolean;
  avgRating: number;
  category: { main: string; sub: string };
  createdAt: string;
  description: string;
  name: string;
  photos: string[];
  price: number;
  totalOrders: number;
  vendor: {
    photo: string;
    city: string;
    gov: string;
    id: string;
    name: string;
  };
};
