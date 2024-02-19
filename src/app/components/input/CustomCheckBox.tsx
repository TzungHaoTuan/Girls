import { FieldValues, UseFormRegister } from "react-hook-form";

interface CustomCheckBoxProps {
  id: string;
  label: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  id,
  label,
  disabled,
  register,
}) => {
  return (
    <div className="flex items-center w-full gap-2">
      <input
        id={id}
        type="checkbox"
        disabled={disabled}
        {...register(id)}
        placeholder=""
        className="cursor-pointer"
      />
      <label htmlFor={id} className="cursor-pointer font-medium">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckBox;
