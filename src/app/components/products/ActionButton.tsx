import React from "react";
import { IconType } from "react-icons";

interface ActionButtonProps {
  icon: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`
    flex items-center justify-center
    w-[40px] h-[30px]
    rounded cursor-pointer text-violet-300
    border border-violet-300
    ${disabled && "opacity-50 cursor-not-allowed"}
    `}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon size={15} />
    </button>
  );
};

export default ActionButton;
