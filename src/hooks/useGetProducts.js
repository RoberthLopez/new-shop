import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const res = await axios(API);
        setProducts(res.data);
      };
      fetchData();
    }, []);

    return products;
};

export default useGetProducts;