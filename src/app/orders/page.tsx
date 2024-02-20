import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "../components/products/NullData";
import Container from "../components/Container";
import OrdersClient from "./OrdersClient";
import { getOrdersByUserId } from "@/actions/getOrdersByUserId";

const OrdersPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <NullData title="Oops! Access denied" />;
  }

  const orders = await getOrdersByUserId(currentUser.id);

  if (!orders) {
    return <NullData title="No orders yet..." />;
  }

  return (
    <div className="p-8">
      <Container>
        <OrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default OrdersPage;
