
import { exploreOurProductData } from "../Constants/exploreOurProductData";

const ExploreOurProducts = () => {
  // type Product = {
  //   id: number;
  //   title: string;
  //   price: string;
  //   rating: string;
  //   image: string;
  //   button?: boolean;
  // };

  // const products: Product[] = [
  //   {
  //     id: 1,
  //     title: "Breed Dry Dog Food",
  //     price: "$100",
  //     rating: "★★★☆☆ (35)",
  //     image: "/images/DryDoogFood.svg",
  //   },
  //   {
  //     id: 2,
  //     title: "CANON EOS DSLR Camera",
  //     price: "$360",
  //     rating: "★★★★☆ (95)",
  //     image: "/images/Camera.svg",
  //     button: true,
  //   },
  //   {
  //     id: 3,
  //     title: "ASUS FHD Gaming Laptop",
  //     price: "$700",
  //     rating: "★★★★★ (325)",
  //     image: "public/images/GamingLaptop.svg",
  //   },
  //   {
  //     id: 4,
  //     title: "Curology Product Set",
  //     price: "$500",
  //     rating: "★★★★☆ (145)",
  //     image: "/images/iphone-17.jpeg",
  //   },
  // ];
  return (
    <div className="my-40 ">
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
      <div className="flex-row md:flex justify-between items-center gap-10 space-y-10 md:space-y-0 ">
        {exploreOurProductData.map(
          ({
            id,
            heart,
            quickView,
            image,
            description,
            amount,
            stars,
            rating,
          }) => (
            <div key={id} className=" w-[270px]">
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
              <div className="mt-4">
                <p className="font-semibold text-lg mr-20 w-[185px]">{description}</p>
                <div className="flex items-center gap-1">
                  <p className="text-primary flex gap-4 font-medium">
                    {amount}
                  </p>
                  <img src={stars} alt="rating" />
                  <span className="text-gray-500">{rating}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
    // <div className="flex gap-6 p-6 bg-white">
    //   {products.map((product) => (
    //     <div key={product.id} className="w-56 text-left shadow rounded-xl p-4">
    //       <img
    //         src={product.image}
    //         alt={product.title}
    //         className="w-full rounded-lg"
    //       />

    //       {product.button && (
    //         <button className="w-full bg-black text-white py-2 mt-3 rounded-md">
    //           Add To Cart
    //         </button>
    //       )}

    //       <p className="mt-2 text-sm">{product.title}</p>
    //       <p className="text-red-500 font-semibold text-sm">{product.price}</p>
    //       <p className="text-gray-500 text-sm">{product.rating}</p>
    //     </div>
    //   ))}
    // </div>
  );
}

export default ExploreOurProducts
