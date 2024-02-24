"use client";
import { formatPrice } from "@/src/utils/formatPrice";
import { Rating } from "@mui/material";
import { useCallback, useState, useEffect } from "react";
import SetColor from "@/src/app/components/products/SetColor";
import SetQuantity from "@/src/app/components/products/SetQuantity";
import Button from "@/src/app/components/products/Button";
import { CiShoppingCart } from "react-icons/ci";
import ProductImage from "@/src/app/components/products/ProductImage";
import { useCart } from "@/src/hooks/useCart";
import { useRouter } from "next/navigation";
import { MdCheckCircle } from "react-icons/md";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImage: SelectedImageType;
  quantity: number;
  price: number;
};
export type SelectedImageType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => <hr className="w-[30%] my-2" />;

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { cartProducts, handleAddProductToCart } = useCart();
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImage: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const productIndex = cartProducts.findIndex(
        (cartProduct: CartProductType) => cartProduct.id === product.id
      );

      if (productIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts, product.id]);

  const router = useRouter();

  const handleColorSelect = useCallback((value: SelectedImageType) => {
    setCartProduct((prev) => {
      return { ...prev, selectedImage: value };
    });
  }, []);

  const handleQuantityIncreace = useCallback(() => {
    if (cartProduct.quantity === 10) return;

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  const handleQuantityDecreace = useCallback(() => {
    if (cartProduct.quantity === 1) return;
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      <div className="flex flex-col gap-4 text-sm">
        <h1 className="text-3xl font-medium">{product.name}</h1>
        <p>{formatPrice(product.price)}</p>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly></Rating>
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <p className="">{product.description}</p>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY:</span> {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND:</span> {product.brand}
        </div>
        <div className={product.inStock ? "text-green-600" : "text-rose-600"}>
          {product.inStock ? "In stock" : "Out of stock"}
        </div>
        <Horizontal />
        {isProductInCart ? (
          <>
            <p className="mb-2 text-violet-600 flex items-center gap-1">
              <MdCheckCircle size={20} className="text-violet-600" />
              <span>Added in cart.</span>
            </p>
            <Button
              label="View Cart"
              outline
              icon={CiShoppingCart}
              onClick={() => router.push("/cart")}
            ></Button>
          </>
        ) : (
          <>
            <SetColor
              images={product.images}
              cartProduct={cartProduct}
              handleColorSelect={handleColorSelect}
            />
            <Horizontal />
            <SetQuantity
              cartProduct={cartProduct}
              handleQuantityIncreace={handleQuantityIncreace}
              handleQuantityDecreace={handleQuantityDecreace}
            />
            <Horizontal />
            <div>
              <Button
                label="Add to Cart"
                icon={CiShoppingCart}
                onClick={() => handleAddProductToCart(cartProduct)}
              ></Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
