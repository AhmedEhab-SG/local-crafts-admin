import { getProductById } from "@/app/actions/api/products";
import ClientProduct from "./ClientProduct";
import Error from "@/app/error";
interface IParams {
  productId?: string;
}

const ProductId = async ({ params }: { params: IParams }) => {
  try {
    const product = await getProductById(params.productId);
    // const session = await getServerSession(authOptions);

    if (!product.data) {
      return <div>Product not found</div>;
    }
    
    return <ClientProduct product={product.data} />;
  } catch (e) {
    return <Error />;
  }
};

export default ProductId;
