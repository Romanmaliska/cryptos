import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "layouts/Rootlayout";
import Home from "pages/Home";
import Coins from "pages/Coins";
import Coin from "pages/Coin";
import ProtectedRoute from "router/ProtectedRoute";
import Profile from "pages/Profile";
import Wallet from "pages/Wallet";

const NotFound = lazy(() => import("pages/NotFound"));

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
      {
        path: "/wallet",
        element: (
          <ProtectedRoute>
            <Wallet />
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
