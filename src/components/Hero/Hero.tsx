"use client";

import { motion } from "framer-motion";
import { WeddingData } from "../../types/wedding";

interface HeroProps {
  data: WeddingData;
}

// STAGE: Living Environment (Lanterns)
const Lantern = ({ left, delay }: { left: string; delay: number }) => (
  <motion.div
    className="absolute top-0 z-10 flex flex-col items-center"
    style={{ left, transformOrigin: "top center" }}
    initial={{ y: -150, opacity: 0 }}
    animate={{ y: 0, opacity: [0.7, 1, 0.7] }}
    transition={{ 
      y: { duration: 1.5, delay: delay, ease: "easeOut" },
      opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }
    }}
  >
    <motion.div
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ transformOrigin: "top center" }}
      className="flex flex-col items-center"
    >
      <div className="w-[1px] h-20 md:h-28 bg-gradient-to-b from-[#d4af37]/0 to-[#d4af37]/50" />
      <svg width="24" height="36" viewBox="0 0 24 36" fill="none" className="drop-shadow-[0_10px_15px_rgba(212,175,55,0.4)]">
        <path d="M12 0L14 8H10L12 0Z" fill="#d4af37" />
        <path d="M6 8H18L22 24H2L6 8Z" fill="url(#lant-hero-grad)" stroke="#d4af37" strokeWidth="0.5" />
        <path d="M2 24H22L12 36L2 24Z" fill="#d4af37" />
        <circle cx="12" cy="18" r="4" fill="#ffedd5" className="animate-pulse blur-[1.5px]" />
        <defs>
          <linearGradient id="lant-hero-grad" x1="12" y1="8" x2="12" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fde047" />
            <stop offset="1" stopColor="#ca8a04" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  </motion.div>
);

