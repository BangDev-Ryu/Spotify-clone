import React from "react";

const Item = ({ img = "/images/default-track.png", title = "This is title" }) => {
  return (
    <div className="relative flex items-center cursor-pointer bg-[#181818] rounded-lg overflow-hidden hover:bg-[#282828] group p-2">
      <div className="w-[3.2rem] h-[3.2rem] mr-3">
        <img
          src={img}
          alt="Track Image"
          className="w-full h-full rounded-lg"
        />
      </div>
      <h1 className="text-white text-base font-bold truncate flex-grow">{title}</h1>
      
      {/* Nút Play sẽ xuất hiện khi hover vào Item */}
      <button className="absolute top-1/2 right-3 w-10 h-10 bg-[#1ed760] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center shadow-lg -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Item;
