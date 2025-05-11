import { useState, useEffect, useRef } from "react";
import {
  FiSearch,
  FiPlus,
  FiArrowUpRight,
  FiMenu,
  FiChevronsLeft,
} from "react-icons/fi";

export default function Sidebar() {
  const [showSearch, setShowSearch] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoverTitle, setHoverTitle] = useState(false);
  const searchInputRef = useRef(null);

  // Danh sách Playlist có ảnh tham chiếu theo ID
  const playlists = [
    { id: 1, name: "Liked Songs", image: "/images/liked-songs.svg" },
    { id: 2, name: "Playlist 1", image: "/images/default-track.png" },
    { id: 3, name: "Playlist 2", image: "/images/default-track.png" },
    { id: 4, name: "Playlist 3", image: "/images/default-track.png" },
    { id: 5, name: "Playlist 4", image: "/images/default-track.png" },
    { id: 6, name: "Playlist 5", image: "/images/default-track.png" }

  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <aside
      className={`fixed top-16 left-0 ${
        isCollapsed ? "w-16" : "w-64"
      } h-[calc(100vh-64px)] bg-[#121212] rounded-sm text-white flex flex-col z-20 px-4 py-3 overflow-y-auto transition-all duration-300`}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between mb-4"
        onMouseEnter={() => setHoverTitle(true)}
        onMouseLeave={() => setHoverTitle(false)}
      >
        {/* Left side */}
        <div className="flex items-center gap-2">
          {hoverTitle && !isCollapsed && (
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-1 rounded-full hover:bg-neutral-700"
              title="Collapse"
            >
              <FiChevronsLeft />
            </button>
          )}

          {!isCollapsed && (
            <h2 className="text-bold text-sm font-bold">Your Library</h2>
          )}

          {isCollapsed && (
            <button
              onClick={() => setIsCollapsed(false)}
              className="p-1 rounded-full hover:bg-neutral-700"
              title="Expand"
            >
              <FiChevronsLeft className="rotate-180" />
            </button>
          )}
        </div>

        {/* Right side */}
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-sm font-bold bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1.5 rounded-full">
              <FiPlus className="text-base" />
              <span>Create</span>
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      {!isCollapsed && (
        <div className="flex gap-2 mb-4">
          <button className="px-3 py-1 bg-neutral-800 text-sm rounded-full font-semibold">
            Playlists
          </button>
          <button className="px-3 py-1 bg-neutral-800 text-sm rounded-full font-semibold">
            Albums
          </button>
        </div>
      )}

      {/* Search + Sort */}
      <div className="flex items-center justify-between mb-4 text-white/70">
        <div className="relative">
          <button
            className="p-2 hover:bg-neutral-800 rounded-full"
            onClick={() => setShowSearch(!showSearch)}
          >
            {!showSearch && <FiSearch className="w-5 h-5 mt-1" />}
          </button>

          {showSearch && !isCollapsed && (
            <div className="flex items-center bg-neutral-700 rounded-full w-40 mt-1" ref={searchInputRef}>
              <FiSearch className="text-white ml-3" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white text-sm px-3 py-1 rounded-full w-full focus:outline-none"
              />
            </div>
          )}
        </div>

        {!isCollapsed && (
          <div className="flex items-center gap-1 hover:text-white cursor-pointer">
            <span>Recents</span>
            <FiMenu />
          </div>
        )}
      </div>

      {/* Playlist Items */}
      {!isCollapsed && (
        <div className="mb-4 space-y-2">
          {playlists.length > 0 ? (
            playlists.map((playlist) =>
              playlist.name.trim() !== "" ? (
                <button
                  key={playlist.id}
                  className="flex items-center gap-3 w-full h-15 text-base text-left px-3 py-1 bg-neutral-800  rounded font-semibold hover:bg-neutral-700"
                >
                  <img
                    src={playlist.image}
                    alt={playlist.name}
                    className="w-6 h-6 rounded object-cover"
                  />
                  {playlist.name}
                </button>
              ) : (
                <div
                  key={playlist.id}
                  className="text-neutral-500 text-sm px-3 py-1"
                >
                  No Playlist Available
                </div>
              )
            )
          ) : (
            <div className="text-neutral-500 text-sm px-3 py-1">
              No Playlist Available
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
