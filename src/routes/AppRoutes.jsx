import { useRoutes } from "react-router-dom";
import Home from "../views/home";

const AppRoutes = () => {
  let routes = useRoutes([
    // Home Route (Public)
    { path: "/", element: <Home /> },
  ]);

  return routes;
};

export default AppRoutes;
