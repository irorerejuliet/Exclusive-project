import { Link } from "react-router-dom";
import { formatCurrency } from "../../helper/formatCurrency";
import type { Product } from "../../types/products";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// function for rationg
const productRating = (rating: number) => {
  const stars = [];

  for (let i = 1; i <= 5; i++){
    if(rating>=1){
      stars.push(<FaStar key={i} className="text-yellow-400" />)
    } else if(rating >= 1 - 0.5){
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    }else{
      stars.push(<FaRegStar key={i} className="text-yellow-400" />)
    }
  }


  return stars;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, thumbnail, discountPercentage, title, price, rating } = product;
  return (
    <div key={id} className="w-[270px]">
      {/* Card */}
      <div className="relative bg-[#F5F5F5] shadow rounded-xl p-4">
        <button className="absolute top-3 left-3 bg-primary text-white py-1 px-2 rounded-md">
          {discountPercentage}
        </button>
        <div className="flex justify-center items-center my-6 ">
          <Link to={`/product/${id}`}>
            <img src={thumbnail} alt={title} className=" w-[172px] h-[152px]" />
          </Link>
        </div>
      </div>
      <button className="text-white bg-black w-[270px] py-2 rounded-t-none rounded-b-sm">
        Add to cart
      </button>
      {/* Product info below card */}
      <div className="mt-4 w-[210px]">
        <p className="font-semibold text-lg">{title}</p>
        <div className="flex items-center gap-1">
          <p className="text-primary flex gap-4 font-medium">
            {/* {discounted_price > 0
              ? formatCurrency(discounted_price)
              : formatCurrency(price)} */}
          </p>

          <p className="text-black/50 line-through flex gap-4 font-medium">
            {formatCurrency(price)}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          {/* <img src={stars} alt="rating" /> */}
          <div className="flex">{productRating(rating)}</div>
          <span className="text-gray-500">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
