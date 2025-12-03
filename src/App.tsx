import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Layouts/Footer";
import Navbar from "./Components/Layouts/Navbar";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import WishLists from "./Pages/WishLists";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlistes" element={<WishLists />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
