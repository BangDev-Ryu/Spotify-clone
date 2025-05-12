import { useState, useEffect, useRef } from "react";
import SidebarPlaylists from "../common/SidebarPlaylists";
import {
  FiSearch,
  FiPlus,
  FiArrowUpRight,
  FiMenu,
  FiChevronsLeft,
} from "react-icons/fi";

export default function SideBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoverTitle, setHoverTitle] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const searchInputRef = useRef(null);

  const fetchPlaylists = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/playlists/");
      const data = await response.json();
      setPlaylists(data);
    } catch (error) {
      console.error("Failed to fetch playlists:", error);
    }
  };

  useEffect(() => {
    fetchPlaylists();

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
            <h2 className="text-bold text-sm font-bold">Thư viện</h2>
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

        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-sm font-bold bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1.5 rounded-full">
              <FiPlus className="text-base" />
              <span>Tạo</span>
            </button>
          </div>
        )}
      </div>

      {!isCollapsed && (
        <div className="flex gap-2 mb-4">
          <button className="px-3 py-1 bg-neutral-800 text-sm rounded-full font-semibold">
            Danh sách phát
          </button>
          <button className="px-3 py-1 bg-neutral-800 text-sm rounded-full font-semibold">
            Album
          </button>
        </div>
      )}

      <div className="flex items-center justify-between mb-4 text-white/70">
        <div className="relative">
          <button
            className="p-2 hover:bg-neutral-800 rounded-full"
            onClick={() => setShowSearch(!showSearch)}
          >
            {!showSearch && <FiSearch className="w-5 h-5 mt-1" />}
          </button>

          {showSearch && !isCollapsed && (
            <div
              className="flex items-center bg-neutral-700 rounded-full w-40 mt-1"
              ref={searchInputRef}
            >
              <FiSearch className="text-white ml-3" />
              <input
                type="text"
                placeholder="Tìm kiếm.."
                className="bg-transparent text-white text-sm px-3 py-1 rounded-full w-full focus:outline-none"
              />
            </div>
          )}
        </div>

        {!isCollapsed && (
          <div className="flex items-center gap-1 hover:text-white cursor-pointer">
            <span>Gần đây</span>
            <FiMenu />
          </div>
        )}
      </div>

      <SidebarPlaylists playlists={playlists} isCollapsed={isCollapsed} />
    </aside>
  );
}
