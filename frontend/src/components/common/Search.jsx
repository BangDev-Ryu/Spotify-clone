import React, { useState, useEffect, useRef } from "react"; // thêm useRef
import { FiSearch, FiCreditCard } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { usePlayer } from "../../context/PlayerContext";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allTracks, setAllTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { playTrack } = usePlayer();
  const navigate = useNavigate();

  const containerRef = useRef(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/tracks/");
        setAllTracks(response.data);
        setFilteredTracks(response.data);
      } catch (error) {
        console.error("Error fetching all tracks:", error);
      }
    };
    fetchTracks();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredTracks(allTracks);
    } else {
      const filtered = allTracks.filter((track) =>
        (track.name || track.title || "").toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTracks(filtered);
    }
  }, [searchTerm, allTracks]);

  const handlePlay = async (e, trackId) => {
    e.stopPropagation();
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/tracks/${trackId}`);
      const track = response.data;
      playTrack({
        id: track.track_id,
        title: track.name,
        artist: track.artist_name,
        image: track.image,
        audio: track.path
      });
    } catch (err) {
      console.error("Lỗi khi play track:", err);
    }
  };

  // Thêm useEffect bắt click ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    // Gán ref cho div bao cả input + dropdown
    <div className="relative w-full" ref={containerRef}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center bg-neutral-800 rounded-full px-4 py-2 flex-grow"
      >
        <FiSearch className="text-gray-400 mr-3 w-8 h-8" />
        <input
          type="text"
          value={searchTerm}
          onFocus={() => setDropdownVisible(true)}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Bạn muốn phát nội dung gì?"
          className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
        />
      </form>

      {isDropdownVisible && filteredTracks.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-neutral-800 text-white p-2 mt-2 rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
          <ul>
            {filteredTracks.map((track) => (
              <li
                key={track.track_id}
                className="py-2 px-3 rounded cursor-pointer hover:bg-neutral-500 flex items-center gap-3 relative group"
                onClick={() => navigate(`/track/${track.track_id}`)}
              >
                <div className="relative w-12 h-12 shrink-0">
                  <img
                    src={track.image || track.thumbnail || "/default.png"}
                    alt={track.name}
                    className="w-full h-full rounded object-cover shadow-md"
                  />
                  <button
                    onClick={(e) => handlePlay(e, track.track_id)}
                    className="absolute bottom-1 right-1 w-8 h-8 bg-[#1ed760] rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <FaPlay className="w-3 h-3 text-black ml-[1px]" />
                  </button>
                </div>

                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-semibold truncate">
                    {track.name || track.title || "Không rõ tên"}
                  </span>
                  {track.artist_name && (
                    <span className="text-xs text-gray-400 truncate">{track.artist_name}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
