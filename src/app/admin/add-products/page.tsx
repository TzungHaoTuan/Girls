import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../../components/Container";
import FormWrap from "../../components/products/FormWrap";
import AddProductForm from "./AddProductForm";
import NullData from "../../components/products/NullData";

const AddProductsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddProductForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddProductsPage;
