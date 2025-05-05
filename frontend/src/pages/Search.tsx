import { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { usePlayerStore } from '../stores/playerStore';
import TrackCard from '../components/TrackCard';
import PlaylistCard from '../components/PlaylistCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState({
    tracks: [],
    playlists: [],
    artists: []
  });
  const { searchTracks, searchPlaylists } = usePlayerStore();
  
  useEffect(() => {
    if (query.trim().length > 1) {
      const results = {
        tracks: searchTracks(query),
        playlists: searchPlaylists(query),
        artists: []
      };
      setSearchResults(results);
    } else {
      setSearchResults({
        tracks: [],
        playlists: [],
        artists: []
      });
    }
  }, [query, searchTracks, searchPlaylists]);
  
  return (
    <div className="pb-20">
      <header className="sticky top-0 bg-spotify-dark-gray z-10 py-4">
        <div className="relative">
          <SearchIcon 
            size={24} 
            className="text-white absolute left-4 top-3" 
          />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white text-black py-3 pl-12 pr-4 rounded-full focus:outline-none"
          />
        </div>
      </header>
      
      {query.trim().length === 0 ? (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Browse all</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {/* Genre cards */}
            {['Pop', 'Hip-Hop', 'Rock', 'Latin', 'Indie', 'Workout', 'R&B', 'K-pop', 'Jazz', 'Electronic', 'Classical', 'Podcasts'].map((genre, index) => (
              <div 
                key={index} 
                className="rounded-lg overflow-hidden h-48 relative"
                style={{ backgroundColor: `hsl(${index * 30}, 70%, 50%)` }}
              >
                <div className="p-4 font-bold text-2xl">{genre}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8">
          {searchResults.tracks.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Songs</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {searchResults.tracks.map(track => (
                  <TrackCard key={track.id} track={track} />
                ))}
              </div>
            </section>
          )}
          
          {searchResults.playlists.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Playlists</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {searchResults.playlists.map(playlist => (
                  <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
              </div>
            </section>
          )}
          
          {searchResults.tracks.length === 0 && searchResults.playlists.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-2">No results found for "{query}"</h2>
              <p className="text-gray-400">
                Please make sure your words are spelled correctly or use fewer or different keywords.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;