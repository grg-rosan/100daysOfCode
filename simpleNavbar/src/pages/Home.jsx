import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setData(result);
      setLoading(false);
      console.log(result);
    };
    fetchApi();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading</h2>
      ) : data.length > 0 ? (
        data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h2>no data</h2>
      )}
    </div>
  );
};

export default Home;
