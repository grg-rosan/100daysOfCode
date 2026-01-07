import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Ui from "./Ui";

const FetchQuote = () => {
  const [quote, setQuote] = useState(null);
  const fetchQuote = async () => {
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();
      setQuote(data);
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };


  useEffect(() => {
    fetchQuote();
  },[]);
  return <Ui quote={quote} updateFunc={fetchQuote} />;
};

export default FetchQuote;
