import Container from "../../components/Container";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "../../components/products/NullData";
import ManageOrdersClient from "./ManageOrdersClient";
import { getOrders } from "@/actions/getOrders";

const ManageOrdersPage = async () => {
  const orders = await getOrders();
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }
  return (
    <div className="p-8">
      <Container>
        <ManageOrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default ManageOrdersPage;
