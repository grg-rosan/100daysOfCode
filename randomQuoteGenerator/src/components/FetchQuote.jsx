import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Ui from './Ui';

const FetchQuote = () => {
      const [quote, setQuote] = useState("");

  useEffect(()=>{
    const fetchQuote = async()=>{
        const res = await fetch('https://dummyjson.com/quotes/random');
        const data = await res.json();
        setQuote(data)
        console.log(data)
    }
    fetchQuote();
  },[])
  return (
    <Ui quote={quote} />
  )
}

export default FetchQuote