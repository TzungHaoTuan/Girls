import Container from "@/src/app/components/Container";
import OrderDetails from "./OrderDetails";
import { getOrderById } from "@/actions/getOrderById";
import NullData from "../../components/products/NullData";

interface Params {
  orderId: string;
}

const OrderPage = async ({ params }: { params: Params }) => {
  const order = await getOrderById(params);
  if (!order) return <NullData title="No order" />;

  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
      </Container>
    </div>
  );
};

export default OrderPage;
