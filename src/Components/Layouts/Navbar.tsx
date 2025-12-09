import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center  py-4 relative bg-white wrapper">
        <Link to="/" className="text-4xl font-bold">Exclusive</Link>
        <div className="hidden md:flex gap-6 items-center text-base font-normal">
          <Link to="">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">SignUp</Link>
        </div>

        {/* Search + Icons */}
        <div className="hidden md:flex gap-4 items-center">
          <div className="flex gap-1 border border-gray-200 shadow rounded-md py-2 px-4">
            <input type="text" placeholder="What are looking for " className="focus:outline-none"/>
            <img src="/images/SearchIcon.svg" alt="searchIcon" />
          </div>
          <div className="flex gap-4">
            <img src="/images/HeartIcon.svg" alt="heartIcon" />
            <img src="/images/Cart1Icon.svg" alt="cartIcon" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose size={24} /> : <HiMenuAlt1 size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } flex-col md:hidden absolute top-full left-0 text-lg font-semibold text-red-900 px-4 pt-4 pb-6 gap-4 z-50`}
        >
          <Link to="">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">SignUp</Link>
        </div>
      </nav>
      <div className="w-full border-t border-gray-200"></div>
    </header>
  );
};

export default Navbar;
