"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { WeddingData } from "../../types/wedding";
interface ClosingProps {
  data: WeddingData;
}

export default function Closing({ data }: ClosingProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("November 15, 2026 00:00:00").getTime();
    const interval = setInterval(() => {
      const distance = targetDate - new Date().getTime();
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#2b000f] via-[#470018] to-[#2b000f] flex flex-col items-center py-24 z-20 overflow-hidden">
      
      {/* 1. THE RSVP CARD (Enlarged, Royal Hierarchy) */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center bg-[#F6F0E6] w-[92vw] max-w-[680px] min-h-[450px] shadow-[0_40px_80px_rgba(0,0,0,0.6)] px-10 py-16 border border-[#d4af37]/30 mb-20"
        style={{ borderRadius: "2px" }}
      >
        <div className="absolute inset-0 opacity-[0.08] bg-[url('/images/paper-texture.jpg')] mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-3 border border-[#d4af37]/40 pointer-events-none" />

        <div className="text-[#d4af37] text-[10px] mb-6">✦ ✦ ✦</div>

        <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[11px] tracking-[6px] uppercase text-[#8b7355] font-medium mb-6 text-center">
          The Honour Of Your Presence
        </p>

        <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[28px] text-[#5c4a3d] italic mb-8 text-center">
          Kindly confirm your attendance
        </h3>

        <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[10px] tracking-[3px] uppercase text-[#8b7355] mb-2">
          for the wedding celebration of
        </p>

        <div className="text-center mb-10">
          <p style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-[32px] text-[#5c4a3d]">{data.groom}</p>
          <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[9px] tracking-[2px] uppercase opacity-60 italic">son of Mr. & Mrs. {data.family.parents[0].name}</p>
          <span style={{ fontFamily: "'Allura', cursive" }} className="text-[#d4af37] text-[24px] my-2 block">&</span>
          <p style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-[32px] text-[#5c4a3d]">{data.bride}</p>
          <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[9px] tracking-[2px] uppercase opacity-60 italic">daughter of Mr. & Mrs. {data.family.parents[1].name}</p>
        </div>

        {/* LUXURY HOTEL COUNTDOWN */}
        {mounted && (
          <div className="flex space-x-3 mb-10">
            {[{v: timeLeft.days, l: 'Days'}, {v: timeLeft.hours, l: 'Hrs'}, {v: timeLeft.minutes, l: 'Mins'}].map((t) => (
              <div key={t.l} className="w-[80px] h-[70px] bg-[rgba(255,255,255,0.4)] backdrop-blur-[6px] border border-[#d4af37]/30 flex flex-col items-center justify-center">
                <span style={{ fontFamily: "'Cinzel', serif" }} className="text-[22px] font-semibold text-[#5c4a3d]">{t.v}</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[8px] tracking-[2px] uppercase text-[#8b7355]">{t.l}</span>
              </div>
            ))}
          </div>
        )}

       {/* THE WHATSAPP RSVP BUTTON */}
        <a 
          href="https://wa.me/91XXXXXXXXXX?text=Hello!%20I%20would%20like%20to%20confirm%20my%20attendance%20for%20Aditya%20%26%20Saanvi's%20wedding."
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="relative z-10 rounded-full border border-[#d4af37] bg-[#6E001D] text-[#d4af37] px-8 py-3 text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-medium transition-all duration-300 ease-in-out shadow-sm hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] hover:bg-[#d4af37] hover:text-[#6E001D] hover:scale-105"
        >
          Confirm Via WhatsApp
        </a>

        <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[12px] italic text-[#8b7355] opacity-60 mt-8">
          Your blessings are our greatest gift.
        </p>
      </motion.div>

      {/* 2. FINAL BLESSING */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center text-center text-[#F6F0E6] z-10"
      >
        <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[24px] italic opacity-90 mb-6">
          With Love,
        </p>
        <h1 style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-[54px] mb-8 drop-shadow-md">
          {data.groom} & {data.bride}
        </h1>
        <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[12px] tracking-[3px] opacity-70 mb-12">
          We look forward to celebrating this beautiful beginning with you.
        </p>
        <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[11px] tracking-[4px] uppercase opacity-60 mb-2">
          {data.date}
        </p>
        <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[11px] tracking-[4px] uppercase opacity-60">
          {data.location}
        </p>
        <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="mt-20 text-[8px] tracking-[4px] uppercase opacity-20">
          Designed with love
        </p>
      </motion.div>
    </section>
  );
}
