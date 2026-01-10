import HeroBanner from "./HeroBanner";
import Sidebar from "./CategoryProducts";

const HeroSection = () => {
  return (
    <div className="py-10 flex gap-10 bg-black md:bg-white">
      <Sidebar />
      <HeroBanner />
    </div>
  );
};

export default HeroSection;
