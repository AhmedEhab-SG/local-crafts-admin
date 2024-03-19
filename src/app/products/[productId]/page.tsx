import { getProductById } from "@/app/api/products";
import ClientProductDetails from "./ClientProductDetails";
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
    
    return <ClientProductDetails product={product.data} />;
  } catch (e) {
    return <Error />;
  }
};

export default ProductId;
