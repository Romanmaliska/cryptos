import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Coins from "../pages/Coins";
import News from "../pages/News";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/coins",
        element: <Coins />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
