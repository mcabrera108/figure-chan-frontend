import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Error from "./pages/Error";
import AdvanceSearch from "./pages/AdvanceSearch";
import Item from "./pages/Item";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/search",
      element: <AdvanceSearch />,
    },
    {
      path: "/item/:id",
      element: <App />,
      children: [
        {
          path: "/item/:id",
          element: <Item />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}
export default Router;
