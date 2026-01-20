import HeroSection from "../Components/Banner/HeroSection";
import BestSellingProduct from "../lib/Products/BestSellingProduct";
import Categories from "../lib/Products/Categories";
import DeliveryService from "../lib/Products/DeliveryService";
import ExploreOurProducts from "../lib/Products/ExploreOurProducts";
import FlashSales from "../lib/Products/FlashSales";
import MusicExperience from "../lib/Products/MusicExperience";
import NewArrival from "../lib/Products/NewArrival";

const Home = () => {
  console.log(import.meta.env.VITE_API_URL);
  return (
    <main className="wrapper md:px-0 px-4">
      <HeroSection />
      <FlashSales />
      <Categories />
      <BestSellingProduct />
      <MusicExperience />
      <ExploreOurProducts />
      <NewArrival />
      <DeliveryService />
    </main>
  );
};

export default Home;
