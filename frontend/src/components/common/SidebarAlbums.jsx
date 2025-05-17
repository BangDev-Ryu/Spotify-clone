import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SidebarAlbums({ isCollapsed, searchTerm }) {
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/albums/")
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => console.error("Fetch albums error:", err));
  }, []);

  const filtered = albums.filter(a =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isCollapsed) return null;

  return (
    <div className="mb-4 space-y-2">
      {filtered.length > 0 ? (
        filtered.map(album => (
          <div
            key={album.id}
            className="flex items-center gap-3 bg-[#121212] px-3 py-2 rounded hover:bg-neutral-700 cursor-pointer"
            onClick={() => navigate(`/album/${album.album_id}`)}
          >
            <img
              src={album.image}
              alt={album.name}
              className="w-13 h-13 object-cover rounded"
            />
            <span className="text-white font-semibold">{album.name}</span>
          </div>
        ))
      ) : (
        <div className="text-neutral-500 text-sm px-3 py-1">Không có album nào</div>
      )}
    </div>
  );
}
