
import ProductCard from "./ProductCard";
import useProducts from "../../hooks/useProducts";
import CardSkeleton from "../ui/CardSkeleton";



const BestSellingProduct = () => {
  const {data, loading} = useProducts()

  return (
    <div className="my-40">
      <div className="flex gap-4 items-center">
        <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
        <p className="text-primary text-base font-semibold">This month</p>
      </div>
      <div className="flex justify-between items-center mb-7">
        <h4 className="md:text-3xl font-semibold">Best Selling Products</h4>
        <button className="text-white bg-primary md:py-3 py-1 px-2 md:px-5 rounded-md md:w-[159px] w-20">
          View All
        </button>
      </div>
        <div className="grid md:grid-cols-4 grid-cols-1  justify-between items-center gap-10 space-y-10 md:space-y-0 md:px-0 px-10">
          {loading && [1,2,3,4].map((_,i) =><CardSkeleton key={i}/>)}
          {data?.products?.slice(6,10).map((product) =>(
             <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </div>
  );
}

export default BestSellingProduct
