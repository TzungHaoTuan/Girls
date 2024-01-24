import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <>
      {src ? (
        <Image
          src={src}
          alt={src}
          width={30}
          height={30}
          className="rounded-full"
        />
      ) : (
        <FaUserCircle size={30} />
      )}
    </>
  );
};

export default Avatar;
