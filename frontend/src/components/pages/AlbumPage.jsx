import React from 'react'
import Music from "/images/default-track.png";
import SongTable from '../common/SongTable';
export default function AlbumPage() {
    const songs = [
        { title: "Chập Chờn", artist: "Dương Domic", duration: "3:12" },
        { title: "Tràn Bộ Nhớ", artist: "Dương Domic", duration: "2:52" },
        { title: "Pin Dự Phòng", artist: "Dương Domic, Lou Hoàng", duration: "3:46" },
        { title: "Mất Kết Nối", artist: "Dương Domic", duration: "3:27" },
        { title: "Mất Kết Nối", artist: "Dương Domic", duration: "3:27" },
        { title: "Mất Kết Nối", artist: "Dương Domic", duration: "3:27" },
    ];

    return (
        <div className="ml-[270px] pb-48 mt-[64px] w-[calc(100vw-290px)] rounded-2xl overflow-hidden">
            <div className="h-[300px] w-full bg-[#12306FFF] flex items-center">
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
            <div className="pt-8 bg-gradient-to-t from-black to-[#0a1a3d] px-6 min-h-screen">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-6'>
                        <button className='bg-[#1ed760] w-[60px] h-[60px] hover:scale-105  transition-all rounded-full'>
                            <span className='w-full flex justify-center'>
                                <svg data-encore-id="icon" role="img" aria-hidden="true" className="w-[30px] " viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                            </span>
                        </button>
                        <div className='w-[38px] h-[50px] rounded-xl overflow-hidden border-2 border-white '>
                            <img src={Music} alt="music" className='w-full h-full' />
                        </div>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-[35px] h-[35px] hover:scale-105 transition-all stroke-gray-300 lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-[35px] h-[35px] hover:scale-105 transition-all stroke-gray-300 lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='text-gray-300 font-semibold'>Danh sách</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-[35px] h-[35px] hover:scale-105 transition-all stroke-gray-300 lucide lucide-list-icon lucide-list"><path d="M3 12h.01" /><path d="M3 18h.01" /><path d="M3 6h.01" /><path d="M8 12h13" /><path d="M8 18h13" /><path d="M8 6h13" /></svg>
                    </div>
                </div>
                <SongTable songs={songs} />
            </div>
        </div>
    )
}
