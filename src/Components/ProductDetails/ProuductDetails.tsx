import type { Product } from "@/types/products";
import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImage, setCurrentImage] = useState("");
  const [qty, setQty] = useState(2);

  useEffect(() => {
    async function fetchproductById() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Unable to fetch data");
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchproductById();
  }, [id]);

  if (!product) {
    return (
      <p className="text-center py-20 text-red-800 text-lg">
        Loading product...
      </p>
    );
  }

  console.log(product.reviews);
  return (
    <div className="wrapper ">
      <div className="flex items-center gap-4 py-20">
        <Link to="/" className="text-[#BFBFBF] text-base font-medium">
          Account
        </Link>
        <span className="text-[#BFBFBF] text-base font-medium">/</span>
        <Link
          to={`/categories/${product?.category}`}
          className="text-[#BFBFBF] text-base font-medium capitalize"
        >
          {product?.category}
        </Link>
        <span className="text-[#BFBFBF] text-base font-medium">/</span>
        <p className="text-base font-medium capitalize">{product.title}</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div className=" w-[171px] md:mx-0 mx-auto space-y-3">
          {product?.images?.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="p-2 bg-[#F5F5F5] rounded-sm flex justify-center items-center"
              role="button"
              onClick={() => setCurrentImage(image)}
            >
              <img src={image} alt="gampad" />
            </div>
          ))}
        </div>
        <div className="md:w-[500px] w-[300px] md:mx-0 mx-auto md:h-[600px] h-[450px]  bg-[#F5F5F5] pt-[154px] pb-[131px] px-[27px] rounded-sm md:mt-0 my-8">
          <img
            src={currentImage || product?.thumbnail}
            alt="gamepad"
            className="w-full h-full"
          />
        </div>
        {/* Product Details */}
        <div className="max-w-sm font-sans space-y-4 ">
          <h2 className="text-2xl font-semibold">{product?.title}</h2>
          <p>{product?.date}</p>
          <div className="flex items-center gap-2 text-sm">
            <div className="text-yellow-400">★★★★★</div>
            <span className="text-gray-400">(150 Reviews)</span>
            <span className="text-green-500">| In Stock</span>
          </div>

          <p className="text-2xl font-medium">${product?.price}</p>

          <p className="md:text-sm text-xs font-medium">
            {product?.description}
          </p>

          <hr />

          <div className="flex items-center gap-4">
            <span className="text-xl  font-normal">Colours:</span>
            <div className="w-5 h-5 rounded-full border bg-[#A0BCE0]" />
            <div className="w-5 h-5 rounded-full bg-[#E07575]" />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl font-n">Size:</span>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`w-8 h-8 text-sm border rounded ${
                  size === "M" ? "bg-red-400 text-white border-secondary" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded">
              <button
                className="px-3 border"
                onClick={() => setQty((q) => q - 1)}
              >
                -
              </button>
              <span className="px-4">{qty}</span>
              <button
                className="px-3 bg-red-400  text-white"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>

            <button className="flex-1 border-secondary bg-red-400 text-white py-2 rounded">
              Buy Now
            </button>

            <button className="border rounded p-2">
              <BiHeart size={18} />
            </button>
            <p>{}</p>
          </div>

          <div className="border rounded p-4 space-y-3 text-sm w-[399px]">
            <div className="flex gap-3 items-start">
              <img
                src="/images/DelivryIcon.svg"
                alt="delivryIcon"
                className="w-[26px]"
              />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-gray-500">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <hr />

            <div className="flex gap-3 items-start">
              <span>
                <img
                  src="/images/ReturnIcon.svg"
                  alt="returnIcon"
                  className="w-[26px]"
                />
              </span>
              <div>
                <p className="font-medium">Return Delivery</p>
                <p className="text-gray-500">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {product?.reviews?.map((review, i) => (
          <div key={`${review.rating}-${i}`}>
            <p className="bg-red-400">{review.comment}</p>
            <p>{review.date}</p>
            <p>{review.comment}</p>
            <p>{review.reviewerName}</p>
            <p>{review.reviewerEmail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
