import { useEffect, useState } from "react";
import type { ProductApiResponse } from "../types/products";

const useProducts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ProductApiResponse | null>(null);

  useEffect(() => {
    async function fectchProducts() {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("unable to fetch data");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fectchProducts();
  }, []);

  console.log(data);
  return {
    loading,
    data,
  };
};

export default useProducts;
