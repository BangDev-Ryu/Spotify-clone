import { createBrowserRouter } from "react-router-dom";
import MainContent from "../pages/MainContent";
import Track from "../pages/Track";
import AlbumPage from "../pages/AlbumPage";
import PlaylistPage from "../pages/PlaylistPage";

export const router = createBrowserRouter([
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
  },
]);
