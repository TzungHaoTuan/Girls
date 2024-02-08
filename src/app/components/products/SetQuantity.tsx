"use client";

import { CartProductType } from "@/src/app/product/[productId]/ProductDetails";

interface SetQuantityProps {
  cartCount?: boolean;
  cartProduct: CartProductType;
  handleQuantityIncreace: () => void;
  handleQuantityDecreace: () => void;
}

const buttonStyle = "border-[1.5px] border-violet-300 rounded px-2";

const SetQuantity: React.FC<SetQuantityProps> = ({
  cartCount,
  cartProduct,
  handleQuantityIncreace,
  handleQuantityDecreace,
}) => {
  return (
    <div className="flex items-center gap-8">
      {cartCount ? null : <span className="font-semibold">QUANTITY:</span>}
      <div className="flex items-center gap-4 text-base">
        <button onClick={handleQuantityDecreace} className={buttonStyle}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button onClick={handleQuantityIncreace} className={buttonStyle}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
