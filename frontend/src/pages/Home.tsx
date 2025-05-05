import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { usePlayerStore } from '../stores/playerStore';
import TrackCard from '../components/TrackCard';
import PlaylistCard from '../components/PlaylistCard';
import { useAuthStore } from '../stores/authStore';

const Home = () => {
  const { fetchRecentlyPlayed, fetchFeaturedPlaylists, recentlyPlayed, featuredPlaylists } = usePlayerStore();
  const { user } = useAuthStore();
  
  useEffect(() => {
    fetchRecentlyPlayed();
    fetchFeaturedPlaylists();
  }, [fetchRecentlyPlayed, fetchFeaturedPlaylists]);
  
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="pb-20">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{greeting()}{user ? `, ${user.name}` : ''}</h1>
      </header>
      
      {recentlyPlayed.length > 0 && (
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Recently played</h2>
            <button className="text-sm text-gray-400 hover:text-white flex items-center">
              See all <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {recentlyPlayed.slice(0, 6).map(track => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </section>
      )}
      
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Made for you</h2>
          <button className="text-sm text-gray-400 hover:text-white flex items-center">
            See all <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {featuredPlaylists.slice(0, 6).map(playlist => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>
      
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Top charts</h2>
          <button className="text-sm text-gray-400 hover:text-white flex items-center">
            See all <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {featuredPlaylists.slice(6, 12).map(playlist => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;