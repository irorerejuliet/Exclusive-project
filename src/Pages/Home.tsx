import HeroSection from "../Components/Banner/HeroSection"
import Navbar from "../Components/Layouts/Navbar"
import BestSellingProduct from "../Components/Products/BestSellingProduct"
import Categories from "../Components/Products/Categories"
import FlashSales from "../Components/Products/FlashSales"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FlashSales/>
      <Categories/>
      <BestSellingProduct/>
    </div>
  )
}

export default Home
