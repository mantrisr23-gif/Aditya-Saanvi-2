"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { WeddingData } from "../../data/weddingData";

interface EventsProps {
  data: WeddingData;
}

// THE CONTINUITY ELEMENT
const MandalaBackground = () => (
  <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none opacity-[0.04]">
    <svg viewBox="0 0 100 100" fill="none">
      {[...Array(12)].map((_, i) => (
        <path key={i} d="M50 50 L50 0 C75 0, 100 25, 50 50 Z" stroke="#8b7355" strokeWidth="0.4" transform={`rotate(${i * 30} 50 50)`} />
      ))}
    </svg>
  </div>
);

const KonarkCorner = ({ className }: { className: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={`absolute w-[60px] h-[60px] opacity-[0.08] text-[#8b7355] ${className}`}>
    <circle cx="0" cy="0" r="80" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="0" cy="0" r="65" stroke="currentColor" strokeWidth="0.75"/>
    <circle cx="0" cy="0" r="15" stroke="currentColor" strokeWidth="2"/>
    {[...Array(6)].map((_, i) => (
      <line key={i} x1="0" y1="0" x2="80" y2="0" stroke="currentColor" strokeWidth="1" transform={`rotate(${i * 18} 0 0)`} />
    ))}
  </svg>
);

const FloralCorner = ({ className }: { className: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={`absolute w-[50px] h-[50px] opacity-[0.15] text-[#d4af37] ${className}`}>
    <path d="M 0 0 Q 40 0 50 50 Q 0 40 0 0" fill="currentColor" />
    <path d="M 0 0 Q 80 0 80 80 Q 0 80 0 0" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="15" cy="15" r="4" fill="currentColor" />
  </svg>
);

export default function Events({ data }: EventsProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative w-full bg-[#2b000f] z-20 flex flex-col items-center pb-20">
      
      {/* SET DESIGN: Subtle Palace Arches (Fixed to background) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0 opacity-[0.06] blur-[1px]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full max-w-[1400px]" stroke="#d4af37" strokeWidth="1.5" fill="none">
          <path d="M 50 600 L 50 200 Q 50 50 400 50 Q 750 50 750 200 L 750 600" />
        </svg>
      </div>

      {/* TRANSITION CHAMBER */}
      <div className="relative w-full py-24 flex flex-col items-center justify-center text-center px-6 z-10 overflow-hidden">
        {mounted && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-[#d4af37] blur-[0.5px]"
            initial={{ y: "20vh", opacity: 0 }}
            whileInView={{ y: "-20vh", opacity: [0, 0.5, 0] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: "linear" }}
          />
        ))}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
        >
          <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[12px] tracking-[6px] uppercase text-[#d4af37] mb-4 drop-shadow-md">
            Celebration Journey
          </p>
          <div className="flex items-center justify-center space-x-3 mb-4 text-[#d4af37] opacity-60 text-xs">
            <span>✦</span><span className="scale-125">✦</span><span>✦</span>
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[20px] md:text-[24px] italic text-[#F6F0E6] opacity-90">
            The festivities begin
          </p>
        </motion.div>
      </div>

      {/* THE EVENT TIMELINE (Grid Layout) */}
      <div className="relative w-full max-w-[1100px] mx-auto px-4 sm:px-8 z-10">
        
        {/* DESKTOP GOLD CONNECTOR LINE */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] z-20">
          <div className="relative flex items-center justify-center w-full">
            <div className="absolute w-full h-[1px] bg-[#d4af37]/40" />
            <span className="text-[#d4af37] text-xs bg-[#2b000f] px-2 relative z-10">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {data.events.map((event, index) => {
            const isHaldi = event.title.toLowerCase().includes('haldi');
            const isWedding = event.title.toLowerCase().includes('wedding');
            
            // Subtle distinct rotations for physical feel
            const cardRotation = isWedding ? "lg:rotate-1" : isHaldi ? "lg:-rotate-1" : "lg:rotate-0";

            return (
              <div key={index} className="flex flex-col items-center">
                
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  className={`relative flex flex-col items-center bg-[#F6F0E6] w-full max-w-[460px] h-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] px-6 py-10 md:px-10 border border-[#d4af37]/30 ${cardRotation}`}
                  style={{ borderRadius: "2px" }}
                >
                  {/* Textures */}
                  <div className="absolute inset-0 opacity-[0.06] bg-[url('/images/paper-texture.jpg')] mix-blend-multiply pointer-events-none" />
                  <MandalaBackground />

                  {/* Ornaments */}
                  {isHaldi && (
                    <>
                      <FloralCorner className="top-3 left-3" />
                      <FloralCorner className="top-3 right-3 rotate-90" />
                    </>
                  )}
                  {isWedding && (
                    <>
                      <KonarkCorner className="top-3 left-3" />
                      <KonarkCorner className="top-3 right-3 rotate-90" />
                      <KonarkCorner className="bottom-3 right-3 rotate-180" />
                      <KonarkCorner className="bottom-3 left-3 -rotate-90" />
                    </>
                  )}

                  {/* EVENT NAME */}
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[42px] md:text-[52px] text-[#5c4a3d] mb-6 drop-shadow-sm leading-none text-center relative z-10">
                    {event.title}
                  </h2>

                  {/* EVENT PHOTO (Tightened Height) */}
                  <div className={`relative w-full max-w-[280px] aspect-square border-[6px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] mb-8 overflow-hidden z-10 bg-[#e8e1d5] ${isWedding ? 'border-[#d4af37]/60' : 'border-[#fdfbf7]'}`}>
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                  </div>

                  {/* EVENT DETAILS */}
                  <div className="flex flex-col items-center text-center relative z-10 w-full flex-grow justify-end pb-2">
                    <div className="flex items-center justify-center space-x-3 text-[#8b7355] mb-3">
                      <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[11px] tracking-[3px] uppercase font-medium">
                        {event.date}
                      </p>
                      <span className="text-[10px] opacity-60">✦</span>
                      <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[11px] tracking-[3px] uppercase font-medium">
                        {event.time}
                      </p>
                    </div>

                    <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[12px] tracking-[4px] uppercase text-[#695546] font-semibold leading-relaxed">
                      {event.venue.split(',')[0]}
                    </p>
                    {event.venue.split(',')[1] && (
                      <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[10px] tracking-[2px] uppercase text-[#8b7355] opacity-90 mt-1">
                        {event.venue.split(',')[1]}
                      </p>
                    )}

                    <a 
                      href={event.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-6 font-['Montserrat'] text-[10px] tracking-[3px] uppercase text-[#d4af37] border-b border-[#d4af37]/60 pb-1 hover:text-[#b8860b] transition-colors"
                    >
                      View Venue
                    </a>
                  </div>
                </motion.div>

                {/* MOBILE VERTICAL CONNECTOR */}
                {index === 0 && (
                  <div className="lg:hidden flex flex-col items-center justify-center text-[#d4af37] opacity-60 mt-8 mb-[-1rem] space-y-2 z-20">
                    <div className="w-[1px] h-8 bg-gradient-to-b from-[#d4af37]/60 to-transparent" />
                    <span className="text-xs">✦</span>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-[#d4af37]/60" />
                  </div>
                )}
                
              </div>
            );
          })}
        </div>
      </div>

      {/* MEMORY PORTAL TRANSITION (Fade to Black) */}
      <div className="relative w-full h-[40vh] mt-24 bg-gradient-to-b from-transparent via-[#110005] to-[#050505] flex flex-col items-center justify-end pb-12 z-10 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center relative z-10"
        >
          <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[10px] tracking-[6px] uppercase text-[#d4af37] opacity-80 mb-4 drop-shadow-md">
            Captured Memories
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[26px] md:text-[32px] text-[#F6F0E6] italic font-light px-4">
            Moments that turned into forever.
          </h2>
        </motion.div>
      </div>

    </div>
  );
}