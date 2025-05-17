import { useState, useEffect, useRef } from "react";
import SidebarPlaylists from "../common/SidebarPlaylists";
import SidebarAlbums from "../common/SidebarAlbums";
import { FiSearch, FiPlus, FiMenu, FiChevronsLeft } from "react-icons/fi";

export default function SideBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoverTitle, setHoverTitle] = useState(false);
  const [selectedTab, setSelectedTab] = useState("playlists");
  const [searchTerm, setSearchTerm] = useState("");

  const searchInputRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target)
    ) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <aside
      className={`fixed top-16 left-0 ${isCollapsed ? "w-16" : "w-64"} h-[calc(100vh-64px)] bg-[#121212] text-white flex flex-col z-20 px-4 py-3 overflow-y-auto transition-all duration-300`}
    >
      {/* --- HEADER: Title + Create + Collapse --- */}
     <div
  className="flex items-center justify-between mb-4"
  onMouseEnter={() => setHoverTitle(true)}
  onMouseLeave={() => setHoverTitle(false)}
>
  <div className="flex items-center gap-2">
    {hoverTitle && !isCollapsed && (
      <button
        onClick={() => setIsCollapsed(true)}
        className="p-1 rounded-full hover:bg-neutral-700"
        title="Thu gọn"
      >
        <FiChevronsLeft />
      </button>
    )}

    {!isCollapsed && <h2 className="text-white text-lg font-bold">Thư viện</h2>}

    {isCollapsed && (
      <button
        onClick={() => setIsCollapsed(false)}
        className="p-1 rounded-full hover:bg-neutral-700"
        title="Mở rộng"
      >
        <FiChevronsLeft className="rotate-180" />
      </button>
    )}
  </div>

  {!isCollapsed && (
    <button className="p-1 rounded-full bg-neutral-700 hover:bg-neutral-500" title="Tạo mới">
      <FiPlus />
    </button>
  )}
</div>

      {/* --- TABS: Playlists / Albums --- */}
      {!isCollapsed && (
        <div className="flex gap-2 mb-4">
          <button
            className={`px-3 py-1 text-sm rounded-full font-semibold ${
              selectedTab === "playlists"
                ? "bg-white text-black"
                : "bg-neutral-800 text-white"
            }`}
            onClick={() => setSelectedTab("playlists")}
          >
            Danh sách phát
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-full font-semibold ${
              selectedTab === "albums"
                ? "bg-white text-black"
                : "bg-neutral-800 text-white"
            }`}
            onClick={() => setSelectedTab("albums")}
          >
            Album
          </button>
        </div>
      )}

      {/* --- SEARCH --- */}
      <div className="mb-4">
  <div
    className="relative flex items-center bg-[#121212] hover:bg-neutral-600 rounded-full px-2 py-1 w-10 transition-all duration-300 ease-in-out cursor-text"
    style={{ width: showSearch ? "160px" : "40px" }}
    onClick={() => setShowSearch(true)}
    tabIndex={0}
    onBlur={() => {
      if (!searchTerm) setShowSearch(false);
    }}
  >
    <FiSearch className="text-white" />
    <input
      type="text"
      placeholder="Tìm kiếm..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className={`bg-transparent text-white ml-2 text-sm focus:outline-none transition-opacity duration-300 ${
        showSearch ? "opacity-100 w-full" : "opacity-0 w-0"
      }`}
      autoFocus={showSearch}
    />
  </div>
</div>

      {/* --- NỘI DUNG THEO TAB --- */}
      {selectedTab === "playlists" && (
        <SidebarPlaylists isCollapsed={isCollapsed} searchTerm={searchTerm} />
      )}
      {selectedTab === "albums" && (
        <SidebarAlbums isCollapsed={isCollapsed} searchTerm={searchTerm} />
      )}
    </aside>
  );
}
