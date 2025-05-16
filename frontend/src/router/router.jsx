import { createBrowserRouter } from "react-router-dom";

import MainPage from "../components/pages/MainPage";
import MainContent from "../components/layout/MainContent";
import TrackContent from "../components/layout/TrackContent";
import AlbumContent from "../components/layout/AlbumContent";
import PlaylistContent from "../components/layout/PlaylistContent";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Premium from "../components/pages/Premium";
import Payment from "../components/pages/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/user/:id",
        element: <MainContent />,
      },
      {
        path: "/track/:id",
        element: <TrackContent />,
      },
      {
        path: "/album/:id",
        element: <AlbumContent />,
      },
      {
        path: "/playlist/:id",
        element: <PlaylistContent />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/premium",
    element: <Premium />
  },
  {
    path: "/payment",
    element: <Payment />
  }
]);
