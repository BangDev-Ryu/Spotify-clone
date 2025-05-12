import React from "react";
import Music from "/images/default-track.png";
import SongRow from "../common/SongRow";

const mockAlbums = [
  {
    id: "1",
    image: "/images/default-track.png",
    title: "Bảo Tàng Của Nuối Tiếc",
    description: "2024 · Album",
  },
  {
    id: "2",
    image: "/images/default-track.png",
    title: "Một Vạn Năm",
    description: "2022 · Album",
  },
  {
    id: "3",
    image: "/images/default-track.png",
    title: "Vì Anh Đâu Có Biết",
    description: "2022 · Đĩa đơn",
  },
  {
    id: "4",
    image: "/images/default-track.png",
    title: "bình yên",
    description: "2024 · Đĩa đơn",
  },
  {
    id: "5",
    image: "/images/default-track.png",
    title: "Lạ Lùng",
    description: "2016 · Đĩa đơn",
  },
  {
    id: "6",
    image: "/images/default-track.png",
    title: "Những Lời Hứa Bỏ Quên",
    description: "2023 · Đĩa đơn",
  },
  {
    id: "7",
    image: "/images/default-track.png",
    title: "Đông Kiếm Em",
    description: "2015 · Đĩa đơn",
  },
  {
    id: "8",
    image: "/images/default-track.png",
    title: "Phút Ban Đầu",
    description: "2013 · Đĩa đơn",
  },
];

const mockAlbums2 = [
  {
    id: "9",
    image: "/images/default-track.png",
    title: "Bước Qua Nhau",
    description: "2021 · Đĩa đơn",
  },
  {
    id: "10",
    image: "/images/default-track.png",
    title: "Lời Yêu Em",
    description: "2013 · Đĩa đơn",
  },
  {
    id: "11",
    image: "/images/default-track.png",
    title: "Vũ Trụ Song Song",
    description: "2019 · Album",
  },
];

export default function Track() {
  return (
    <div className="ml-[270px] pb-48 mt-[64px] w-[calc(100vw-290px)] rounded-2xl overflow-hidden">
      <div className="h-[300px] w-full bg-[#3B3434FF] flex items-center">
        <div className="ml-8 flex items-end">
          <img
            src={Music}
            className="w-[232px] h-[232px] rounded-lg shadow-2xl"
            alt="123"
          />
          <div className="ml-6 *:text-white">
            <span className="text-sm font-bold">Bài hát</span>
            <h1 className="text-8xl font-[800] pb-6">bình yên</h1>
            <div className="flex items-center gap-2">
              <img src={Music} alt="avatar" className="w-4 h-4 rounded-full" />
              <span className="font-semibold">Vũ.</span>
              <ul className="flex gap-1 text-sm">
                <li className="font-semibold relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                  Bảo Tàng Của Nối Tiếc
                </li>
                <li className="font-semibold relative pl-3 text-gray-400 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                  2024
                </li>
                <li className="font-semibold relative pl-3 text-gray-400 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                  3:15
                </li>
                <li className="font-semibold relative pl-3 text-gray-400 before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                  32.504.973
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 bg-gradient-to-t from-black to-[#252121] px-6">
        <SongRow
          title="Các bản phát hành thịnh hành của Vũ."
          playlists={mockAlbums}
        />
        <SongRow title="Các album nổi tiếng của Vũ." playlists={mockAlbums2} />
        <SongRow title="Các đĩa đơn và EP thịnh hành của Vũ." playlists={mockAlbums} />
        <SongRow title="Bản phát hành đề xuất." playlists={mockAlbums} />
      </div>
    </div>
  );
}
