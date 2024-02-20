import { Order } from ".prisma/client";
import Heading from "../../components/Heading";
import { formatPrice } from "@/src/utils/formatPrice";
import Status from "../../components/products/Status";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import moment from "moment";
import OrderItem from "./OrderProduct";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div className="flex flex-col gap-2 max-w-[1150px] m-auto">
      <div className="mt-8">
        <Heading title="Order Details" />
      </div>
      <div>Order ID: {order.id}</div>
      <div>
        Total Amount:{" "}
        <span className="font-bold">{formatPrice(order.amount)}</span>
      </div>
      <div className="flex items-center gap-2">
        <div>Payment status:</div>
        <div>
          {order.status === "pending" ? (
            <Status
              label="pending"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.status === "complete" ? (
            <Status
              label="completed"
              icon={MdDone}
              bg="bg-purple-200"
              color="text-purple-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>Delivery status:</div>
        <div>
          {order.deliveryStatus === "pending" ? (
            <Status
              label="pending"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.deliveryStatus === "dispatched" ? (
            <Status
              label="dispatched"
              icon={MdDeliveryDining}
              bg="bg-purple-200"
              color="text-purple-700"
            />
          ) : order.deliveryStatus === "delivered" ? (
            <Status
              label="delivered"
              icon={MdDone}
              bg="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>Date: {moment(order.createDate).fromNow()}</div>
      <div>
        <h2 className="font-semibold mt-4 mb-2">Products ordered</h2>
        <div className="grid grid-cols-5 items-center gap-4 pb-2 text-xs">
          <div className="col-span-2 justify-self-start">PRODUCT</div>
          <div className="justify-self-center">PRICE</div>
          <div className="justify-self-center">QUANTITY</div>
          <div className="justify-self-end">TOTAL</div>
        </div>
        {order.products &&
          order.products.map((product) => (
            <OrderItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default OrderDetails;
