import Image from "next/image";
import { CartProductType } from "../product/[productId]/ProductDetails";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps {
  product: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ product }) => {
  const {
    handleRemoveProductFromCart,
    handleQuantityIncrease,
    handleQuantityDecrease,
  } = useCart();
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-violet-200 py-4 items-center">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${product.id}`}>
          <div className="relative w-[80px] aspect-square">
            <Image
              src={product.selectedImage.image}
              alt={product.name}
              fill
              className="object-contain"
            ></Image>
          </div>
        </Link>
        <div className="flex flex-col justify-between items-start">
          <Link href={`/product/${product.id}`}>
            {truncateText(product.name)}
          </Link>
          <div>{product.selectedImage.color}</div>
          <button
            onClick={() => handleRemoveProductFromCart(product)}
            className="underline"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(product.price)}</div>
      <div className="justify-self-center">
        <SetQuantity
          cartCount={true}
          cartProduct={product}
          handleQuantityDecreace={() => handleQuantityDecrease(product)}
          handleQuantityIncreace={() => handleQuantityIncrease(product)}
        />
      </div>
      <div className="justify-self-end">
        {formatPrice(product.price * product.quantity)}
      </div>
    </div>
  );
};

export default ItemContent;
