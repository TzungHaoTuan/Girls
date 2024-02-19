import { IconType } from "react-icons";

interface StatusProps {
  label: string;
  icon: IconType;
  bg: string;
  color: string;
}
const Status: React.FC<StatusProps> = ({ label, icon: Icon, bg, color }) => {
  return (
    <div
      className={`
    ${bg}
    ${color}
    flex items-center gap-1 px-1 rounded
    `}
    >
      {label}
      <Icon size={15} />
    </div>
  );
};

export default Status;
