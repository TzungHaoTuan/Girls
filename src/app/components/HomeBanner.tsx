import Image from "next/image";
const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-violet-200 to-violet-400 mb-8">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-evenly mx-auto px-8 py-12">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Spring Sale
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Enjoy discounts on selected items
          </p>
          <p className="text-2xl md:text-5xl font-bold text-yellow-300">
            GET 50% OFF
          </p>
        </div>
        {/* <div className="w-1/3 relative aspect-video shadow-2xl">
          <Image
            src="/banner-image.jpg"
            alt="Banner Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover brightness-100"
          ></Image>
        </div> */}
      </div>
    </div>
  );
};

export default HomeBanner;
