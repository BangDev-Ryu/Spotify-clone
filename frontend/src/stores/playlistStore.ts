import { create } from 'zustand';
import { Playlist } from '../types';
import { mockPlaylists } from '../mockData';

interface PlaylistState {
  playlists: Playlist[];
  getPlaylist: (id: string) => Playlist | null;
  createPlaylist: (playlist: Omit<Playlist, 'id'>) => void;
  updatePlaylist: (id: string, updates: Partial<Playlist>) => void;
  deletePlaylist: (id: string) => void;
}

export const usePlaylistStore = create<PlaylistState>((set, get) => ({
  playlists: mockPlaylists,
  
  getPlaylist: (id) => {
    return get().playlists.find(playlist => playlist.id === id) || null;
  },
  
  createPlaylist: (playlistData) => {
    const newPlaylist: Playlist = {
      ...playlistData,
      id: `playlist-${Date.now()}`
    };
    
    set(state => ({
      playlists: [...state.playlists, newPlaylist]
    }));
    
    return newPlaylist;
  },
  
  updatePlaylist: (id, updates) => {
    set(state => ({
      playlists: state.playlists.map(playlist => 
        playlist.id === id 
          ? { ...playlist, ...updates } 
          : playlist
      )
    }));
  },
  
  deletePlaylist: (id) => {
    set(state => ({
      playlists: state.playlists.filter(playlist => playlist.id !== id)
    }));
  }
}));