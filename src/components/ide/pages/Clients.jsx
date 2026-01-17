"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play, Pause, SkipForward, SkipBack, Heart, Shuffle, Repeat,
  Mic2, LayoutList, MonitorSpeaker, Volume2, Search, Home, Library,
  PlusSquare, Clock, MoreHorizontal, Disc, MoveLeft
} from "lucide-react";

// --- Data ---
const albums = [
  { id: 1, name: "Gessure", artist: "Social Platform", cover: "/images/brands/gessure.png", color: "from-blue-600 to-blue-900" },
  { id: 2, name: "AssureQai", artist: "AI Automation", cover: "/images/brands/assureqai.png", color: "from-purple-600 to-purple-900" },
  { id: 3, name: "Dhawada", artist: "Luxury Jewelry", cover: "/images/brands/dhawada.png", color: "from-yellow-600 to-yellow-900" },
  { id: 4, name: "Mending Mind", artist: "Healthcare", cover: "/images/brands/mending.png", color: "from-green-600 to-green-900" },
  { id: 5, name: "Skoal", artist: "BPO Services", cover: "/images/brands/skoal.png", color: "from-red-600 to-red-900" },
  { id: 6, name: "Unextdoor", artist: "EdTech AI", cover: "/images/brands/unextdoor.png", color: "from-pink-600 to-pink-900" },
  { id: 7, name: "Lincify", artist: "Digital Agency", cover: "/images/brands/lincify.png", color: "from-indigo-600 to-indigo-900" },
  { id: 8, name: "ShivAi", artist: "TeleMedicine", cover: "/images/brands/shivaitelerad.png", color: "from-cyan-600 to-cyan-900" },
];

const tracks = [
  {
    id: 1,
    title: "Unbeatable Speed & Quality",
    artist: "Raja Arsalaan (Strategist)",
    album: "LinkedIn Hits",
    duration: "5:00",
    cover: "/images/brands/swbuild.png",
    quote: "I highly recommend Kanish as a phenomenal freelance website developer. He delivering exceptional quality with unbeatable speed. His work was not only excellent but also provided at a very reasonable charge. Kanish is now my go-to developer for any future website needs."
  },
  {
    id: 2,
    title: "500x Better Than Expected",
    artist: "Sai Kiran (Founder)",
    album: "Gessure EP",
    duration: "4:20",
    cover: "/images/brands/gessure.png",
    quote: "You have made it 500x better than what I expected. Truly outstanding work!"
  },
  {
    id: 3,
    title: "Amazing Problem Solving",
    artist: "Shiv Pratap Singh",
    album: "Talent Acquisition",
    duration: "3:45",
    cover: "/images/brands/sourcingscreen.png",
    quote: "Really appreciate the amazing work Kanish has done in developing and enhancing our websites and platforms using React.js, Next.js, and WordPress. Your problem-solving skills, quick delivery, and attention to detail have been outstanding."
  },
  {
    id: 4,
    title: "Awesome Job with the App",
    artist: "Farhin (Team Unextdoor)",
    album: "Mobile Dev Sessions",
    duration: "2:30",
    cover: "/images/brands/unextdoor.png",
    quote: "You did an awesome job with the app! Thanks a lot for the dedication and quality."
  },
  {
    id: 5,
    title: "Fast & Easy to Work With",
    artist: "Sampreet Kulkarni",
    album: "Product Design Mix",
    duration: "3:12",
    cover: "/images/brands/sculpt.png",
    quote: "Kanish is a great developer, fast and easy to work with. Highly recommended!"
  },
];

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-4 px-4 py-3 cursor-pointer transition-colors ${active ? 'text-white font-bold' : 'text-[#b3b3b3] hover:text-white'}`}>
    <Icon size={24} />
    <span className="text-sm truncate font-medium">{label}</span>
  </div>
);

const AlbumCard = ({ album, onClick }) => (
  <motion.div
    whileHover={{ y: -8 }}
    onClick={onClick}
    className="bg-[#181818] p-4 rounded-md hover:bg-[#282828] transition-all cursor-pointer group flex flex-col gap-4"
  >
    <div className="relative aspect-square w-full shadow-lg rounded-md overflow-hidden bg-[#333]">
      {/* Pseudo Cover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${album.color} opacity-80`} />
      <img src={album.cover} alt={album.name} className="absolute inset-0 w-full h-full object-contain p-4 mix-blend-normal z-10" />

      {/* Play Button Overlay */}
      <div className="absolute right-2 bottom-2 bg-[#1db954] w-12 h-12 rounded-full flex items-center justify-center shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:scale-105">
        <Play fill="black" className="ml-1 text-black" size={20} />
      </div>
    </div>
    <div>
      <h3 className="text-white font-bold truncate mb-1">{album.name}</h3>
      <p className="text-[#a7a7a7] text-sm truncate">{album.artist}</p>
    </div>
  </motion.div>
);

