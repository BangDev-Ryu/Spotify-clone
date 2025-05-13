import PropTypes from 'prop-types';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { usePlayer } from '../../context/PlayerContext'; // Import PlayerContext

const ItemCard = ({ id, image, title, description, type = 'track' }) => {
  const navigate = useNavigate();
  const { playTrack } = usePlayer(); // Add this

  const handlePlay = (e) => {
    e.stopPropagation(); // Prevent card click when clicking play button
    // TODO: Add play logic here
    if (type === 'track') {
      // Call API to get track details and play
      fetchTrackAndPlay(id);
    }
  };

  const handleCardClick = () => {
    console.log('Card clicked:', id);
    navigate(`/${type}/${id}`);
  };

  const fetchTrackAndPlay = async (trackId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/tracks/${trackId}`);
      const track = await response.json();
      playTrack({ // Use PlayerContext to play track
        id: track.track_id,
        title: track.name,
        artist: track.artist_name,
        image: track.image,
        audio: track.path
      });
    } catch (error) {
      console.error('Error fetching track:', error);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="p-3 bg-[#181818] rounded-lg hover:bg-[#282828] transition-all duration-300 cursor-pointer max-w-[200px]"
    >
      <div className="relative group">
        <img 
          src={image} 
          alt={title}
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />
        <button
          onClick={handlePlay}
          className="absolute bottom-2 right-2 w-10 h-10 bg-[#1ed760] rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          aria-label="Play"
        >
          <FaPlay className="w-4 h-4 text-black ml-1" />
        </button>
      </div>
      <h3 className="mt-3 text-sm font-semibold text-white truncate">{title}</h3>
      {description && (
        <p className="mt-1 text-xs text-gray-400 line-clamp-2">{description}</p>
      )}
    </div>
  );
};

ItemCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.oneOf(['track', 'album', 'playlist'])
};

export default ItemCard;
