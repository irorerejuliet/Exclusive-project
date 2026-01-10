import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeroBanner = () => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
   };

  const [activeIndex, setActiveIndex] = useState(0);

  const heroImages = [
    "/images/phone5.png",
    "/images/iphone1.jpeg",
    "/images/phone1.jpeg",
    "/images/iphone13.png",
    "/images/phone5.png",
  ];

  
  return (
    <div className="flex-1 bg-black w-[892px] text-white rounded-sm px-20 py-20 relative overflow-hidden md:block hidden">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <img src="/images/AplleLogo.svg" alt="apple" />
          <p className="text-sm opacity-70">iPhone 14 Series</p>
        </div>

        <h1 className="text-5xl font-semibold leading-tight w-[298px]">
          Up to 10% off Voucher
        </h1>

        <button className="mt-10 flex items-center gap-2 border-b text-2xl">
          Shop Now
          <img src="/images/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>

      <Slider {...settings}>
        <div className="relative">
          {/* Hero Image */}
          <img
            src={heroImages[activeIndex]}
            alt="hero"
            className="absolute right-40 bottom-6  w-[450px]"
          />

          {/* Loading Dots */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all
              ${activeIndex === index ? "bg-[#FF0000]" : "bg-gray-500"}`}
              />
            ))}
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroBanner;
