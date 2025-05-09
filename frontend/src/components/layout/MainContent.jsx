import SongRow from "../common/SongRow";

const playlist1 = [
  {
    id: '1',
    image: '/images/default-track.png',
    title: 'New Music Friday',
    description: 'The hottest new releases this week'
  },
  {
    id: '2',
    image: '/images/default-track.png',
    title: 'Top Hits Vietnam',
    description: 'The most popular songs in Vietnam'
  },
  {
    id: '3',
    image: '/images/default-track.png',
    title: 'Chill Vibes',
    description: 'Relaxing music for your downtime'
  },
  {
    id: '4',
    image: '/images/default-track.png',
    title: 'Workout Mix',
    description: 'High-energy tracks to keep you motivated'
  },
  {
    id: '5',
    image: '/images/default-track.png',
    title: 'Throwback Hits',
    description: 'Nostalgic songs from the past'
  },
  {
    id: '6',
    image: '/images/default-track.png',
    title: 'Indie Discoveries',
    description: 'Hidden gems from the indie music scene'
  },
  {
    id: '7',
    image: '/images/default-track.png',
    title: 'Pop Perfection',
    description: 'The best pop songs of the moment'
  },
  {
    id: '8',
    image: '/images/default-track.png',
    title: 'Rock Classics',
    description: 'Timeless rock anthems'
  },
];

const playlist2 = [
  {
    id: '1',
    image: '/images/default-track.png',
    title: 'Chill Beats',
    description: ''
  },
  {
    id: '2',
    image: '/images/default-track.png',
    title: 'Epic Soundtracks',
    description: ''
  },
  {
    id: '3',
    image: '/images/default-track.png',
    title: 'Jazz Classics',
    description: ''
  },
];

const playlist3 = [
  {
    id: '1',
    image: '/images/default-track.png',
    title: 'Top 50 Global',
    description: ''
  },
  {
    id: '2',
    image: '/images/default-track.png',
    title: 'Top 50 Vietnam',
    description: ''
  },
  {
    id: '3',
    image: '/images/default-track.png',
    title: 'Top 50 US-UK',
    description: ''
  },
  {
    id: '4',
    image: '/images/default-track.png',
    title: 'Top 50 K-Pop',
    description: ''
  },
  {
    id: '5',
    image: '/images/default-track.png',
    title: 'Top 50 Latin',
    description: ''
  },
  {
    id: '6',
    image: '/images/default-track.png',
    title: 'Top 50 Indie',
    description: ''
  },
  {
    id: '7',
    image: '/images/default-track.png',
    title: 'Top 50 R&B',
    description: ''
  },
  {
    id: '8',
    image: '/images/default-track.png',
    title: 'Top 50 Hip-Hop',
    description: ''
  },
];

export default function MainContent() {
  return (
    <main className="ml-68 mt-16 rounded-sm p-4 bg-[#121212] pb-20">
      <SongRow title="Đây là Giai điệu mới mỗi thứ Sáu!" playlists={playlist1} />
      <SongRow title="Phát gần đây" playlists={playlist2} />
      <SongRow title="Top 50" playlists={playlist3} />
    </main>
  );
}