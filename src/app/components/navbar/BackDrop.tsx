interface BackDropProps {
  onClick: () => void;
}
const BackDrop: React.FC<BackDropProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed top-0 left-0 z-20 w-screen h-screen backdrop-blur-2xl  opacity-50"
    ></div>
  );
};

export default BackDrop;
