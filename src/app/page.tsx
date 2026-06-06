"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Make sure 'motion' is here
import { weddingData } from "../data/weddingData";
// ... rest of your imports

// Components
import Envelope from "../components/Intro/Envelope";
import Hero from "../components/Hero/Hero";
import Events from "../components/Events/Events";
import Gallery from "../components/Gallery/Gallery";
import ClosingCard from "../components/Footer/ClosingCard";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    setIsOpened(true);
    
    // Play music only after user interaction
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((err) => {
        console.warn("Audio play prevented by browser:", err);
      });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#2b000f] selection:bg-[#d4af37]/30">
      
      {/* FIX: Ensure the path is correct. 
         If your file is at public/audio/royal-theme.mp3, 
         the src MUST be "/audio/royal-theme.mp3" 
      */}
      <audio 
        ref={audioRef} 
        src="/audio/royal-theme.mp3" 
        loop 
        preload="auto" 
      />

      {/* The Envelope / Cover Sequence */}
      <AnimatePresence mode="wait">
        {!isOpened && <Envelope key="envelope" onOpen={handleOpen} />}
      </AnimatePresence>

      {/* The Main Content Stack */}
      {isOpened && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full"
        >
          <Hero data={weddingData} />
          <Events data={weddingData} />
          <Gallery />
          <ClosingCard data={weddingData} />
        </motion.div>
      )}

    </main>
  );
}