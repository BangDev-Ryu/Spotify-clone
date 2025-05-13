import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ItemCard from './ItemCard';
import 'swiper/css';
import 'swiper/css/navigation';

const SongRow = ({ title, datas, type = 'track' }) => {
  const getDescription = (item) => {
    switch (type) {
      case 'track':
        return ''; // Track không có description
      case 'album':
        return `${item.release_date?.split('-')[0]} · Album`; // Thêm năm phát hành và loại
      case 'playlist':
        return item.description || 'Playlist'; // Description của playlist
      default:
        return '';
    }
  };

  return (
    <div className="px-4 py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white hover:underline cursor-pointer">
          {title}
        </h2>
        <button className="text-gray-400 hover:text-white transition-colors">
          Hiện tất cả
        </button>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={6}
        className="playlist-carousel"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 12
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 16
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 20
          }
        }}
      >
        {datas.map((data) => (
          <SwiperSlide key={data.id}>
            <ItemCard
              id={data.track_id}
              type={type}
              image={data.image}
              title={data.name}
              description={getDescription(data)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

SongRow.propTypes = {
  title: PropTypes.string.isRequired,
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
      release_date: PropTypes.string, // For albums
    })
  ).isRequired,
  type: PropTypes.oneOf(['track', 'album', 'playlist'])
};

export default SongRow;