import { useState } from 'react';
import { Plus, Clock, Music, Grid, List } from 'lucide-react';
import { usePlaylistStore } from '../stores/playlistStore';
import PlaylistCard from '../components/PlaylistCard';

const Library = () => {
  const { playlists, createPlaylist } = usePlaylistStore();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<'all' | 'playlists' | 'artists' | 'albums'>('all');
  
  const handleCreatePlaylist = () => {
    createPlaylist({
      name: `My Playlist #${playlists.length + 1}`,
      description: 'A new playlist',
      coverUrl: 'https://source.unsplash.com/random/300x300?abstract',
      creator: 'You',
      tracks: []
    });
  };
  
  const filteredPlaylists = playlists;
  
  return (
    <div className="pb-20">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold">Your Library</h1>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-full ${viewMode === 'grid' ? 'bg-spotify-light-gray' : 'hover:bg-spotify-light-gray/50'}`}
          >
            <Grid size={20} />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-full ${viewMode === 'list' ? 'bg-spotify-light-gray' : 'hover:bg-spotify-light-gray/50'}`}
          >
            <List size={20} />
          </button>
          <button 
            onClick={handleCreatePlaylist}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
          >
            <Plus size={20} />
          </button>
        </div>
      </header>
      
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button 
          onClick={() => setFilter('all')}
          className={`px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap ${filter === 'all' ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('playlists')}
          className={`px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap ${filter === 'playlists' ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}
        >
          Playlists
        </button>
        <button 
          onClick={() => setFilter('artists')}
          className={`px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap ${filter === 'artists' ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}
        >
          Artists
        </button>
        <button 
          onClick={() => setFilter('albums')}
          className={`px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap ${filter === 'albums' ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}
        >
          Albums
        </button>
      </div>
      
      {filteredPlaylists.length > 0 ? (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredPlaylists.map(playlist => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        ) : (
          <div className="bg-[rgba(255,255,255,0.05)] rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[rgba(255,255,255,0.1)] text-gray-400 text-sm">
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2 hidden md:table-cell">Created by</th>
                  <th className="px-4 py-2 hidden lg:table-cell">Date added</th>
                  <th className="px-4 py-2 text-right">
                    <Clock size={16} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPlaylists.map(playlist => (
                  <tr 
                    key={playlist.id}
                    className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <img 
                          src={playlist.coverUrl} 
                          alt={playlist.name} 
                          className="w-10 h-10 mr-3"
                        />
                        <div>
                          <p className="font-medium">{playlist.name}</p>
                          <p className="text-sm text-gray-400">{playlist.tracks.length} songs</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell text-gray-400">
                      {playlist.creator}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell text-gray-400">
                      3 days ago
                    </td>
                    <td className="px-4 py-3 text-right text-gray-400">
                      {playlist.tracks.reduce((total, track) => {
                        const mins = Math.floor(track.duration / 60);
                        return total + mins;
                      }, 0)} min
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <div className="text-center py-20">
          <div className="flex flex-col items-center">
            <Music size={48} className="mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold mb-2">Your library is empty</h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              Create your first playlist to get started with your music collection.
            </p>
            <button 
              onClick={handleCreatePlaylist}
              className="btn-primary"
            >
              Create Playlist
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;