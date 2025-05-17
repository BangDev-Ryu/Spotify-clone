import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { usePlayer } from "../../context/PlayerContext";
import Music from "/images/default-track.png";
import SongTable from "../common/SongTable";

export default function PlaylistContent() {
  const { id } = useParams();
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const { playTrack } = usePlayer();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/playlists/")
      .then((res) => res.json())
      .then((data) => setPlaylists(data))
      .catch((err) => console.error("Fetch playlists error:", err));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tracks/")
      .then((res) => res.json())
      .then((data) => setTracks(data))
      .catch((err) => console.error("Fetch tracks error:", err));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/playlisttracks/")
      .then((res) => res.json())
      .then((data) => setPlaylistTracks(data))
      .catch((err) => console.error("Fetch playlist_tracks error:", err));
  }, []);

  const currentPlaylist = playlists.find(
    (playlist) => playlist.playlist_id === parseInt(id)
  );

  const relatedTrackIds = playlistTracks
    .filter((pt) => pt.playlist === parseInt(id))
    .map((pt) => pt.track);

  const filteredTracks = tracks.filter((track) =>
    relatedTrackIds.includes(track.track_id)
  );

  const enrichedTracks = filteredTracks.map((track) => ({
    ...track,
    artist_name: "", // Không có nghệ sĩ
  }));

  const totalTracksInPlaylist = playlistTracks.filter(
    (pt) => pt.playlist === parseInt(id)
  ).length;

  const handlePlayTrack = async (trackId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/tracks/${trackId}`
      );
      const track = response.data;
      playTrack({
        id: track.track_id,
        title: track.name,
        artist: "", // Không có nghệ sĩ
        image: track.image,
        audio: track.path,
      });
    } catch (err) {
      console.error("Lỗi khi play track:", err);
    }
  };

  const handlePlayPlaylist = () => {
    if (filteredTracks.length > 0) {
      handlePlayTrack(filteredTracks[0].track_id);
    }
  };

  return (
    <div className="ml-[270px] pb-48 mt-[64px] w-[calc(100vw-290px)] rounded-2xl overflow-hidden">
      <div className="h-[300px] w-full bg-[#163B35FF] flex items-center">
        <div className="ml-8 flex items-end">
          <img
            src={currentPlaylist?.image || Music}
            className="w-[232px] h-[232px] rounded-lg shadow-2xl"
            alt={currentPlaylist?.name || "Playlist"}
          />
          <div className="ml-6 *:text-white">
            <span className="text-sm font-bold">Playlist</span>
            <h1 className="text-8xl font-[800] pb-6">
              {currentPlaylist ? currentPlaylist.name : "Đang tải..."}
            </h1>
            <div className="flex items-center gap-2">
              <img src={Music} alt="avatar" className="w-4 h-4 rounded-full" />
              <ul className="flex gap-1 text-sm">
                <li className="font-semibold relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                  {currentPlaylist?.description || "Miêu tả"}
                </li>
                <li className="font-semibold relative pl-3 text-gray-400 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                  {totalTracksInPlaylist} bài hát
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 bg-gradient-to-t from-black to-[#0f2925] px-6 min-h-screen">
        <div className="flex items-center justify-between mb-2 ml-4">
          <button
            className="bg-[#1ed760] w-[60px] h-[60px] hover:scale-105  transition-all rounded-full"
            onClick={handlePlayPlaylist}
            aria-label="Play playlist"
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
