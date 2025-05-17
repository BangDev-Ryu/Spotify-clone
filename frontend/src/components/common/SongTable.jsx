import React, { useState, useEffect } from 'react';
export default function SongTable({ tracks, onPlayTrack }) {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div className="w-full mx-auto mt-3 text-white font-sans">
      <table className="w-full table-auto">
        <thead>
  <tr className="text-left text-gray-400 border-b border-gray-800 text-sm">
          <th className="py-2 px-3 font-normal w-10">#</th>
          <th className="py-2 px-3 font-normal">Tiêu đề</th>
          <th className="py-2 px-3 font-normal text-right">Thời gian</th>
  </tr>
        </thead>
        <tbody> 
          {tracks.map((track, index) => (
            <tr
              key={track.track_id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="hover:bg-gray-800 transition-colors text-sm border-gray-800"
            >
              <td className="py-2 px-3 relative w-10 h-[30px]">
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full text-center transition-opacity duration-200 ${
                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {index + 1}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayTrack(track.track_id);
                  }}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full flex justify-center transition-opacity duration-200 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <svg
                    data-encore-id="icon"
                    role="img"
                    aria-hidden="true"
                    className="w-[20px] text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                  </svg>
                </button>
              </td>
              <td className="py-2 px-3">
                <div className="flex flex-col">
                  <span className="font-medium">{track.name}</span>
                  <span className="text-xs text-gray-400">{""}</span>
                </div>
              </td>
              <td className="py-2 px-3 text-right text-gray-400">{track.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
