import { useState, useEffect } from 'react';
import { FiHome, FiDownload, FiBell, FiLogOut } from "react-icons/fi";
import { SiSpotify } from "react-icons/si";
import Search from '../common/Search'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <header className="w-full fixed h-16 top-0 bg-black flex items-center justify-between px-4 z-10">
      <SiSpotify className="text-white w-8 h-8 ml-3" />

      <div className="ml-40 flex items-center w-[35%]">
        <button 
          onClick={() => navigate("/")}
          className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition mr-3"
        >
          <FiHome className="text-white w-6 h-6" />
        </button>
        <div className="flex-grow">
          <Search />
        </div>
      </div>

      {currentUser ? (
        <div className="flex items-center gap-x-6 text-white">
          {currentUser.user_type !== 'premium' ? (
            <button 
              className="bg-white text-black text-sm font-bold px-4 py-1 rounded-full hover:opacity-90 transition"
              onClick={() => navigate("/premium")}
            >
              Đăng ký Premium
            </button>
          )
          : (
            <div></div>
          )}
          <div className="flex items-center gap-x-1 text-sm text-gray-300 hover:text-white cursor-pointer font-semibold">
            <FiDownload className="w-4 h-4" />
            Tải xuống
          </div>
          <FiBell className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
          <div className="flex items-center gap-2">
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-white font-medium">{currentUser.name}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="text-gray-300 hover:text-white"
          >
            <FiLogOut className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-x-4 text-white">
          <a href="https://download.scdn.co/SpotifySetup.exe">
            <div className="flex items-center gap-x-2">
              <FiDownload className="w-5 h-5" />
              <span className="text-gray-300 hover:text-white cursor-pointer font-semibold text-base">
                Cài đặt ứng dụng
              </span>
            </div>
          </a>
          <div className="h-8 w-[1px] bg-white/10"></div>
          <Link to="/register">
            <button className="text-gray-300 hover:text-white hover:scale-105 font-bold text-base">
              Đăng ký
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-white hover:scale-105 text-black text-base font-bold px-8 py-3 rounded-full">
              Đăng nhập
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
