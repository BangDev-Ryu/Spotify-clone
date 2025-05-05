import { Track, Playlist } from './types';

// Mock data for the frontend
export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    coverUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: 203,
    addedAt: '2023-10-15T09:00:00Z'
  },
  {
    id: '2',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    album: 'After Hours',
    coverUrl: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    duration: 215,
    addedAt: '2023-10-14T15:30:00Z'
  },
  {
    id: '3',
    title: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    album: 'F*CK LOVE 3: OVER YOU',
    coverUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: 180,
    addedAt: '2023-10-13T12:15:00Z'
  },
  {
    id: '4',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    coverUrl: 'https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    duration: 231,
    addedAt: '2023-10-12T18:45:00Z'
  },
  {
    id: '5',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    coverUrl: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    duration: 178,
    addedAt: '2023-10-11T21:30:00Z'
  },
  {
    id: '6',
    title: 'Peaches',
    artist: 'Justin Bieber ft. Daniel Caesar, Giveon',
    album: 'Justice',
    coverUrl: 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    duration: 198,
    addedAt: '2023-10-10T14:20:00Z'
  },
  {
    id: '7',
    title: 'Montero (Call Me By Your Name)',
    artist: 'Lil Nas X',
    album: 'Montero',
    coverUrl: 'https://images.pexels.com/photos/1816714/pexels-photo-1816714.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    duration: 137,
    addedAt: '2023-10-09T11:10:00Z'
  },
  {
    id: '8',
    title: 'INDUSTRY BABY',
    artist: 'Lil Nas X ft. Jack Harlow',
    album: 'Montero',
    coverUrl: 'https://images.pexels.com/photos/3739385/pexels-photo-3739385.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    duration: 212,
    addedAt: '2023-10-08T09:05:00Z'
  },
  {
    id: '9',
    title: 'Bad Habits',
    artist: 'Ed Sheeran',
    album: 'Equals',
    coverUrl: 'https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    duration: 184,
    addedAt: '2023-10-07T16:50:00Z'
  },
  {
    id: '10',
    title: 'STAY',
    artist: 'The Kid LAROI & Justin Bieber',
    album: 'F*CK LOVE 3+: OVER YOU',
    coverUrl: 'https://images.pexels.com/photos/2618804/pexels-photo-2618804.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    duration: 221,
    addedAt: '2023-10-06T13:40:00Z'
  },
  {
    id: '11',
    title: 'Kiss Me More',
    artist: 'Doja Cat ft. SZA',
    album: 'Planet Her',
    coverUrl: 'https://images.pexels.com/photos/1998479/pexels-photo-1998479.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    duration: 188,
    addedAt: '2023-10-05T10:30:00Z'
  },
  {
    id: '12',
    title: 'Happier Than Ever',
    artist: 'Billie Eilish',
    album: 'Happier Than Ever',
    coverUrl: 'https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg?auto=compress&cs=tinysrgb&w=600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    duration: 294,
    addedAt: '2023-10-04T08:20:00Z'
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    name: 'Today\'s Top Hits',
    description: 'The biggest hits right now.',
    coverUrl: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=600',
    creator: 'Spotify',
    tracks: mockTracks.slice(0, 4)
  },
  {
    id: '2',
    name: 'RapCaviar',
    description: 'Music from Drake, Lil Baby, and more.',
    coverUrl: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=600',
    creator: 'Spotify',
    tracks: mockTracks.slice(6, 10)
  },
  {
    id: '3',
    name: 'All Out 2010s',
    description: 'The biggest songs of the 2010s.',
    coverUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
    creator: 'Spotify',
    tracks: mockTracks.slice(2, 7)
  },
  {
    id: '4',
    name: 'Rock Classics',
    description: 'Rock legends & epic songs for the ages.',
    coverUrl: 'https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&w=600',
    creator: 'Spotify',
    tracks: mockTracks.slice(5, 10)
  },
  {
    id: '5',
    name: 'Chill Hits',
    description: 'Kick back to the best new and recent chill hits.',
    coverUrl: 'https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=600',
    creator: 'Spotify',
    tracks: mockTracks.slice(1, 5)
  },
  {
    id: '6',
    name: 'Viva Latino',
    description: 'Today\'s top Latin hits.',
    coverUrl: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=600',
    creator: 'Spotify',
    tracks: mockTracks.slice(3, 8)
  },
  {
    id: '7',
    name: 'Mega Hit Mix',
    description: 'A mega mix of your favorite hits.',
    coverUrl: 'https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=600',
    creator: 'Spotify',
    tracks: mockTracks.slice(0, 10)
  },
  {
    id: '8',
    name: 'Dance Party',
    description: 'Dance music hits for every mood.',
    coverUrl: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
    creator: 'Spotify',
    tracks: mockTracks.slice(6, 12)
  },
  {
    id: '9',
    name: 'Peaceful Piano',
    description: 'Peaceful piano to help you slow down and relax.',
    coverUrl: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=600',
    creator: 'Spotify',
    tracks: mockTracks.slice(2, 6)
  },
  {
    id: '10',
    name: 'Deep Focus',
    description: 'Keep calm and focus with this music.',
    coverUrl: 'https://images.pexels.com/photos/1336657/pexels-photo-1336657.jpeg?auto=compress&cs=tinysrgb&w=600',
    creator: 'Spotify',
    tracks: mockTracks.slice(4, 9)
  },
  {
    id: '11',
    name: 'Instrumental Study',
    description: 'Focus with soft study music in the background.',
    coverUrl: 'https://images.pexels.com/photos/4153140/pexels-photo-4153140.jpeg?auto=compress&cs=tinysrgb&w=600',
    creator: 'Spotify',
    tracks: mockTracks.slice(1, 7)
  },
  {
    id: '12',
    name: 'Chill Lofi Study Beats',
    description: 'The perfect study beats. Find your focus.',
    coverUrl: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600',
    creator: 'Spotify',
    tracks: mockTracks.slice(5, 12)
  }
];