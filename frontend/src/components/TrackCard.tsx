import { Play, Pause } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePlayerStore } from '../stores/playerStore';
import { Track } from '../types';

interface TrackCardProps {
  track: Track;
}

const TrackCard = ({ track }: TrackCardProps) => {
  const { currentTrack, isPlaying, playTrack, togglePlay } = usePlayerStore();
  const [isHovered, setIsHovered] = useState(false);
  
  const isCurrentTrack = currentTrack?.id === track.id;
  
  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCurrentTrack) {
      togglePlay();
    } else {
      playTrack(track);
    }
  };
  
  return (
    <motion.div 
      className="card group cursor-pointer relative"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => playTrack(track)}
    >
      <div className="relative mb-3">
        <img 
          src={track.coverUrl} 
          alt={track.title} 
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />
        
        {(isHovered || isCurrentTrack) && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute bottom-2 right-2 bg-spotify-green rounded-full p-3 text-black shadow-lg"
            onClick={handlePlayClick}
          >
            {isCurrentTrack && isPlaying ? (
              <Pause size={20} />
            ) : (
              <Play size={20} fill="black" />
            )}
          </motion.button>
        )}
      </div>
      
      <h3 className="text-base font-semibold truncate">{track.title}</h3>
      <p className="text-sm text-gray-400 truncate">{track.artist}</p>
    </motion.div>
  );
};

export default TrackCard;