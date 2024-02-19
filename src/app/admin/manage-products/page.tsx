import getProducts from "@/actions/getProducts";
import Container from "../../components/Container";
import ManageProductsClient from "./ManageProductsClient";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "../../components/products/NullData";

const ManageProductsPage = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }
  return (
    <div className="p-8">
      <Container>
        <ManageProductsClient products={products} />
      </Container>
    </div>
  );
};

export default ManageProductsPage;
