import { QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "./src/styles/global";
import { queryClient } from "./src/lib/react-query";
import { RouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Home from "./src/routes/home";
import FindPet from "./src/routes/findPet";
import Login from "./src/routes/login";
import RegisterOrg from "./src/routes/registerOrg";
import PetRegister from "./src/routes/petRegister";
import PetInfo from "./src/routes/petInfo";
import "react-loading-skeleton/dist/skeleton.css";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/findPet",
      element: <FindPet />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registerOrg",
      element: <RegisterOrg />,
    },
    {
      path: "/petRegister/:email",
      element: <PetRegister />,
    },
    {
      path: "/petInfo/:petId",
      element: <PetInfo />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </QueryClientProvider>
  );
}
