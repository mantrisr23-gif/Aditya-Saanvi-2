"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeProps {
  onOpen: () => void;
}

// Swaying Top-Corner Lanterns
const Lantern = ({ left, delay }: { left: string; delay: number }) => (
  <motion.div
    className="absolute top-0 z-10 flex flex-col items-center opacity-70"
    style={{ left, transformOrigin: "top center" }}
    animate={{ rotate: [-2, 2, -2] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
  >
    <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-[#d4af37]/0 to-[#d4af37]/40" />
    <svg width="20" height="30" viewBox="0 0 24 36" fill="none" className="drop-shadow-[0_5px_10px_rgba(212,175,55,0.3)]">
      <path d="M12 0L14 8H10L12 0Z" fill="#d4af37" />
      <path d="M6 8H18L22 24H2L6 8Z" fill="url(#lant-grad)" stroke="#d4af37" strokeWidth="0.5" />
      <path d="M2 24H22L12 36L2 24Z" fill="#d4af37" />
      <circle cx="12" cy="18" r="4" fill="#ffedd5" className="animate-pulse blur-[1px]" />
      <defs>
        <linearGradient id="lant-grad" x1="12" y1="8" x2="12" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fde047" />
          <stop offset="1" stopColor="#ca8a04" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [mounted, setMounted] = useState(false);
  const [isBroken, setIsBroken] = useState(false);
  const [isFlapOpen, setIsFlapOpen] = useState(false);
  const [isCardRising, setIsCardRising] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSealBreak = () => {
    if (isBroken) return;
    setIsBroken(true);
    
    // 1. The 0.3s tension pause
    setTimeout(() => setIsFlapOpen(true), 300);
    
    // 2. Card emerges slowly & music starts
    setTimeout(() => {
      setIsCardRising(true);
      onOpen(); 
    }, 1200);
    
    // 3. Envelope fades and zooms to hero
    setTimeout(() => setIsZooming(true), 3200);
  };

  return (
    // ENVIRONMENT: Royal Maroon Background
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#2D0017] via-[#4B0025] to-[#220012] overflow-hidden">
      
      <Lantern left="10%" delay={0} />
      <Lantern left="90%" delay={2} />
      
      {/* 0.03 Opacity Palace Arch Silhouette */}
      <div className="absolute inset-x-0 bottom-0 h-[80vh] flex justify-center pointer-events-none opacity-[0.03]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full max-w-[800px] h-full" stroke="#d4af37" strokeWidth="0.5" fill="none">
          <path d="M10 100 L10 30 Q50 -10 90 30 L90 100" />
          <path d="M20 100 L20 35 Q50 0 80 35 L80 100" />
        </svg>
      </div>

      {/* Behind-Envelope Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Sparse Floating Gold Particles - WRAPPED IN MOUNTED CHECK */}
      {mounted && [...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-[#d4af37] blur-[0.5px]"
          initial={{ y: "100vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 0.4, 0] }}
          transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
        />
      ))}

      {/* THE CAMERA HANDOFF ZOOM */}
      <motion.div
        className="relative flex flex-col items-center justify-center w-full"
        animate={{ 
          scale: isZooming ? 4 : 1, 
          opacity: isZooming ? 0 : 1,
          y: isZooming ? 200 : 0
        }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
      >
        
        {/* ENVELOPE ASSEMBLY (Scaled up by ~12% -> max-w-[560px]) */}
        <motion.div 
          className="relative w-[92%] max-w-[560px] aspect-[4/3] mt-12"
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          whileInView={{ boxShadow: ["0 20px 40px rgba(0,0,0,0.6)", "0 25px 50px rgba(0,0,0,0.7)", "0 20px 40px rgba(0,0,0,0.6)"] }}
        >
          {/* Back Wall of Envelope */}
          <div className="absolute inset-0 bg-[#E8E1D5] rounded-sm border border-[#d4af37]/40 shadow-inner">
            <div className="absolute inset-0 opacity-[0.06] bg-[url('/images/paper-texture.jpg')] mix-blend-multiply" />
          </div>

          {/* THE INVITATION CARD */}
          <motion.div 
            className="absolute inset-2 bg-[#F7F3ED] rounded-sm flex flex-col items-center pt-10 border-[0.5px] border-[#d4af37]/50"
            initial={{ y: 0, scale: 0.95, opacity: 0 }}
            animate={{ 
              y: isCardRising ? -160 : 0, 
              scale: isCardRising ? 1.02 : 0.95,
              opacity: isFlapOpen ? 1 : 0,
              rotate: isCardRising ? -1.5 : 0, 
              boxShadow: isCardRising ? "0 20px 40px rgba(0,0,0,0.5)" : "0 0 0 rgba(0,0,0,0)"
            }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="absolute inset-0 opacity-[0.08] bg-[url('/images/paper-texture.jpg')] mix-blend-multiply" />
            <div className="absolute inset-3 border-[0.5px] border-[#d4af37] opacity-30" />
          </motion.div>

          {/* Front Pocket of Envelope */}
          <div className="absolute bottom-0 w-full h-[65%] bg-[#F0EBE1] rounded-b-sm z-20 border-t border-[#d4af37] border-opacity-40 overflow-hidden shadow-[inset_0_4px_10px_rgba(0,0,0,0.05)]">
            {/* Base Texture */}
            <div className="absolute inset-0 opacity-[0.08] bg-[url('/images/paper-texture.jpg')] mix-blend-multiply" />
            
            {/* 1. Thin Gold Foil Border */}
            <div className="absolute inset-3 border-[1px] border-[#d4af37] opacity-40 pointer-events-none rounded-sm" />
            
            {/* 2. Giant Blind Embossed Konark Wheel */}
            <svg className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] max-w-[300px] max-h-[300px] opacity-[0.025] text-black mix-blend-multiply pointer-events-none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
              {[...Array(24)].map((_, i) => (
                <line key={i} x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" transform={`rotate(${i * 15} 50 50)`} />
              ))}
            </svg>
          </div>

          {/* Envelope Flap (145 degrees) */}
          <motion.div 
            className="absolute top-0 w-full h-[60%] z-30 origin-top flex justify-center"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isFlapOpen ? -145 : 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]">
              <path d="M0 0 L400 0 L200 200 Z" fill="#F0EBE1" />
              <path d="M0 0 L400 0 L200 200 Z" fill="url(#flap-texture)" className="opacity-[0.08] mix-blend-multiply" />
              <path d="M1 1 L399 1 L200 198 Z" fill="none" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.8" />
            </svg>
          </motion.div>

          {/* THE LOCKED WAX SEAL */}
          <AnimatePresence>
            {!isBroken && (
              <motion.img 
                src="/images/wax-seal.png"
                alt="Break to open"
                className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer w-[110px] h-[110px] md:w-[130px] md:h-[130px] drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)]"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.92, x: [-2, 2, -2, 0] }}
                onClick={handleSealBreak}
                exit={{ opacity: 0, scale: 1.2, filter: "blur(6px)", transition: { duration: 0.2 } }}
              />
            )}
          </AnimatePresence>

          {/* Particle Burst on Break */}
          {isBroken && !isFlapOpen && (
            <div className="absolute left-1/2 top-[55%] z-50">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[3px] h-[3px] rounded-full bg-[#FDE08B] blur-[0.5px]"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{ 
                    x: (Math.random() - 0.5) * 150, 
                    y: (Math.random() - 0.5) * 150, 
                    opacity: 0,
                    scale: 0 
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* TYPOGRAPHY: Idle Text */}
        <motion.div
          className="mt-16"
          animate={{ opacity: isFlapOpen ? 0 : 0.85 }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#d4af37] text-[10px] md:text-xs tracking-[0.45em] uppercase font-medium drop-shadow-md">
            For Our Esteemed Guest
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}