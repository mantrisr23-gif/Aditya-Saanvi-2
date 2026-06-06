"use client";

import { weddingData } from "../../data/weddingData";
import "./carousel.css"; // Imports the CSS file you provided

export default function Gallery() {
  const images = weddingData.gallery;

  return (
    // We wrap the carousel in a section that matches the dark theme of the CSS
    <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center bg-black overflow-hidden z-30">
      
      {/* Introduction text bridging the paper theme to the cinematic theme */}
      <div className="absolute top-12 md:top-20 text-center z-10">
        <p className="text-white/50 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4">
          Captured Memories
        </p>
      </div>

      <div className="carousel">
        {/* Left Control Button */}
        <div className="carousel-control-button left">
          <input type="radio" name="carousel-control-input" />
        </div>
        
        {/* Right Control Button */}
        <div className="carousel-control-button right">
          <input type="radio" name="carousel-control-input" defaultChecked />
        </div>

        <div className="carousel-rotation-direction">
          {/* Injecting the total number of images into the CSS variable */}
          <ul 
            className="carousel-item-wrapper" 
            style={{ "--_num-elements": images.length } as React.CSSProperties}
          >
            {images.map((src, idx) => (
              <li 
                className="carousel-item" 
                key={idx}
                // Injecting the index and image URL so the CSS can calculate the 3D position
                style={{ 
                  "--_index": idx + 1, 
                  "--_image-url": `url(${src})` 
                } as React.CSSProperties}
              >
                <a href={src} target="_blank" rel="noopener noreferrer">
                  View Image {idx + 1}
                </a>
              </li>
            ))}
            {/* The ground reflection element */}
            <div className="carousel-ground" />
          </ul>
        </div>
      </div>

    </section>
  );
}