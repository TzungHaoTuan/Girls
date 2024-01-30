"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  small?: boolean;
  outline?: boolean;
  custom?: boolean;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  small,
  outline,
  custom,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-md
    hover:opacity-80
    transition
    w-full
    flex
    items-center
    justify-center
    gap-2
    border-violet-300
    ${outline ? "bg-white" : "bg-violet-400"}
    ${outline ? "text-violet-400" : "text-white"}
    ${small ? "text-sm font-light" : "text-lg font-medium"}
    ${small ? "py-1 px-2 border-[1px]" : "py-3 px-4 border-2"}
    ${custom ? custom : ""}
    `}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
