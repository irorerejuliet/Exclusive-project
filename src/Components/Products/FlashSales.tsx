

const FlashSales = () => {
  return (
    <div className="my-40">
      <div className="w-[270px]">
        <h2 className="text-3xl font-bold mb-4">Flash Sales</h2>
        {/* Card */}
        <div className="relative bg-[#F5F5F5] shadow rounded-xl p-4">
          <button className="absolute top-3 left-3 bg-[#DB4444] text-white py-1 px-2 rounded-md">
            -40%
          </button>

          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <img src="/images/HeartIcon.svg" alt="heart" />
            <img src="/images/Quick View.svg" alt="quickview" />
          </div>
          <div className="flex justify-center my-6">
            <img
              src="/images/GamePad.svg"
              alt="GamePad"
              className="h-24 w-auto"
            />
          </div>
        </div>
        {/* Product info below card */}
        <div className="mt-4 w-[210px]">
          <p className="font-semibold text-lg">HAVIT HV-G92 Gamepad</p>
          <p className="text-[#DB4444] flex gap-4 font-medium">
            $120 <span className=" text-gray-400">$160</span>
          </p>
          <div className="flex items-center gap-2 mt-1">
            <img src="/images/Five star.svg" alt="rating" />
            <span className="text-gray-500">(88)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
