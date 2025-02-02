import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Error from "./pages/Error";
import AdvanceSearch from "./pages/AdvanceSearch";
import ItemPage from "./pages/ItemPage";
import LoginPage from "./pages/LoginPage";
import ConstructionPage from "./pages/ConstructionPage";
import RegisterPage from "./pages/RegisterPage";
import RulesPage from "./pages/RulesPage";
import FAQPage from "./pages/FAQPage";
import StaffPage from "./pages/StaffPage";

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
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/rules",
          element: <RulesPage />,
        },
        {
          path: "/faq",
          element: <FAQPage />,
        },
        {
          path: "/staff",
          element: <StaffPage />,
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
        {
          path: "/search/top",
          element: <ConstructionPage />,
        },
        {
          path: "/search/recommendations",
          element: <ConstructionPage />,
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
