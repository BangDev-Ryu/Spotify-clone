import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative flex items-center bg-neutral-700 rounded-full px-2 py-1 w-10 transition-width duration-300 ease-in-out"
         style={{ width: isActive ? "160px" : "40px" }}
         onClick={() => setIsActive(true)}
         onBlur={() => {
           if (!searchTerm) setIsActive(false);
         }}
         tabIndex={0} // để div nhận blur
    >
      <FiSearch className="text-white" />
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`bg-transparent text-white ml-2 text-sm focus:outline-none transition-opacity duration-300 ${
          isActive ? "opacity-100 w-full" : "opacity-0 w-0"
        }`}
        autoFocus={isActive}
      />
    </div>
  );
}
