
import { exploreOurProductData } from "../Constants/exploreOurProductData";
import { formatCurrency } from "../../helper/formatCurrency";

const ExploreOurProducts = () => {
  return (
    <div className="my-40">
      <div className="flex gap-4 items-center">
        <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
        <p className="text-primary text-base font-semibold">Our Products</p>
      </div>
      <div className="flex justify-between items-center mb-7">
        <h4 className="md:text-3xl font-semibold">Explore Our Products</h4>
        <div className="flex gap-3 md:py-0 py-5">
          <img
            src="/images/icons_arrow-left.svg"
            alt="arrow-left"
            className="shadow rounded-full p-1 border border-gray-100"
          />
          <img
            src="/images/icon-arrow-right.svg"
            alt="arrow-right"
            className="shadow rounded-full p-2 border border-gray-100"
          />
        </div>
      </div>
      <div className="flex-row md:flex justify-between items-center gap-10 space-y-10 md:space-y-0">
        {exploreOurProductData.map(
          ({
            id,
            heart,
            quickView,
            image,
            description,
            price,
            stars,
            rating,
            discounted_price,
          }) => (
            <div key={id} className="w-[270px] ">
              {/* Card */}
              <div className="relative bg-[#F5F5F5] shadow rounded-xl p-4">
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <img src={heart} alt="heart" />
                  <img src={quickView} alt="quickview" />
                </div>
                <div className="flex justify-center my-6">
                  <img src={image} alt="GamePad" className="h-24 w-auto" />
                </div>
              </div>
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
    </div>
  );
}

export default ExploreOurProducts
