import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import { usePlayer } from '../../context/PlayerContext'; // import usePlayer
import Music from "/images/default-track.png";
import SongTable from '../common/SongTable';

export default function AlbumContent() {
  const { id } = useParams(); 
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const { playTrack } = usePlayer(); // lấy hàm playTrack từ context

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tracks/")
      .then((res) => res.json())
      .then((data) => setTracks(data));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/albums/")
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/artists/")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);

  const currentAlbum = albums.find((album) => album.album_id === parseInt(id));
  const filteredTracks = tracks.filter((track) => track.album === parseInt(id));
  const currentArtist = artists.find((artist) => artist.artist_id === currentAlbum?.artist);

  const enrichedTracks = filteredTracks.map((track) => ({
    ...track,
    artist_name: currentArtist?.name || "Nghệ sĩ chưa rõ",
  }));

  // Hàm play track khi bấm nút play trong SongTable
  const handlePlayTrack = async (trackId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/tracks/${trackId}`);
      const track = response.data;
      playTrack({
        id: track.track_id,
        title: track.name,
        artist: currentArtist?.name || "Nghệ sĩ chưa rõ",
        image: track.image,
        audio: track.path,
      });
    } catch (err) {
      console.error("Lỗi khi play track:", err);
    }
  };

  // Hàm chơi nhạc bài đầu tiên trong album (nút play album)
  const handlePlayAlbum = () => {
    if (filteredTracks.length > 0) {
      handlePlayTrack(filteredTracks[0].track_id);
    }
  };

  return (
    <div className="ml-[270px] pb-48 mt-[64px] w-[calc(100vw-290px)] rounded-2xl overflow-hidden">
      <div className="h-[300px] w-full bg-[#12306FFF] flex items-center">
        <div className="ml-8 flex items-end">
          <img
            src={currentAlbum?.image || "/images/default-track.png"}
            className="w-[232px] h-[232px] rounded-lg shadow-2xl"
            alt="album"
          />
          <div className="ml-6 *:text-white">
            <span className="text-sm font-bold">Album</span>
            <div className="text-8xl font-[800] pb-6">
              {currentAlbum ? currentAlbum.name : "Đang tải..."}
            </div>
            <div className="flex items-center gap-2 pb-4">
              <img src={Music} alt="avatar" className="w-4 h-4 rounded-full" />
              <div className="font-semibold">
                {currentArtist ? currentArtist.name : "Nghệ sĩ"}
              </div>
              <div className="font-semibold relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                {currentAlbum ? currentAlbum.release_date : "Ngày phát hành"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 bg-gradient-to-t from-black to-[#0a1a3d] px-6 min-h-screen">
        <div className="flex items-center justify-between mb-2 ml-4">
          <button
            className="bg-[#1ed760] w-[60px] h-[60px] hover:scale-105 transition-all rounded-full"
            onClick={handlePlayAlbum}
            aria-label="Play album"
          >
            <span className="w-full flex justify-center">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                className="w-[30px]"
                viewBox="0 0 24 24"
              >
                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
              </svg>
            </span>
          </button>
        </div>
        <SongTable tracks={enrichedTracks} onPlayTrack={handlePlayTrack} />
      </div>
    </div>
  );
}
