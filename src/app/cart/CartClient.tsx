"use client";
import { useCart } from "@/hooks/useCart";
import Heading from "../components/Heading";
import Button from "../components/products/Button";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import ProductContent from "./ProductContent";
import { formatPrice } from "@/utils/formatPrice";

const CartClient = () => {
  const { cartProducts, cartTotalPrice, handleClearCart } = useCart();

  return (
    <>
      {cartProducts && cartProducts.length > 0 ? (
        <>
          <Heading title="Shopping Cart" center />
          <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
            <div className="col-span-2 justify-self-start">PRODUCT</div>
            <div className="justify-self-center">PRICE</div>
            <div className="justify-self-center">QUANTITY</div>
            <div className="justify-self-end">TOTAL</div>
          </div>
          <div>
            {cartProducts &&
              cartProducts.map((product) => (
                <ProductContent key={product.id} product={product} />
              ))}
          </div>
          <div className="flex justify-between border-t-[1.5px] border-violet-200 py-4">
            <div className="w-[100px]">
              <Button
                label="Clear Cart"
                small
                outline
                onClick={() => handleClearCart()}
              />
            </div>
            <div className="flex flex-col gap-1 items-start text-sm">
              <div className="flex justify-between w-full text-base font-semibold">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotalPrice)}</span>
              </div>
              <p className="text-violet-600">
                Taxes and shipping calculated at checkout
              </p>
              <Button label="checkout" onClick={() => {}} />
              <div>
                <Link
                  href={"/"}
                  className="text-slate-500 flex items-center gap-1 mt-2"
                >
                  <MdArrowBack />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <div className="text-2xl">Cart is empty.</div>
          <div>
            <Link
              href={"/"}
              className="text-slate-500 flex items-center gap-1 mt-2"
            >
              <MdArrowBack />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartClient;
