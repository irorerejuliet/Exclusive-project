import { Link } from "react-router-dom";
import useFetch from "@/hooks/useFetch";

const CategoryProducts = () => {
  const { data, isLoading, error } = useFetch({
    url: "products/category-list",
  });
  console.log(data, isLoading, "category");
  const categories = data && data.length > 0 ? data : ([] as string[]);

  // const [error, setError] = useState("");
  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const visibleCategories =
  //   categories.length > 0 ? categories?.slice(0, 10) : [];
  // console.log(loading, error);
  // useEffect(() => {
  //   async function fetchCategories() {
  //     setLoading(true);
  //     try {
  //       const res = await fetch("https://dummyjson.com/products/category-list");
  //       if (!res.ok) throw new Error("Failed to fetch categories");
  //       const data = await res.json();
  //       setCategories(data);
  //       setError("");
  //     } catch (error) {
  //       console.log(error);
  //       const err = error as unknown as {
  //         message: string;
  //       };
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchCategories();
  // }, []);
  return (
    <div className="w-[217px] border-r pr-6">
      {isLoading && <p>Loading....</p>}
      {error && categories === 0 && error}
      {categories?.slice(0, 9)?.map((categories: string, index: number) => (
        <div
          key={index}
          className="flex justify-between items-center py-3 text-[16px] cursor-pointer hover:text-black/70 capitalize"
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
