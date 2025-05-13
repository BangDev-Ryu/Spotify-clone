import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Music from "/images/default-track.png";
import SongRow from "../common/SongRow";
import { usePlayer } from "../../context/PlayerContext";

export default function TrackContent() {
  const { id } = useParams(); // Lấy id từ URL params
  const [track, setTrack] = useState(null);
  const [relatedAlbums, setRelatedAlbums] = useState([]);
  const { playTrack } = usePlayer();

  // Fetch track data khi component mount hoặc id thay đổi
  useEffect(() => {
    const fetchTrackData = async () => {
      try {
        // Fetch track details
        const trackResponse = await fetch(`http://127.0.0.1:8000/api/tracks/${id}`);
        const trackData = await trackResponse.json();
        setTrack(trackData);

        // Fetch related albums (ví dụ: albums cùng artist)
        const albumsResponse = await fetch(`http://127.0.0.1:8000/api/albums/`);
        const albumsData = await albumsResponse.json();
        setRelatedAlbums(albumsData);
      } catch (error) {
        console.error('Error fetching track data:', error);
      }
    };

    if (id) {
      fetchTrackData();
    }
  }, [id]);

  const handlePlay = () => {
    if (track) {
      playTrack({
        id: track.track_id,
        title: track.name,
        artist: track.artist_name,
        image: track.image,
        audio: track.path
      });
    }
  };

  if (!track) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="ml-[270px] pb-48 mt-[64px] w-[calc(100vw-290px)] rounded-2xl overflow-hidden">
      <div className="h-[300px] w-full bg-[#3B3434FF] flex items-center">
        <div className="ml-8 flex items-end">
          <img
            src={track.image || Music}
            className="w-[232px] h-[232px] rounded-lg shadow-2xl"
            alt={track.name}
          />
          <div className="ml-6 *:text-white">
            <span className="text-sm font-bold">Bài hát</span>
            <h1 className="text-8xl font-[800] pb-6">{track.name}</h1>
            <div className="flex items-center gap-2">
              <img src={track.artist_image || Music} alt="artist" className="w-4 h-4 rounded-full" />
              <span className="font-semibold">{track.artist_name}</span>
              <ul className="flex gap-1 text-sm">
                <li className="font-semibold relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                  {track.album_name}
                </li>
                <li className="font-semibold relative pl-3 text-gray-400 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                  {new Date(track.release_date).getFullYear()}
                </li>
                <li className="font-semibold relative pl-3 text-gray-400 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                  {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 bg-gradient-to-t from-black to-[#252121] px-6">
        <div className="flex items-center gap-6 mb-8">
          <button 
            onClick={handlePlay}
            className="bg-[#1ed760] w-[60px] h-[60px] hover:scale-105 transition-all rounded-full flex items-center justify-center"
          >
            <span className="w-full flex justify-center">
              <svg data-encore-id="icon" role="img" aria-hidden="true" className="w-[30px]" viewBox="0 0 24 24">
                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
              </svg>
            </span>
          </button>
        </div>

        {relatedAlbums.length > 0 && (
          <>
            <SongRow
              title={`Các bản phát hành của ${track.artist_name}`}
              datas={relatedAlbums}
              type="album"
            />
            <SongRow 
              title="Album liên quan" 
              datas={relatedAlbums}
              type="album"
            />
          </>
        )}
      </div>
    </div>
  );
}
