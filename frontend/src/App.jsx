import DefaultLayout from './components/layout/DefaultLayout';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <RouterProvider router={router} />
      </DefaultLayout>
    </div>
  );
}
