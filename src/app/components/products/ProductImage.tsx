"use client";
import Image from "next/image";
import {
  CartProductType,
  SelectedImageType,
} from "@/src/app/product/[productId]/ProductDetails";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImageType) => void;
}
const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="relative h-[440px] aspect-square">
        <Image
          src={cartProduct.selectedImage.image}
          alt={cartProduct.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          className="object-contain"
        ></Image>
      </div>
      <div className="mt-10 w-full flex items-center justify-center gap-4 rounded">
        {product.images.map((image: SelectedImageType) => (
          <div
            key={image.color}
            onClick={() => handleColorSelect(image)}
            className={`relative h-16 aspect-square rounded border-green-300 ${
              image.color === cartProduct.selectedImage.color
                ? "border"
                : "border-none"
            }`}
          >
            <Image
              src={image.image}
              alt={image.color}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ProductImage;
