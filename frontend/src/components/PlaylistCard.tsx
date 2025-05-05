import { Play, Pause } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePlayerStore } from '../stores/playerStore';
import { Playlist } from '../types';

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  const { currentPlaylist, isPlaying, playPlaylist, togglePlay } = usePlayerStore();
  const [isHovered, setIsHovered] = useState(false);
  
  const isCurrentPlaylist = currentPlaylist?.id === playlist.id;
  
  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isCurrentPlaylist) {
      togglePlay();
    } else {
      playPlaylist(playlist);
    }
  };
  
  return (
    <motion.div 
      className="card group cursor-pointer relative"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/playlist/${playlist.id}`}>
        <div className="relative mb-3">
          <img 
            src={playlist.coverUrl} 
            alt={playlist.name} 
            className="w-full aspect-square object-cover rounded-md shadow-lg"
          />
          
          {(isHovered || isCurrentPlaylist) && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute bottom-2 right-2 bg-spotify-green rounded-full p-3 text-black shadow-lg"
              onClick={handlePlayClick}
            >
              {isCurrentPlaylist && isPlaying ? (
                <Pause size={20} />
              ) : (
                <Play size={20} fill="black" />
              )}
            </motion.button>
          )}
        </div>
        
        <h3 className="text-base font-semibold truncate">{playlist.name}</h3>
        <p className="text-sm text-gray-400 truncate">By {playlist.creator}</p>
      </Link>
    </motion.div>
  );
};

export default PlaylistCard;