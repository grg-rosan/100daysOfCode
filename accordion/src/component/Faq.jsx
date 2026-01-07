import React, { useState } from "react";
import Ans from "./Ans";

const Faq = () => {
  const [click, setClick] = useState(null);

  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building UI.",
    },
    {
      question: "What is an Accordion?",
      answer: "Accordion is a UI component that expands and collapses content.",
    },
    {
      question: "Why use useState?",
      answer: "useState lets you add state to functional components.",
    },
  ];

  const handleClick = (index) => {
    console.log("click");
    setClick((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {faqData.map((item, index) => (
        <div key={index}>
          <button onClick={() => handleClick(index)}>
            <h3>{item.question}</h3>
          </button>
          {click === index && <p>{item.answer}</p>}
        </div>
      ))}
    </>
  );
};

export default Faq;
