import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <img 
            src="/spotify-logo-white.svg" 
            alt="Spotify" 
            className="h-12 mx-auto mb-8" 
          />
          <h1 className="text-3xl font-bold">Log in to Spotify</h1>
        </div>
        
        {error && (
          <div className="bg-red-900/60 text-white p-4 rounded-md mb-6">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-[#121212] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-spotify-green"
              placeholder="Email"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-[#121212] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-spotify-green"
              placeholder="Password"
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-spotify-green text-black font-bold py-3 px-4 rounded-full hover:scale-105 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400">Don't have an account?</p>
          <Link
            to="/register"
            className="block w-full border border-gray-700 text-white font-bold py-3 px-4 rounded-full mt-4 hover:border-white transition-colors"
          >
            Sign up for Spotify
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;