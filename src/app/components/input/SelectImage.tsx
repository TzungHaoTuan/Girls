"use client";

import { useCallback } from "react";
import { ImageType } from "../../admin/add-products/AddProductForm";
import { useDropzone } from "react-dropzone";

interface SelectImageProps {
  item?: ImageType;
  handleFileChange: (value: File) => void;
}

const SelectImage: React.FC<SelectImageProps> = ({
  item,
  handleFileChange,
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleFileChange(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-violet-300 border-dashed p-2 cursor-pointer flex items-center justify-center text-sm text-violet-300 font-normal"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here ...</p>
      ) : (
        <p>+ {item?.color} image</p>
      )}
    </div>
  );
};

export default SelectImage;
