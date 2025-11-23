
import { salesData } from "../Constants/salesData";


const FlashSales = () => {
  return (
    <div className="my-40">
      <h2 className="text-3xl font-bold mb-4 leading-[4%]">Flash Sales</h2>
      <div className="flex-row md:flex justify-between items-center gap-10 space-y-10 md:space-y-0">
        {salesData.map(
          ({
            id,
            percentage,
            heart,
            quickVeiw,
            gamepad,
            description,
            amount,
            stars,
            rating,
          }) => (
            <div key={id} className="w-[270px] ">
              {/* Card */}
              <div className="relative bg-[#F5F5F5] shadow rounded-xl p-4">
                <button className="absolute top-3 left-3 bg-[#DB4444] text-white py-1 px-2 rounded-md">
                  {percentage}
                </button>
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <img src={heart} alt="heart" />
                  <img src={quickVeiw} alt="quickview" />
                </div>
                <div className="flex justify-center my-6">
                  <img src={gamepad} alt="GamePad" className="h-24 w-auto" />
                </div>
              </div>
              {/* Product info below card */}
              <div className="mt-4 w-[210px]">
                <p className="font-semibold text-lg">{description}</p>
                <p className="text-[#DB4444] flex gap-4 font-medium">
                  {amount} <span className=" text-gray-400">{amount}</span>
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <img src={stars} alt="rating" />
                  <span className="text-gray-500">{rating}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FlashSales;
