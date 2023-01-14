const getQuote = async () => {
  const res = await fetch("http://api.quotable.io/random");
  const data = await res.json();
  return data;
};

export default getQuote;
