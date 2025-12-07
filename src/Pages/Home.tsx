import HeroSection from "../Components/Banner/HeroSection";
import BestSellingProduct from "../Components/Products/BestSellingProduct";
import Categories from "../Components/Products/Categories";
import DeliveryService from "../Components/Products/DeliveryService";
import ExploreOurProducts from "../Components/Products/ExploreOurProducts";
import FlashSales from "../Components/Products/FlashSales";
import MusicExperience from "../Components/Products/MusicExperience";
import NewArrival from "../Components/Products/NewArrival";

const Home = () => {
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
