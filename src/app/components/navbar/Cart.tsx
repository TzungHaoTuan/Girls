"use client";
import { useCart } from "@/src/hooks/useCart";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

const Cart = () => {
  const router = useRouter();
  const { cartTotalQuantity } = useCart();

  return (
    <div
      onClick={() => router.push("/cart")}
      className="relative cursor-pointer"
    >
      <div className="text-3xl text-slate-600">
        <CiShoppingCart />
      </div>
      <span className="absolute top-[-10px] right-[-10px] text-sm text-white w-6 h-6 flex justify-center items-center rounded-full bg-violet-400">
        {cartTotalQuantity}
      </span>
    </div>
  );
};

export default Cart;
