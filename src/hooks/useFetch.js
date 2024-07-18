import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetchData(url)
  },[])

  const fetchData = async (urlLink) => {
    try {
      setIsLoading(true);
      const res = (await axios.get(urlLink)).data;
      setData(res.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {data,isLoading,error}

};

export default useFetch;
