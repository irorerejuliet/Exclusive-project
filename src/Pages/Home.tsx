import HeroSection from "../Components/Banner/HeroSection"
import Navbar from "../Components/Layouts/Navbar"
import BestSellingProduct from "../Components/Products/BestSellingProduct"
import Categories from "../Components/Products/Categories"
import ExploreOurProducts from "../Components/Products/ExploreOurProducts"
import FlashSales from "../Components/Products/FlashSales"
import MusicExperience from "../Components/Products/MusicExperience"


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
    </div>
  )
}

export default Home
