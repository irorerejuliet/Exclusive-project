
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryProducts = () => {
  const [categories, setCategories] = useState([]);
  const visibleCategories = categories.slice(0, 10);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://dummyjson.com/products/category-list");
        const data = await res.json();
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategories();
  }, []);
  return (
    <div className="w-[217px] border-r pr-6">
      {visibleCategories.map((categories, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-3 text-[16px] cursor-pointer hover:text-black/70"
        >
          <Link to={`categories/${categories}`}>{categories}</Link>

          {/* This shows the first two items with arrows */}
          {index < 2 && (
            <img
              src="/images/GreaterThanIcon.svg"
              alt="arrow"
              className="w-4 h-4 opacity-70"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryProducts;
