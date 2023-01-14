import { useQuery } from "react-query";
import getQuote from "./getQuoteApi";
// import getQuote from "./getQuoteApi";

const Quote = ({ quote }) => {
  const { data } = useQuery("quote", () => getQuote());
  return (
    <div>
      <h1>Get quotes using fetch API</h1>
      <div>{data?.content}</div>
    </div>
  );
};

export default Quote;
