import { createBrowserRouter } from "react-router-dom";
import MainContent from "../components/pages/MainContent";
import Track from "../components/pages/Track";
import AlbumPage from "../components/pages/AlbumPage";
import PlaylistPage from "../components/pages/PlaylistPage";


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
