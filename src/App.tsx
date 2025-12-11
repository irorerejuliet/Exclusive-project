import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Layouts/Footer";
import Navbar from "./Components/Layouts/Navbar";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import WishLists from "./Pages/WishLists";
import Cart from "./Pages/Cart";
import Account from "./Pages/Account";
import WomenFashion from "./Pages/WomenFashion";
import MenFashion from "./Pages/MenFashion";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="wishlists" element={<WishLists />} />
          <Route path="cart" element={<Cart />} />
          <Route path="account" element={<Account />} />
          <Route path="womenfashion" element={<WomenFashion />} />
          <Route path="menfashion" element={<MenFashion />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
