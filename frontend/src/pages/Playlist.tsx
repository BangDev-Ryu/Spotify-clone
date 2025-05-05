import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Pause, Clock, Music } from 'lucide-react';
import { usePlayerStore } from '../stores/playerStore';
import { usePlaylistStore } from '../stores/playlistStore';
import TrackRow from '../components/TrackRow';

const Playlist = () => {
  const { id } = useParams<{ id: string }>();
  const { getPlaylist } = usePlaylistStore();
  const { currentPlaylist, isPlaying, playPlaylist, togglePlay } = usePlayerStore();
  const [playlist, setPlaylist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const fetchedPlaylist = getPlaylist(id);
      setPlaylist(fetchedPlaylist);
      setIsLoading(false);
    }
  }, [id, getPlaylist]);
  
  if (isLoading) {
    return <div className="h-full flex items-center justify-center">Loading...</div>;
  }
  
  if (!playlist) {
    return <div className="h-full flex items-center justify-center">Playlist not found</div>;
  }
  
  const isCurrentPlaylist = currentPlaylist?.id === playlist.id;
  
  const handlePlayPause = () => {
    if (isCurrentPlaylist) {
      togglePlay();
    } else {
      playPlaylist(playlist);
    }
  };
  
  const totalDuration = playlist.tracks.reduce((total, track) => total + track.duration, 0);
  
  const formatTotalDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min`;
  };
  
  return (
    <div className="pb-20">
      <header className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8">
        <div className="w-48 h-48 md:w-60 md:h-60 shadow-lg">
          <img 
            src={playlist.coverUrl} 
            alt={playlist.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center md:text-left">
          <p className="text-sm uppercase font-bold">Playlist</p>
          <h1 className="text-5xl md:text-7xl font-extrabold my-3">{playlist.name}</h1>
          <div className="text-sm text-gray-300 flex flex-wrap justify-center md:justify-start gap-1">
            <span className="font-semibold">{playlist.creator}</span>
            <span>•</span>
            <span>{playlist.tracks.length} songs,</span>
            <span>{formatTotalDuration(totalDuration)}</span>
          </div>
        </div>
      </header>
      
      <section className="mt-8">
        <div className="flex items-center gap-6 mb-6">
          <button 
            onClick={handlePlayPause}
            className="bg-spotify-green rounded-full p-4 text-black hover:scale-105 transition-transform shadow-lg"
          >
            {isCurrentPlaylist && isPlaying ? <Pause size={24} /> : <Play size={24} fill="black" />}
          </button>
        </div>
        
        <div className="bg-[rgba(255,255,255,0.05)] rounded-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.1)] text-gray-400 text-sm">
                <th className="px-4 py-2 w-12">#</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2 hidden md:table-cell">Album</th>
                <th className="px-4 py-2 hidden lg:table-cell">Date added</th>
                <th className="px-4 py-2 text-right">
                  <Clock size={16} />
                </th>
              </tr>
            </thead>
            <tbody>
              {playlist.tracks.length > 0 ? (
                playlist.tracks.map((track, index) => (
                  <TrackRow 
                    key={track.id} 
                    track={track} 
                    index={index + 1} 
                    playlist={playlist}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-gray-400">
                    <div className="flex flex-col items-center">
                      <Music size={40} className="mb-2" />
                      <p>This playlist is empty</p>
                      <p className="text-sm">Add some tracks to get started</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Playlist;