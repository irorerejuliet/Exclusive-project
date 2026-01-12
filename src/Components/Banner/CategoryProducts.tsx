import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryProducts = () => {
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const visibleCategories =
    categories.length > 0 ? categories?.slice(0, 10) : [];
  console.log(loading, error);
  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products/category-list");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data);
        setError("");
      } catch (error) {
        console.log(error);
        const err = error as unknown as {
          message: string;
        };
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);
  return (
    <div className="w-[217px] border-r pr-6">
      {loading && <p>Loading....</p>}
      {error && categories.length === 0 && error}
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
