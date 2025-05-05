import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-spotify-black text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page not found</h2>
        <p className="text-gray-400 mb-8">
          We couldn't find the page you were looking for. It might have been moved or deleted.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-spotify-green text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;