const TrackRow = ({ track, index, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`grid grid-cols-[16px_4fr_3fr_minmax(120px,1fr)] gap-4 items-center px-4 py-2 rounded-md hover:bg-[#ffffff1a] cursor-pointer group text-sm text-[#b3b3b3] ${isActive ? "bg-[#ffffff1a]" : ""}`}
  >
    <div className="text-center group-hover:hidden">
      {isActive ? <span className="text-[#1db954] animate-pulse">lιlı</span> : index + 1}
    </div>
    <div className="hidden group-hover:block text-white">
      <Play size={12} fill="white" />
    </div>

    <div className="flex items-center gap-3 min-w-0">
      <div className="w-10 h-10 bg-[#333] flex items-center justify-center shrink-0">
        <Disc size={20} className={isActive ? "text-[#1db954] animate-spin" : ""} />
      </div>
      <div className="flex flex-col truncate">
        <span className={`truncate font-medium ${isActive ? "text-[#1db954]" : "text-white"}`}>{track.title}</span>
        <span className="text-xs group-hover:text-white transition-colors">{track.artist}</span>
      </div>
    </div>

    <div className="hidden md:block truncate hover:text-white transition-colors">{track.album}</div>

    <div className="flex items-center justify-between">
      {/* Explicit Lyrics Icon placeholder for fun */}
      <div className="border border-[#b3b3b3] px-1 rounded-[2px] text-[8px] h-3 flex items-center justify-center md:hidden">LYRICS</div>
      <div className="flex items-baseline gap-4">
        <Heart size={16} className="invisible group-hover:visible hover:text-white hover:fill-white" />
        <span>{track.duration}</span>
      </div>
    </div>
  </div>
);

const LyricsView = ({ track, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="h-full flex flex-col p-8 bg-gradient-to-b from-[#465362] to-[#121212] overflow-hidden relative rounded-t-lg"
  >
    <div className="absolute top-6 left-6 z-20">
      <button onClick={onClose} className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors">
        <MoveLeft size={24} />
      </button>
    </div>

    <div className="flex-1 flex flex-col justify-center items-center max-w-4xl mx-auto text-center gap-8 relative z-10">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="w-48 h-48 shadow-2xl rounded-lg overflow-hidden bg-black/50"
      >
        <img src={track.cover} className="w-full h-full object-contain p-4" />
      </motion.div>

      <div className="space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
          "{track.quote}"
        </h2>
        <p className="text-xl text-[#ffffff99] font-medium">— {track.artist}</p>
      </div>
    </div>

    {/* Background Ambience */}
    <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.2),_transparent_70%)]" />
    </div>
  </motion.div>
);

