import { useEffect, useState } from "react";
interface FetchType {
  url: string;
  params?: string;
}
const useFetch = ({ url, params }: FetchType) => {
  console.log(url);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

 useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        if(params){
          console.log(params, "api");
          const res = await fetch(`${import.meta.env.VITE_API_URL}/${url}${params}`)
          if(!res.ok) {
            throw new Error("uable to fetch")
          }
          const data = await res.json()
          return setData(data)
        }

        const res = await fetch(`${import.meta.env.VITE_API_URL}/${url}/${params}`)
        console.log(params, "Api is okay");
        if(!res.ok){
          throw new Error("Failed to fetch data")
        }
        const data = await res.json()
        console.log(data);
        setData(data)
        
      } catch (error) {
        console.log(error?.message);
      }
    }

    getData()
 }, [url, params])

  

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
