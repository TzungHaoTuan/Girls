import ProductDetails from "./ProductDetails";
import { product } from "@/utils/product";
import Container from "@/app/components/Container";
import ListRating from "./ListRating";

interface ProductPageProps {
  productId: string;
}

const ProductPage = ({ params }: { params: ProductPageProps }) => {
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