export default function Clients() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);

  // Auto-play next quote logic could go here

  return (
    <div className="h-full w-full bg-black text-white font-sans flex flex-col relative overflow-hidden">

      <div className="flex-1 flex min-h-0">
        {/* Sidebar */}
        <div className="w-60 bg-black flex flex-col gap-2 p-2 shrink-0 md:hidden">
          <div className="bg-[#121212] rounded-lg p-2">
            <SidebarItem icon={Home} label="Home" active />
            <SidebarItem icon={Search} label="Search" />
            <SidebarItem icon={Library} label="Your Library" />
          </div>

          <div className="bg-[#121212] rounded-lg flex-1 p-2 overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-2 text-[#b3b3b3]">
              <span className="font-bold text-sm hover:text-white transition-colors cursor-pointer">PLAYLISTS</span>
              <PlusSquare size={20} className="hover:text-white cursor-pointer" />
            </div>

            <div className="space-y-3 mt-2 px-4">
              <div className="flex gap-3 items-center group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-sm flex items-center justify-center group-hover:opacity-80">
                  <Heart size={20} fill="white" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Liked Work</p>
                  <p className="text-[#b3b3b3] text-xs">Pinned • 52 songs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-[#121212] rounded-lg m-2 ml-0 overflow-y-auto custom-scrollbar md:m-0 md:rounded-none relative">

          <AnimatePresence mode="wait">
            {showLyrics ? (
              <LyricsView key="lyrics" track={currentTrack} onClose={() => setShowLyrics(false)} />
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col"
              >
                {/* Header */}
                <div className="sticky top-0 bg-[#121212]/90 backdrop-blur-md p-6 flex items-center justify-between z-20 transition-colors">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#00000070] flex items-center justify-center cursor-not-allowed">
                      <SkipBack size={16} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#00000070] flex items-center justify-center cursor-not-allowed">
                      <SkipForward size={16} />
                    </div>
                  </div>

                  {currentTrack && isPlaying && (
                    <button
                      onClick={() => setShowLyrics(true)}
                      className="bg-[#1db954] text-black text-xs font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform flex items-center gap-2 animate-pulse"
                    >
                      <Mic2 size={14} /> NOW PLAYING
                    </button>
                  )}
                </div>

                <div className="p-6 pt-0 space-y-8 pb-32">

                  {/* Hero Section */}
                  <section>
                    <h2 className="text-2xl font-bold mb-4 md:text-xl">Your Top Clients</h2>
                    <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
                      {albums.map(album => (
                        <AlbumCard key={album.id} album={album} onClick={() => console.log('Playing', album.name)} />
                      ))}
                    </div>
                  </section>

                  {/* Playlist Section */}
                  <section>
                    <h2 className="text-2xl font-bold mb-4 md:text-xl">Best of Testimonials</h2>
                    <div className="flex flex-col">
                      {/* Playlist Header */}
                      <div className="grid grid-cols-[16px_4fr_3fr_minmax(120px,1fr)] gap-4 px-4 py-2 text-[#b3b3b3] text-xs border-b border-[#ffffff1a] mb-2 uppercase tracking-wider sticky top-0 bg-[#121212] z-10">
                        <div className="text-center">#</div>
                        <div>Title</div>
                        <div className="hidden md:block">Album</div>
                        <div className="flex justify-between items-center"><Clock size={16} /></div>
                      </div>

                      {tracks.map((track, i) => (
                        <TrackRow
                          key={track.id}
                          track={track}
                          index={i}
                          isActive={currentTrack.id === track.id}
                          onClick={() => {
                            setCurrentTrack(track);
                            setIsPlaying(true);
                            // Optional: Auto open lyrics on play?
                            // setShowLyrics(true);
                          }}
                        />
                      ))}
                    </div>
                  </section>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Player Bar */}
      <div className="h-24 bg-[#181818] border-t border-[#282828] px-4 flex items-center justify-between shrink-0 z-30 pb-2">

        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="w-14 h-14 bg-[#282828] relative group overflow-hidden rounded shadow-lg">
            <img src={currentTrack.cover} alt="cover" className="w-full h-full object-contain p-2" />
            <div
              onClick={() => setShowLyrics(!showLyrics)}
              className="absolute inset-0 bg-black/60 hidden group-hover:flex items-center justify-center cursor-pointer"
            >
              <MoveLeft size={20} className="rotate-90" />
            </div>
          </div>
          <div className="flex flex-col justify-center overflow-hidden">
            <h4 className="text-sm font-medium text-white hover:underline cursor-pointer truncate">{currentTrack.title}</h4>
            <div className="text-xs text-[#b3b3b3] hover:underline cursor-pointer truncate">{currentTrack.artist}</div>
          </div>
          <Heart size={16} className="text-[#1db954] fill-[#1db954] ml-2 cursor-pointer hover:scale-110 active:scale-95 transition-transform" />
        </div>

        <div className="flex flex-col items-center flex-1 max-w-md px-4">
          <div className="flex items-center gap-6 mb-2">
            <Shuffle size={16} className="text-[#b3b3b3] hover:text-white cursor-pointer" />
            <SkipBack size={20} className="text-[#b3b3b3] hover:text-white cursor-pointer" />
            <div
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              {isPlaying ? <Pause size={16} fill="black" /> : <Play size={16} fill="black" className="ml-1" />}
            </div>
            <SkipForward size={20} className="text-[#b3b3b3] hover:text-white cursor-pointer" />
            <Repeat size={16} className="text-[#b3b3b3] hover:text-white cursor-pointer" />
          </div>
          <div className="w-full flex items-center gap-2 text-xs text-[#b3b3b3] font-mono">
            <span>{isPlaying ? "0:12" : "0:00"}</span>
            <div className="h-1 flex-1 bg-[#4d4d4d] rounded-full overflow-hidden group cursor-pointer">
              <div className="h-full bg-white group-hover:bg-[#1db954] w-[30%] relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow" />
              </div>
            </div>
            <span>{currentTrack.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 flex-1 min-w-0 md:hidden">
          <Mic2
            size={16}
            className={`cursor-pointer transition-colors ${showLyrics ? 'text-[#1db954]' : 'text-[#b3b3b3] hover:text-white'}`}
            onClick={() => setShowLyrics(!showLyrics)}
          />
          <LayoutList size={16} className="text-[#b3b3b3] hover:text-white cursor-pointer" />
          <MonitorSpeaker size={16} className="text-[#b3b3b3] hover:text-white cursor-pointer" />
          <div className="flex items-center gap-2 w-24">
            <Volume2 size={16} className="text-[#b3b3b3]" />
            <div className="h-1 flex-1 bg-[#4d4d4d] rounded-full overflow-hidden cursor-pointer">
              <div className="h-full bg-white group-hover:bg-[#1db954] w-[80%]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
