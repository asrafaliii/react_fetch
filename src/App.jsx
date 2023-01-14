import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Quote from "./components/query/Quote";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Quote />
          <Quote />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
