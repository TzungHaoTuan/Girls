"use client";
import {
  CartProductType,
  SelectedImageType,
} from "@/src/app/product/[productId]/ProductDetails";

interface SetColorProps {
  images: SelectedImageType[];
  cartProduct: CartProductType;
  handleColorSelect: (value: SelectedImageType) => void;
}

const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="font-semibold">COLOR:</span>
        <div className="flex gap-1">
          {images.map((image) => (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className={`w-7 h-7 rounded-full flex items-center justify-center border-green-300 ${
                image.color === cartProduct.selectedImage.color
                  ? "border-[2px]"
                  : "border-none"
              }`}
            >
              <div
                style={{ backgroundColor: image.colorCode }}
                className="w-5 h-5 rounded-full border-[1px] border-white cursor-pointer"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
