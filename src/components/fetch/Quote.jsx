import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState(null);

  // first option

  // useEffect(() => {
  //   const fetchQuote = async () => {
  //     const res = await fetch("http://api.quotable.io/random");
  //     const data = await res.json();
  //     setQuote(data);
  //   };

  //   fetchQuote();
  // }, []);

  // second option

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, []);

  return (
    <div>
      <h1>Get quotes using fetch API</h1>
      <p>{quote?.content}</p>
    </div>
  );
};

export default Quote;