// STAGE: Subtle Konark Corner Geometry (Do not enlarge)
const CornerOrnament = ({ className }: { className: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={`absolute w-[80px] h-[80px] opacity-[0.08] text-[#8b7355] ${className}`}>
    <circle cx="0" cy="0" r="80" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="0" cy="0" r="65" stroke="currentColor" strokeWidth="0.75"/>
    <circle cx="0" cy="0" r="15" stroke="currentColor" strokeWidth="2"/>
    {[...Array(6)].map((_, i) => (
      <line key={i} x1="0" y1="0" x2="80" y2="0" stroke="currentColor" strokeWidth="1" transform={`rotate(${i * 18} 0 0)`} />
    ))}
  </svg>
);

export default function Hero({ data }: HeroProps) {
  // Foil Stamping Effect for Gold Typography
  const foilShadow = { textShadow: "0 1px 0 rgba(255,255,255,0.15), 0 4px 10px rgba(0,0,0,0.15)" };

  return (
    // 1. THE STAGE: Royal Maroon Gradient (100vh)
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center bg-gradient-to-b from-[#2b000f] via-[#470018] to-[#2b000f] overflow-hidden sticky top-0 z-10">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Allura&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500&family=Cinzel:wght@500;600&family=Cormorant+SC:wght@400;500&family=Montserrat:wght@300;400;500&display=swap');
      `}} />

      {/* 2. THE LIGHTING: Radial Amber Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_60%)] blur-[50px] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      />

      {/* 3. THE ARCHITECTURE: Faint Palace Silhouette (Increased to 0.09 Opacity) */}
      <div className="absolute inset-0 flex justify-center items-end pointer-events-none opacity-[0.09]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMax slice" className="w-full h-full max-w-[1200px]" stroke="#d4af37" strokeWidth="1" fill="none">
          <path d="M 100 600 L 100 300 Q 100 150 400 50 Q 700 150 700 300 L 700 600" />
          <path d="M 120 600 L 120 310 Q 120 170 400 75 Q 680 170 680 310 L 680 600" />
        </svg>
      </div>

      {/* 4. THE MAGIC: Twinkling Warm Gold Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-[#eebb66] blur-[0.5px]"
          initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0, scale: 1 }}
          animate={{ 
            y: "-10vh", 
            opacity: [0, 0.2, 0.6, 0.2, 0],
            scale: [1, 1.5, 1, 1.5, 1] 
          }}
          transition={{ duration: 12 + Math.random() * 8, repeat: Infinity, ease: "linear", delay: 2.0 + Math.random() * 5 }}
        />
      ))}

      {/* 5. THE ENVIRONMENT: Descending Lanterns */}
      <Lantern left="12%" delay={1.5} />
      <Lantern left="88%" delay={1.8} />

      {/* 6. THE HERO CARD: Scaled down (max 480px), increased padding */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center text-center w-[85vw] max-w-[460px] md:max-w-[480px] min-h-[600px] md:min-h-[620px] bg-[#F6F0E6] shadow-[0_40px_80px_rgba(0,0,0,0.25)] rounded-[18px] px-8 py-14 md:px-12 md:py-16 overflow-hidden"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ y: { duration: 1.2, delay: 0.8, ease: "easeOut" }, opacity: { duration: 1, delay: 1.0 } }}
      >
        {/* Living Paper Mandala (Opacity 0.07, 120s rotation) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]"
        >
          <svg width="600" height="600" viewBox="0 0 100 100" fill="none">
            {[...Array(12)].map((_, i) => (
              <path key={i} d="M50 50 L50 0 C75 0, 100 25, 50 50 Z" stroke="#8b7355" strokeWidth="0.3" transform={`rotate(${i * 30} 50 50)`} />
            ))}
          </svg>
        </motion.div>

        {/* Card Textures & Inner Gold Border */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('/images/paper-texture.jpg')] mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-3 border border-[#d4af37]/60 rounded-[12px] pointer-events-none" />

        {/* Card Ornaments (Corners Only) */}
        <CornerOrnament className="top-4 left-4" />
        <CornerOrnament className="top-4 right-4 rotate-90" />
        <CornerOrnament className="bottom-4 right-4 rotate-180" />
        <CornerOrnament className="bottom-4 left-4 -rotate-90" />

        {/* --- TYPOGRAPHY HIERARCHY --- */}

        {/* Top Text */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2.5 }}
          style={{ fontFamily: "'Cormorant SC', serif" }} 
          className="text-[12px] md:text-[16px] tracking-[6px] text-[#5c4a3d] font-medium mb-8 opacity-80 relative z-10"
        >
          TOGETHER WITH THEIR FAMILIES
        </motion.p>

        {/* The Names (Staggered Hierarchy) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 3.0 }}
          className="flex flex-col items-center relative z-10"
        >
          <h1 
            style={{ fontFamily: "'Bodoni Moda', serif", ...foilShadow }} 
            className="text-[52px] md:text-[82px] font-medium text-[#B8860B] leading-[0.85]"
          >
            {data.groom}
          </h1>
          
          {/* Ampersand (Muted Gold #D8B26A, Opacity 0.85) */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 3.8 }}
            style={{ fontFamily: "'Allura', cursive", ...foilShadow }} 
            className="block text-[56px] md:text-[72px] text-[#D8B26A] opacity-85 leading-[0.5] my-5"
          >
            &
          </motion.span>
          
          <h1 
            style={{ fontFamily: "'Bodoni Moda', serif", ...foilShadow }} 
            className="text-[60px] md:text-[95px] font-medium text-[#B8860B] leading-[0.85]"
          >
            {data.bride}
          </h1>
        </motion.div>

        {/* Invitation Text */}
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 4.2 }}
          style={{ fontFamily: "'Montserrat', sans-serif" }} 
          className="text-[12px] md:text-[18px] tracking-[4px] text-[#5c4a3d] uppercase mt-10 mb-6 opacity-90 leading-relaxed relative z-10"
        >
          REQUEST THE HONOUR OF<br/>YOUR PRESENCE
        </motion.p>

        {/* Date (Enlarged with ❦ ornaments) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 4.5 }}
          className="flex flex-col items-center mb-6 relative z-10"
        >
          <span className="text-[#D8B26A] text-sm md:text-base mb-1 opacity-70">❦</span>
          <p style={{ fontFamily: "'Cinzel', serif" }} className="text-[28px] md:text-[42px] font-semibold text-[#8b7355] tracking-[2px]">
            {data.date}
          </p>
          <span className="text-[#D8B26A] text-sm md:text-base mt-1 opacity-70">❦</span>
        </motion.div>

        {/* Location */}
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 5.0 }}
          style={{ fontFamily: "'Montserrat', sans-serif" }} 
          className="text-[14px] md:text-[18px] tracking-[6px] text-[#5c4a3d] uppercase opacity-80 relative z-10"
        >
          {data.location}
        </motion.p>

      </motion.div>

      {/* 7. SCROLL INDICATOR (Unfold the Journey) */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ duration: 1, delay: 6.0 }}
        className="absolute bottom-8 flex flex-col items-center z-20 cursor-pointer"
      >
        <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[10px] md:text-[12px] tracking-[3px] uppercase text-[#d4af37] mb-2 font-medium">
          Unfold the Journey
        </p>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#d4af37] text-lg"
        >
          ↓
        </motion.div>
      </motion.div>

    </section>
  );
}
