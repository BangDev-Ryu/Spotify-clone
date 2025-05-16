import { FiHome, FiDownload } from "react-icons/fi";
import { SiSpotify } from "react-icons/si";
import { Link } from 'react-router-dom';
import Search from '../common/Search'; // Import Search component

export default function Header() {
  return (
    <header className="w-full fixed h-16 top-0 bg-black flex items-center justify-between px-4 z-10">
      <SiSpotify className="text-white w-8 h-8 ml-3" />

      <div className="ml-40 flex items-center w-[35%]">
        <button className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition mr-3">
          <FiHome className="text-white w-6 h-6" />
        </button>

        {/* Thay input cũ bằng component Search */}
        <div className="flex-grow">
          <Search />
        </div>
      </div>

      <div className="flex items-center gap-x-4 text-white">
        <div className="flex items-center gap-x-2">
          <FiDownload className="w-5 h-5" />
          <span className="text-gray-300 hover:text-white cursor-pointer font-semibold text-base">
            Cài đặt ứng dụng
          </span>
        </div>
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
    </header>
  );
}
