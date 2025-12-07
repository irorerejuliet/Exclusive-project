import { bestSellingProductData } from "../Constants/bestSellingProductData";

const BestSellingProduct = () => {
  return (
    <div className="my-40">
      <div className="flex gap-4 items-center">
        <div className="bg-[#DB4444] w-4 h-10 rounded-[5px]"></div>
        <p className="text-[#DB4444] text-base font-semibold">This month</p>
      </div>
      <div className="flex justify-between items-center mb-7">
        <h4 className="md:text-3xl font-semibold">Best Selling Products</h4>
        <button className="text-white bg-[#DB4444] md:py-3 py-1 px-2 md:px-5 rounded-md md:w-[159px] w-20">View All</button>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1  justify-between items-center gap-10 space-y-10 md:space-y-0 md:px-0 px-10">
        {bestSellingProductData.map(
          ({
            id,
            heart,
            quickVeiw,
            image,
            description,
            amount,
            stars,
            rating,
          }) => (
            <div key={id} className="w-[270px] ">
              {/* Card */}
              <div className="relative bg-[#F5F5F5] shadow rounded-xl p-4">
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <img src={heart} alt="heart" />
                  <img src={quickVeiw} alt="quickview" />
                </div>
                <div className="flex justify-center my-6">
                  <img src={image} alt="GamePad" className="h-24 w-auto" />
                </div>
              </div>
              {/* Product card detsails */}
              <div className="mt-4 w-[210px]">
                <p className="font-semibold text-lg">{description}</p>
                <p className="text-[#DB4444] flex gap-4 font-medium">
                  {amount}
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
}

export default BestSellingProduct
