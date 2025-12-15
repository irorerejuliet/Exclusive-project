
const HeroBanner = () => {
  
  return (
    <div className="flex-1  bg-black w-[892px] text-white rounded-sm px-20 py-20 relative overflow-hidden md:block  hidden">
      <div className=" space-y-3">
        <div className="flex items-center gap-2">
          <img src="/images/AplleLogo.svg" alt="apple" />
          <p className="text-sm opacity-70">iPhone 14 Series</p>
        </div>

        <h1 className="text-5xl font-semibold leading-tight w-[298px]">
          Up to 10% off Voucher
        </h1>

        <button className="mt-10 flex items-center gap-2 border-b  text-2xl ">
          Shop Now
          <img src="/images/arrow-right.svg" alt="arrow-left" />
        </button>
      </div>

      <img
        src="/images/Hero-Image.svg"
        alt="hero"
        className="absolute right-0 top-1/2 -translate-y-1/2"
        
      />

      {/* Loading */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-[#FF0000] rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
