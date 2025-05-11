import React, { useState } from "react";

export default function SongTable({ songs }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="w-full mx-auto mt-10 text-white font-sans">
      <table className="w-full table-auto">
        <thead className="text-left text-sm uppercase border-b border-gray-700 text-gray-300">
          <tr>
            <th className="py-2 px-3 w-10">#</th>
            <th className="py-2 px-3">Tiêu đề</th>
            <th className="py-2 px-3 text-right w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-[25px] lucide lucide-clock9-icon lucide-clock-9"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 7.5 12" />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr
              key={index}
              className="hover:bg-gray-800 transition-colors text-sm  border-gray-800"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <td className="py-2 px-3 relative w-10 h-[30px]">
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full text-center transition-opacity duration-200 ${
                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {index + 1}
                </span>

                <span
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
                </span>
              </td>
              <td className="py-2 px-3">
                <div className="flex flex-col">
                  <span className="font-medium">{song.title}</span>
                  <span className="text-xs text-gray-400">{song.artist}</span>
                </div>
              </td>
              <td className="py-2 px-3 text-right text-gray-400">
                {song.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
