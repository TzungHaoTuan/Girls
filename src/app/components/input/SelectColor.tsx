"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ImageType } from "../../admin/add-products/AddProductForm";
import SelectImage from "./SelectImage";
import Button from "../products/Button";

interface SelectColorProps {
  item: ImageType;
  addImageToState: (value: ImageType) => void;
  removeImageFromState: (value: ImageType) => void;
  isProductCreated: boolean;
}

const SelectColor: React.FC<SelectColorProps> = ({
  item,
  addImageToState,
  removeImageFromState,
  isProductCreated,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (isProductCreated) {
      setIsSelected(false);
      setFile(null);
    }
  }, []);

  const handleFileChange = useCallback((value: File) => {
    setFile(value);
    addImageToState({ ...item, image: value });
  }, []);

  const handleCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(e.target.checked);

    if (!e.target.checked) {
      setFile(null);
      removeImageFromState(item);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 overflow-y-auto border-b-[1.5px]">
      <div className="flex items-center gap-2 h-[60px]">
        <input
          type="checkbox"
          id={item.color}
          checked={isSelected}
          onChange={handleCheck}
          className="cursor-pointer"
        />
        <label htmlFor={item.color} className="font-medium cursor-pointer">
          {item.color}
        </label>
      </div>
      {isSelected && !file && (
        <div className="col-span-2 text-center">
          <SelectImage item={item} handleFileChange={handleFileChange} />
        </div>
      )}
      {file && (
        <div className="col-span-2 flex items-center justify-between gap-2 text-sm">
          <p>{file.name}</p>
          <div className="w-[70px]">
            <Button
              label="Cancel"
              small
              outline
              onClick={() => {
                setFile(null);
                removeImageFromState(item);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectColor;
