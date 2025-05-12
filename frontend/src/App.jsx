import DefaultLayout from './components/layout/DefaultLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContent from './components/pages/MainContent';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout>
      <MainContent />
    </DefaultLayout>
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

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
