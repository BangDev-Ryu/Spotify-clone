import { createBrowserRouter } from "react-router-dom";
import MainContent from "../pages/MainContent";
import Track from "../pages/Track";

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
]);
