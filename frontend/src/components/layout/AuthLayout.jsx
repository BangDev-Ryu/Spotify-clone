import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SiSpotify } from "react-icons/si";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header className="px-8 py-8 border-b border-[#282828]">
        <Link to="/" className="flex items-center gap-2">
          <SiSpotify className="w-[45px] h-[45px] text-white" />
          <span className="text-2xl font-bold text-white">Spotify</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center py-8 px-4">
        <div className="w-full max-w-[450px]">
          {children}
        </div>
      </main>

    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthLayout;
