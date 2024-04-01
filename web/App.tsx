import { QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "./src/styles/global";
import { queryClient } from "./src/lib/react-query";
import { RouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Home from "./src/routes/home";
import FindPet from "./src/routes/findPet";
import Login from "./src/routes/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/findPet",
    element: <FindPet variant="" />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </QueryClientProvider>
  );
}
