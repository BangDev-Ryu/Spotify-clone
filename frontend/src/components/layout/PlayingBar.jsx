import { useState, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { usePlayer } from '../../context/PlayerContext';

export default function PlayingBar() {
  const { currentTrack } = usePlayer();

  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.audio.current.volume = newVolume / 100;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
    // Update the progress value CSS variable
    e.target.style.setProperty('--progress-value', `${newVolume}%`);
  };

  const handleMuteClick = () => {
    if (audioRef.current) {
      if (!isMuted) {
        audioRef.current.audio.current.volume = 0;
        setIsMuted(true);
      } else {
        audioRef.current.audio.current.volume = volume / 100;
        setIsMuted(false);
      }
    }
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      );
    } else if (volume < 50) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072" />
        </svg>
      );
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
        </svg>
      );
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-black border-t border-[#282828] px-4 flex items-center z-50">
      {/* Track Info - Left */}
      <div className="flex items-center min-w-[180px] w-[30%]">
        {currentTrack && (
          <>
            <img 
              src={currentTrack.image} 
              alt={currentTrack.title}
              className="h-14 w-14 rounded object-cover"
            />
            <div className="ml-3">
              <div className="text-sm text-white hover:underline cursor-pointer">
                {currentTrack.title}
              </div>
              <div className="text-xs text-gray-400 hover:underline cursor-pointer">
                {currentTrack.artist}
              </div>
            </div>
            <button className="ml-4 text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Player Controls - Center */}
      <div className="max-w-[50%] w-full">
        <AudioPlayer
          ref={audioRef}
          src={currentTrack?.audio || ''}
          showSkipControls={true}
          showJumpControls={false}
          layout="stacked-reverse"
          timeFormat="mm:ss"
          customProgressBarSection={[
            "CURRENT_TIME",
            "PROGRESS_BAR",
            "DURATION",
          ]}
          customControlsSection={[
            "ADDITIONAL_CONTROLS",
            "MAIN_CONTROLS",
            "VOLUME_CONTROLS",
          ]}
          customVolumeControls={[]}
          style={{
            background: 'transparent',
            boxShadow: 'none',
          }}
          customStyles={{
            track: {
              background: '#4d4d4d',
            },
            rail: {
              background: '#9f9f9f',
            },
            progressBar: {
              background: '#ffffff',
            },
            thumb: {
              background: '#ffffff',
              border: 'none',
            },
          }}
        />
      </div>

      {/* Additional Controls - Right */}
      <div className="flex items-center justify-end min-w-[180px] w-[30%] space-x-4">
        
        {/* Volume Control */}
        <div className="flex items-center space-x-2 group">
          <button 
            className="text-gray-400 hover:text-white min-w-[20px]"
            onClick={handleMuteClick}
          >
            {getVolumeIcon()}
          </button>
          <div className="w-[93px] flex items-center group-hover:w-[93px] transition-all duration-100">
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}