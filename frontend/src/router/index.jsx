import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/layout/DefaultLayout";
import MainContent from "../components/pages/MainContent";
import Track from "../components/pages/Track";
import AlbumPage from "../components/pages/AlbumPage";
import PlaylistPage from "../components/pages/PlaylistPage";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/track",
        element: <Track />, 
      },
      {
        path: "/track/:id",
        element: <Track />,
      },
      {
        path: "/album",
        element: <AlbumPage />,
      },
      {
        path: "/album/:id",
        element: <AlbumPage />,
      },
      {
        path: "/playlist",
        element: <PlaylistPage />,
      },
      {
        path: "/playlist/:id",
        element: <PlaylistPage />,
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
  }
]);
