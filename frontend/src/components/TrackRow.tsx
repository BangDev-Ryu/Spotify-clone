import { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { usePlayerStore } from '../stores/playerStore';
import { Track, Playlist } from '../types';

interface TrackRowProps {
  track: Track;
  index: number;
  playlist: Playlist;
}

const TrackRow = ({ track, index, playlist }: TrackRowProps) => {
  const { currentTrack, isPlaying, playTrack, togglePlay } = usePlayerStore();
  const [isHovered, setIsHovered] = useState(false);
  
  const isCurrentTrack = currentTrack?.id === track.id;
  
  const handlePlayClick = () => {
    if (isCurrentTrack) {
      togglePlay();
    } else {
      playTrack(track, playlist);
    }
  };
  
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };
  
  return (
    <tr 
      className={`border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] ${isCurrentTrack ? 'bg-[rgba(255,255,255,0.1)]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlayClick}
    >
      <td className="px-4 py-3 w-12">
        {(isHovered || isCurrentTrack) ? (
          <button className="w-5 h-5 flex items-center justify-center">
            {isCurrentTrack && isPlaying ? (
              <Pause size={16} className="text-white" />
            ) : (
              <Play size={16} className="text-white" />
            )}
          </button>
        ) : (
          <span className={`text-gray-400 ${isCurrentTrack ? 'text-spotify-green' : ''}`}>
            {index}
          </span>
        )}
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center">
          <img 
            src={track.coverUrl} 
            alt={track.title} 
            className="w-10 h-10 mr-3"
          />
          <div>
            <p className={`font-medium ${isCurrentTrack ? 'text-spotify-green' : ''}`}>
              {track.title}
            </p>
            <p className="text-sm text-gray-400">{track.artist}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 hidden md:table-cell text-gray-400">
        {track.album}
      </td>
      <td className="px-4 py-3 hidden lg:table-cell text-gray-400">
        {formatDate(track.addedAt)}
      </td>
      <td className="px-4 py-3 text-right text-gray-400">
        {formatDuration(track.duration)}
      </td>
    </tr>
  );
};

export default TrackRow;