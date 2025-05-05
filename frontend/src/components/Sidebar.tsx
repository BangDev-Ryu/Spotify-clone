import { NavLink } from 'react-router-dom';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';
import { usePlaylistStore } from '../stores/playlistStore';

const Sidebar = () => {
  const { playlists } = usePlaylistStore();
  
  return (
    <aside className="hidden md:flex flex-col w-64 bg-black p-4 overflow-y-auto">
      <div className="mb-8">
        <img 
          src="/spotify-logo-white.svg" 
          alt="Spotify" 
          className="h-10 mb-6" 
        />
        
        <nav className="space-y-2">
          <NavLink to="/" className={({isActive}) => 
            `sidebar-link ${isActive ? 'active' : ''}`
          }>
            <Home size={24} />
            <span className="font-medium">Home</span>
          </NavLink>
          
          <NavLink to="/search" className={({isActive}) => 
            `sidebar-link ${isActive ? 'active' : ''}`
          }>
            <Search size={24} />
            <span className="font-medium">Search</span>
          </NavLink>
          
          <NavLink to="/library" className={({isActive}) => 
            `sidebar-link ${isActive ? 'active' : ''}`
          }>
            <Library size={24} />
            <span className="font-medium">Your Library</span>
          </NavLink>
        </nav>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <button className="sidebar-link !p-2">
            <Plus size={20} />
            <span>Create Playlist</span>
          </button>
          
          <button className="sidebar-link !p-2">
            <Heart size={20} />
            <span>Liked Songs</span>
          </button>
        </div>
        
        <div className="border-t border-spotify-divider my-4"></div>
        
        <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
          {playlists.map(playlist => (
            <NavLink 
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
              className="text-gray-400 hover:text-white truncate block py-1"
            >
              {playlist.name}
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;