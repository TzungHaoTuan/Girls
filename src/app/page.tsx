import getProducts, { ProductParams } from "@/actions/getProducts";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import ProductCard from "./components/products/ProductCard";
import NullData from "./components/products/NullData";
import { Product } from ".prisma/client";

interface HomePageProps {
  searchParams: ProductParams;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return (
      <NullData title='Oops! No products found, click "All" to clear filters.' />
    );
  }

  function shuffleArray(array: Product[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffleProducts = shuffleArray(products);

  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner></HomeBanner>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {shuffleProducts.map((product) => (
            <div key={product.id}>
              <ProductCard data={product} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
