import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, SkipBack, SkipForward, Music } from 'lucide-react';
import { playlist } from '../data'; // Import playlist berupa array

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0); // State lacak lagu ke-berapa
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Ambil data lagu yang sedang aktif berdasarkan index
  const currentTrack = playlist[currentTrackIndex];

  // Efek untuk handle Play / Pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(e => {
        console.error("Audio playback failed", e);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrackIndex]); // Trigger ulang jika lagu berubah

  // Efek untuk reset progress & load lagu baru saat index berubah
  useEffect(() => {
    setProgress(0);
    setDuration(0);
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    // OTOMATIS PUTAR LAGU BERIKUTNYA SAAT LAGU SELESAI
    const handleEnded = () => {
      if (currentTrackIndex < playlist.length - 1) {
        // Jika belum lagu terakhir, lanjut ke lagu berikutnya
        setCurrentTrackIndex((prev) => prev + 1);
      } else {
        // Jika sudah lagu terakhir, balik ke lagu pertama dan pause
        setCurrentTrackIndex(0);
        setIsPlaying(false);
        setProgress(0);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex]); // Tambahkan dependency agar event listener update ke lagu terbaru

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const m = Math.floor(timeInSeconds / 60);
    const s = Math.floor(timeInSeconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const seekPercentage = x / rect.width;
    
    audio.currentTime = seekPercentage * audio.duration;
    setProgress(seekPercentage * 100);
  };

  // Fungsi navigasi lagu
  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true); // Otomatis langsung putar lagu berikutnya
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true); // Otomatis langsung putar lagu sebelumnya
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200, delay: 0.5 }}
      className="fixed bottom-6 left-1/2 z-[60] w-[90%] max-w-[320px] md:max-w-[400px] liquid-glass-strong rounded-full p-2 pr-4 flex items-center gap-3 shadow-2xl"
    >
      {/* Menggunakan URL dinamis dari lagu yang sedang aktif */}
      <audio ref={audioRef} src={currentTrack.url} preload="metadata" />
      
      <div className="w-10 h-10 rounded-full bg-current/10 flex items-center justify-center flex-shrink-0 animate-[spin_10s_linear_infinite]" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
        <Music size={18} />
      </div>
      
      <div className="flex-grow flex flex-col justify-center overflow-hidden">
        <div className="w-full flex justify-between items-center mb-1">
          {/* Menampilkan judul lagu yang sedang aktif */}
          <p className="text-xs font-medium truncate">{currentTrack.title}</p>
          <span className="text-[10px] opacity-60">
            {audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-current/10 rounded-full overflow-hidden cursor-pointer" onClick={handleSeek}>
          <motion.div 
            className="h-full bg-current rounded-full"
            style={{ width: `${progress}%` }}
            layout
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
        {/* Tombol Previous */}
        <button onClick={handlePrev} className="hover:opacity-60 transition-opacity p-1 active:scale-90">
          <SkipBack size={16} />
        </button>
        
        {/* Tombol Play / Pause */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-8 h-8 rounded-full bg-[var(--text-color)] text-[var(--bg-color)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        >
          {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
        </button>
        
        {/* Tombol Next */}
        <button onClick={handleNext} className="hover:opacity-60 transition-opacity p-1 active:scale-90">
          <SkipForward size={16} />
        </button>
      </div>
    </motion.div>
  );
}
