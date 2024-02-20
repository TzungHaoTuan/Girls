import Image from "next/image";
import { CartProductType } from "../../product/[productId]/ProductDetails";
import { formatPrice } from "@/src/utils/formatPrice";
import { truncateText } from "@/src/utils/truncateText";

interface OrderProductProps {
  product: CartProductType;
}

const OrderProduct: React.FC<OrderProductProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-5 items-center gap-4 py-4 text-xs md:text-sm border-t-[1.5px] border-violet-300">
      <div className="col-span-2 justify-self-start flex items-center gap-2 md:gap-4">
        <div className="relative w-[70px] aspect-square">
          <Image
            src={product.selectedImage.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>{truncateText(product.name)}</div>
          <div>{product.selectedImage.color}</div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(product.price)}</div>
      <div className="justify-self-center">{product.quantity}</div>
      <div className="justify-self-end font-semibold">
        {formatPrice(product.price * product.quantity)}
      </div>
    </div>
  );
};

export default OrderProduct;
