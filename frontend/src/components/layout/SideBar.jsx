import {
  FiSearch,
  FiPlus,
  FiArrowUpRight,
  FiMenu,
  FiBook,
} from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-64px)] bg-black text-white flex flex-col z-20 px-4 py-3 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-bold text-sm font-bold">Your Library</h2>
        <div className="flex items-center gap-2">
         <button className="flex items-center gap-1 text-sm font-bold bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1.5 rounded-full">
          <FiPlus className="text-base" />
          <span>Create</span>
        </button>

          <button className="text-lg hover:text-white p-1 hover:bg-neutral-800 rounded-full">
            <FiArrowUpRight className = "h-6"/>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button className="px-3 py-1 bg-neutral-800 text-sm rounded-full font-semibold">Playlists</button>
        <button className="px-3 py-1 bg-neutral-800 text-sm rounded-full font-semibold">Albums</button>
      </div>

      {/* Search + Sort */}
        <div className="flex items-center justify-between mb-4 text-white/70">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-neutral-800 rounded-full">
            <FiSearch className = "w-5 h-5 mt-1"/>
          </button>
        </div>
        <div className="flex items-center gap-1 hover:text-white cursor-pointer">
          <span>Recents</span>
          <FiMenu />
        </div>
      </div>
       </aside>
  );
}
