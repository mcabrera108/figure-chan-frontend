import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Error from "./pages/Error";
import AdvanceSearch from "./pages/AdvanceSearch";
import ItemPage from "./pages/ItemPage";

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
      element: <App />,
      children: [
        {
          path: "/search",
          element: <AdvanceSearch />,
        },
      ],
    },
    {
      path: "/item/:id",
      element: <App />,
      children: [
        {
          path: "/item/:id",
          element: <ItemPage />,
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
