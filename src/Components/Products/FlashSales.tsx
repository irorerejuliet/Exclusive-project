import { salesData } from "../Constants/salesData";
import SalesTime from "./SalesTime";
import { formatCurrency } from "../../helper/formatCurrency";
import { Link } from "react-router-dom";
const FlashSales = () => {
  return (
    <div className="my-40">
      <div className="flex gap-4 items-center">
        <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
        <p className="text-primary text-base font-semibold">Today's</p>
      </div>
      <SalesTime />
      <div className="flex-row md:flex justify-between items-center gap-10 space-y-10 md:space-y-0 md:px-0 px-10">
        {salesData.map(
          ({
            id,
            percentage,
            heart,
            quickVeiw,
            gamepad,
            description,
            price,
            stars,
            rating,
            discounted_price,
          }) => (
            <div key={id} className="w-[270px]">
              {/* Card */}
              <div className="relative bg-[#F5F5F5] shadow rounded-xl p-4">
                <button className="absolute top-3 left-3 bg-primary text-white py-1 px-2 rounded-md">
                  {percentage}
                </button>
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <img src={heart} alt="heart" />
                  <img src={quickVeiw} alt="quickview" />
                </div>
                <div className="flex justify-center my-6">
                  <Link to={`/product/${id}`}>
                    <img src={gamepad} alt="GamePad" className="h-24 w-auto" />
                  </Link>
                </div>
              </div>
              <button className="text-white bg-primary hover:bg-black w-[270px] py-2 rounded-t-none rounded-b-sm transform transition-transform duration-300 hover:scale-105">
                Add to cart
              </button>
              {/* Product info below card */}
              <div className="mt-4 w-[210px]">
                <p className="font-semibold text-lg">{description}</p>
                <div className="flex items-center gap-1">
                  <p className="text-primary flex gap-4 font-medium">
                    {discounted_price > 0
                      ? formatCurrency(discounted_price)
                      : formatCurrency(price)}
                  </p>
                  {discounted_price > 0 && (
                    <p className="text-black/50 line-through flex gap-4 font-medium">
                      {formatCurrency(price)}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <img src={stars} alt="rating" />
                  <span className="text-gray-500">{rating}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <button className="text-white bg-secondary text-base font-medium px-10 py-4 rounded-md my-16 w-[234px] md:mx-0 mx-10">
        View All Products
      </button>
      <div className="w-full border-t border-gray-200"></div>
    </div>
  );
};

export default FlashSales;
