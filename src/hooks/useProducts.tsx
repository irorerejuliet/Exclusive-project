import { useEffect, useState } from "react";
import type { ProductApiResponse } from "../types/products";

const useProducts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ProductApiResponse | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Unable to fetch data");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  console.log(data);
  return {
    loading,
    data,
  };
};

export default useProducts;
