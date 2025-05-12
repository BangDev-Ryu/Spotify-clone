import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarPlaylists = ({ playlists, isCollapsed }) => {
  //const navigate = useNavigate();

  if (isCollapsed) return null;

  const validPlaylists = playlists.filter(p => p.name.trim() !== "");

  return (
    <div className="mb-4 space-y-2">
      {validPlaylists.length > 0 ? (
        validPlaylists.map((playlist) => (
          <button
            key={playlist.id}
            className="flex items-center gap-3 w-full h-15 text-base text-left px-3 py-1 bg-neutral-800 rounded font-semibold hover:bg-neutral-700"
           // onClick={() => navigate(`/playlist/${playlist.id}`)}
          >
            <img
              src={playlist.image}
              alt={playlist.name}
              className="w-6 h-6 rounded object-cover"
            />
            {playlist.name}
          </button>
        ))
      ) : (
        <div className="text-neutral-500 text-sm px-3 py-1">
          No Playlists Available
        </div>
      )}
    </div>
  );
};

export default SidebarPlaylists;
