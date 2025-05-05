import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuthStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(name, email, password);
      navigate('/');
    } catch (err) {
      setError('Registration failed. Please try again.');
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
          <h1 className="text-3xl font-bold">Sign up for Spotify</h1>
        </div>
        
        {error && (
          <div className="bg-red-900/60 text-white p-4 rounded-md mb-6">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 bg-[#121212] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-spotify-green"
              placeholder="Name"
            />
          </div>
          
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
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 bg-[#121212] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-spotify-green"
              placeholder="Confirm Password"
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-spotify-green text-black font-bold py-3 px-4 rounded-full hover:scale-105 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing up...' : 'Sign Up'}
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400">Already have an account?</p>
          <Link
            to="/login"
            className="block w-full border border-gray-700 text-white font-bold py-3 px-4 rounded-full mt-4 hover:border-white transition-colors"
          >
            Log in to Spotify
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;