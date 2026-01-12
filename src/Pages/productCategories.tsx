import { useParams } from "react-router-dom";
import WomenProduct from "../Components/womenFasion/WomenProduct";

const ProductCategories = () => {
  const { category } = useParams() as {
    category: string;
  };
  console.log(category);
  return (
    <div>
      <WomenProduct />
    </div>
  );
};

export default ProductCategories;
