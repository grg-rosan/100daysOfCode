import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import "../css/Home.css";
import { useSearch } from "../context/SearchProductContext";
import Pagination from "../component/Pagination";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search, result, loading: searchLoading } = useSearch();

  /*pagination */

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const result = await response.json();
      setData(result);
      setLoading(false);
      console.log(result);
    };
    fetchApi();
  }, []);

  /*pagination logic */
  const lastPosIndex = currentPage * postPerPage;
  const firstPosIndex = lastPosIndex - postPerPage;

  const currentPos = data.slice(firstPosIndex, lastPosIndex);


  // at currentpos we set sliced data so it only display limited data 
  const ProductToShow = search ? result : currentPos; /* <--here */
  const isLoading = search ? searchLoading : loading;

  return (
    <div className="product-grid">
      {isLoading ? (
        <h2>Loading</h2>
      ) : ProductToShow.length > 0 ? (
        <>
          {ProductToShow.map((product) => (
          <ProductCard key={product.id} product={product} /> /*here we render data and display paginaton ui outside the .map function */
          ))}
          <Pagination totalPost={data.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </>
      ) : (
        <h2>no data</h2>
      )}
    </div>
  );
};

export default Home;
