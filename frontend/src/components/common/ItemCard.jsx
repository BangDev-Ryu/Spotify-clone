import PropTypes from 'prop-types';

const ItemCard = ({ image, title, description }) => {
  return (
    <div className="p-3 bg-[#181818] rounded-lg hover:bg-[#282828] transition-all duration-300 cursor-pointer max-w-[200px]">
      <div className="relative group">
        <img 
          src={image} 
          alt={title}
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />
        <button
          className="absolute bottom-2 right-2 w-10 h-10 bg-[#1ed760] rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          aria-label="Play"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
          </svg>
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
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ItemCard;
