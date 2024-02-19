import { IconType } from "react-icons";

interface CategoryInputProps {
  label: string;
  icon: IconType;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  label,
  icon: Icon,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 border-[1.5px] rounded-xl p-4
      hover:border-violet-400 transition cursor-pointer
      ${selected ? "border-violet-400" : "border-violet-300"}
      `}
      onClick={() => onClick(label)}
    >
      <Icon size={30} />
      <div className="font-medium">{label}</div>
    </div>
  );
};

export default CategoryInput;
