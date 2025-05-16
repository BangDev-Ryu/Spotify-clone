import SongRow from "../common/SongRow";
import ItemGrid from "../common/ItemGrid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const playlist2 = [
  {
    id: "1",
    image: "/images/default-track.png",
    title: "Chill Beats",
    description: "",
  },
  {
    id: "2",
    image: "/images/default-track.png",
    title: "Epic Soundtracks",
    description: "",
  },
  {
    id: "3",
    image: "/images/default-track.png",
    title: "Jazz Classics",
    description: "",
  },
];


const dataGrid = [
  { img: "/images/default-track.png", title: "Track 1" },
  { img: "/images/default-track.png", title: "Track 2" },
  { img: "/images/default-track.png", title: "Track 3" },
  { img: "/images/default-track.png", title: "Track 4" },
  { img: "/images/default-track.png", title: "Track 5" },
  { img: "/images/default-track.png", title: "Track 6" },
  { img: "/images/default-track.png", title: "Track 7" },
  { img: "/images/default-track.png", title: "Track 8" },
];


export default function MainContent() {
  const { id } = useParams();
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [user, setUsers] = useState(null);

  useEffect(() => {
    fetchTracks();
    fetchAlbums();
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchTracks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/tracks/");
      const data = await response.json();
      setTracks(data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchAlbums = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/albums/");
      const data = await response.json();
      setAlbums(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="ml-68 mt-16 rounded-sm p-4 bg-[#121212] pb-20">
      <ItemGrid items={dataGrid} columns={4} />
      <SongRow
        title="Các bài hát thịnh hành!"
        datas={tracks}
        type="track"
      />
      <SongRow 
        title="Phát gần đây" 
        datas={playlist2} 
        type="playlist"
      />
      <SongRow 
        title="Top Album" 
        datas={albums} 
        type="album"  
      />
    </main>
  );
}
