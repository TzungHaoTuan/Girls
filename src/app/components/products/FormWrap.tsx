const FormWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
    min-h-fit
    h-full
    flex
    justify-center
    items-center
    pt-24
    pb-12
    "
    >
      <div
        className="
      w-full
      max-w-[650px]
      flex
      flex-col
      items-center
      gap-6
      shadow-xl
      shadow-violet-300
      rounded-md
      p-4
      md:p-8
      "
      >
        {children}
      </div>
    </div>
  );
};

export default FormWrap;
