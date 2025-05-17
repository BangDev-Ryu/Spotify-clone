import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SidebarPlaylists({ isCollapsed, searchTerm }) {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/playlists/")
      .then((res) => res.json())
      .then((data) => setPlaylists(data))
      .catch((err) => console.error("Fetch playlists error:", err));
  }, []);

  const filtered = playlists.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isCollapsed) return null;

  return (
    <div className="mb-4 space-y-2">
      {filtered.length > 0 ? (
        filtered.map(p => (
          <div
            key={p.playlist_id}
            className="flex items-center gap-3 bg-[#121212] px-3 py-2 rounded hover:bg-neutral-700"
            onClick={() => navigate(`/playlist/${p.playlist_id}`)}
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-13 h-13 object-cover rounded"
            />
            <span className="text-white font-semibold">{p.name}</span>
          </div>
        ))
      ) : (
        <div className="text-neutral-500 text-sm px-3 py-1">Không có playlist nào</div>
      )}
    </div>
  );
}
