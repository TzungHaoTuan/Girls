import { IconType } from "react-icons";

interface AdminNavbarItemProps {
  icon: IconType;
  label: String;
  selected?: boolean;
}

const AdminNavbarItem: React.FC<AdminNavbarItemProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  return (
    <div
      className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-violet-600 transition cursor-pointer 
    ${
      selected
        ? "border-b-violet-600 text-violet-600"
        : "border-transparent text-violet-300"
    }`}
    >
      <Icon size={20}></Icon>
      <div className="font-medium text-sm text-center break-normal">
        {label}
      </div>
    </div>
  );
};

export default AdminNavbarItem;
