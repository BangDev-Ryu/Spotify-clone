import { createContext, useContext, useState } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState({
    id: null,
    title: '',
    artist: '',
    image: '/images/default-track.png',
    audio: ''
  });

  const playTrack = (track) => {
    setCurrentTrack(track);
  };

  return (
    <PlayerContext.Provider value={{ currentTrack, playTrack }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);