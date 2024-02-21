import ProductDetails from "./ProductDetails";
import Container from "@/src/app/components/Container";
import ListRating from "./ListRating";
import getProductById from "@/actions/getProductById";
import NullData from "../../components/products/NullData";
import AddRating from "./AddRating";
import { getCurrentUser } from "@/actions/getCurrentUser";

interface Params {
  productId: string;
}

const ProductPage = async ({ params }: { params: Params }) => {
  const product = await getProductById(params);
  const user = await getCurrentUser();

  if (!product) {
    return <NullData title="Oops! Product with the given id does not exist" />;
  }

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <AddRating product={product} user={user} />
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
