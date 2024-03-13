import { getProductById } from "@/utils/api/products";
import ClientProduct from "./ClientProduct";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Error from "@/app/error";
interface IParams {
  productId?: string;
}

const ProductId = async ({ params }: { params: IParams }) => {
  try {
    const product = await getProductById(params.productId);
    const session = await getServerSession(authOptions);

    if (!product.data) {
      return <div>Product not found</div>;
    }

    return <ClientProduct product={product.data} />;
  } catch (e) {
    return <Error />;
  }
};

export default ProductId;
