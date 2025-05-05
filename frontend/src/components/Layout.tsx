import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Player from './Player';

const Layout = () => {
  return (
    <div className="h-screen bg-spotify-black text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-spotify-dark-gray to-spotify-black p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      <Player />
    </div>
  );
};

export default Layout;