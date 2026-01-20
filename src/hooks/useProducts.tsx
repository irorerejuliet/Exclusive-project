import { useEffect, useState } from "react";
import type { ProductApiResponse } from "../types/products";
import useFetch from "./useFetch";

const useProducts = () => {
  const { data, isLoading, error } = useFetch({
    url: "products",
  });
  // const [loading, setLoading] = useState<boolean>(false);
  // const [data, setData] = useState<ProductApiResponse | null>(null);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     setLoading(true);
  //     try {
  //       const res = await fetch("https://dummyjson.com/products");
  //       if (!res.ok) throw new Error("Unable to fetch data");
  //       const data = await res.json();
  //       setData(data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchProducts();
  // }, []);

  console.log(data);
  return {
    loading: isLoading,
    data: data as ProductApiResponse,
    error: error,
  };
};

export default useProducts;
