import SalesTime from "./SalesTime";

import ProductCard from "../Products/ProductCard";
import useProducts from "../../hooks/useProducts";
const FlashSales = () => {
  const { data, loading } = useProducts();
  return (
    <div className="my-40">
      <div className="flex gap-4 items-center">
        <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
        <p className="text-primary text-base font-semibold">Today's</p>
      </div>
      <SalesTime />
      <div className="flex-row md:flex justify-between items-center gap-10 space-y-10 md:space-y-0 md:px-0 px-10">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          data?.products
            ?.slice(0, 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
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
