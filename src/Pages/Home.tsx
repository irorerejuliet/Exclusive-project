import HeroSection from "../Components/Banner/HeroSection"
import Navbar from "../Components/Layouts/Navbar"
import BestSellingProduct from "../Components/Products/BestSellingProduct"
import Categories from "../Components/Products/Categories"
import DeliveryService from "../Components/Products/DeliveryService"
import ExploreOurProducts from "../Components/Products/ExploreOurProducts"
import FlashSales from "../Components/Products/FlashSales"
import MusicExperience from "../Components/Products/MusicExperience"
import NewArrival from "../Components/Products/NewArrival"




const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FlashSales/>
      <Categories/>
      <BestSellingProduct/>
      <MusicExperience/>
      <ExploreOurProducts/>
      <NewArrival/>
      <DeliveryService/>
    </div>
  )
}

export default Home
