import { QueryClientProvider } from "@tanstack/react-query";
import Home from "./src/pages/home";
import { GlobalStyle } from "./src/styles/global";
import { queryClient } from "./src/lib/react-query";

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Home />
        <GlobalStyle />
      </QueryClientProvider>
    </>
  );
}
