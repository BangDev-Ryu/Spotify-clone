import { create } from 'zustand';
import { Track, Playlist } from '../types';
import { mockTracks, mockPlaylists } from '../mockData';

interface PlayerState {
  currentTrack: Track | null;
  currentPlaylist: Playlist | null;
  isPlaying: boolean;
  volume: number;
  recentlyPlayed: Track[];
  featuredPlaylists: Playlist[];
  
  playTrack: (track: Track, playlist?: Playlist) => void;
  playPlaylist: (playlist: Playlist) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setVolume: (volume: number) => void;
  fetchRecentlyPlayed: () => void;
  fetchFeaturedPlaylists: () => void;
  searchTracks: (query: string) => Track[];
  searchPlaylists: (query: string) => Playlist[];
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  currentPlaylist: null,
  isPlaying: false,
  volume: 0.8,
  recentlyPlayed: [],
  featuredPlaylists: [],
  
  playTrack: (track, playlist) => {
    set({ 
      currentTrack: track, 
      isPlaying: true,
      currentPlaylist: playlist || get().currentPlaylist
    });
    
    // Add to recently played if not already at the front
    const { recentlyPlayed } = get();
    const filteredRecent = recentlyPlayed.filter(t => t.id !== track.id);
    set({ recentlyPlayed: [track, ...filteredRecent].slice(0, 20) });
  },
  
  playPlaylist: (playlist) => {
    if (playlist.tracks.length > 0) {
      set({ 
        currentPlaylist: playlist, 
        currentTrack: playlist.tracks[0], 
        isPlaying: true 
      });
    }
  },
  
  togglePlay: () => {
    set(state => ({ isPlaying: !state.isPlaying }));
  },
  
  nextTrack: () => {
    const { currentTrack, currentPlaylist } = get();
    
    if (!currentPlaylist || !currentTrack) return;
    
    const currentIndex = currentPlaylist.tracks.findIndex(
      track => track.id === currentTrack.id
    );
    
    if (currentIndex === -1 || currentIndex === currentPlaylist.tracks.length - 1) {
      // Either not in playlist or last track, loop to first
      set({ currentTrack: currentPlaylist.tracks[0] });
    } else {
      // Play next track
      set({ currentTrack: currentPlaylist.tracks[currentIndex + 1] });
    }
  },
  
  prevTrack: () => {
    const { currentTrack, currentPlaylist } = get();
    
    if (!currentPlaylist || !currentTrack) return;
    
    const currentIndex = currentPlaylist.tracks.findIndex(
      track => track.id === currentTrack.id
    );
    
    if (currentIndex <= 0) {
      // Either not in playlist or first track, loop to last
      set({ currentTrack: currentPlaylist.tracks[currentPlaylist.tracks.length - 1] });
    } else {
      // Play previous track
      set({ currentTrack: currentPlaylist.tracks[currentIndex - 1] });
    }
  },
  
  setVolume: (volume) => {
    set({ volume });
  },
  
  fetchRecentlyPlayed: () => {
    // In a real app, this would be an API call
    setTimeout(() => {
      set({ recentlyPlayed: mockTracks });
    }, 500);
  },
  
  fetchFeaturedPlaylists: () => {
    // In a real app, this would be an API call
    setTimeout(() => {
      set({ featuredPlaylists: mockPlaylists });
    }, 500);
  },
  
  searchTracks: (query) => {
    const normalizedQuery = query.toLowerCase();
    return mockTracks.filter(track => 
      track.title.toLowerCase().includes(normalizedQuery) || 
      track.artist.toLowerCase().includes(normalizedQuery) ||
      track.album.toLowerCase().includes(normalizedQuery)
    );
  },
  
  searchPlaylists: (query) => {
    const normalizedQuery = query.toLowerCase();
    return mockPlaylists.filter(playlist => 
      playlist.name.toLowerCase().includes(normalizedQuery) || 
      playlist.description.toLowerCase().includes(normalizedQuery)
    );
  }
}));