'use client'

import Image from 'next/image';
import RsvpForm from './RsvpForm';

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[500px] md:min-h-[600px] flex flex-col">
      
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/foot.png"
          alt="Steak House Building Background" 
          fill 
          priority
          className="object-cover object-[50%_35%]"
          quality={90}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="container mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-8 relative z-10 flex flex-col justify-between flex-grow min-h-[500px] md:min-h-[600px]">
        
        {/* --- TOP SECTION: Heading & Form --- */}
        <div className="w-full">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-10 md:mb-18 drop-shadow-md tracking-tight">
            Space is limited.
          </h2>
          
          <div className="w-full max-w-5xl mb-8 md:mb-12">
            <RsvpForm 
              placeholderText="Enter your work email"
              className="w-full"
            />
          </div>
        </div>

        {/* --- BOTTOM SECTION: Logo & Rights --- */}
        <div className="mt-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-t border-white/10 pt-6 md:border-none md:pt-0">
          
          {/* Logo */}
          <div className="relative w-48 h-12 md:w-72 md:h-20 -ml-2 md:ml-0 mb-2 md:mb-0">
            <Image
              src="/logo.png"
              alt="Simplilearn Logo"
              fill
              className="object-contain object-left-bottom"
            />
          </div>

          {/* Copyright Text */}
          <p className="text-white/80 text-sm md:text-xl font-medium tracking-wide pb-1">
            © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}