import { createBrowserRouter } from "react-router-dom";
import Root from "layouts/Rootlayout";
import Home from "pages/Home";
import Coins from "pages/Coins";
import Coin from "pages/Coin";
import NotFound from "pages/NotFound";
import ProtectedRoute from "router/ProtectedRoute";
import Profile from "pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coins",
        element: <Coins />,
      },
      {
        path: "/coins/:uuid",
        element: <Coin />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
