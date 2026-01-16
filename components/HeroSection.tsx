import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden min-h-[600px] md:min-h-[750px] flex flex-col justify-center">
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/simpli.jpg" 
          alt="Network Background" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-12">
        
        {/* 2. LOGO */}
        <div className="mb-12 md:mb-20 relative w-48 h-20 md:w-60 md:h-25">
          <Image 
            src="/logo.png" 
            alt="Simplilearn" 
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* 3. BADGE */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 md:mb-10 select-none">
          
          {/* Left: Cyan Box */}
          <div className="bg-[#67e8f9] px-5 py-4 rounded-[4px] shadow-[0_0_15px_rgba(103,232,249,0.4)] w-fit">
             <span className="text-[#172554] text-[20px] md:text-[25px] font-black tracking-lean leading-none block [-webkit-text-stroke:0.5px_black] md:[-webkit-text-stroke:0.9px_black] drop-shadow-[0_2px_1px_rgba(0,0,0,0.2)]">
               Invite-Only
             </span>
          </div>
          
          {/* Right: Serif Text */}
          <div className="text-[#67e8f9] text-[22px] md:text-[26px] font-serif tracking-wide antialiased">
            An Executive Roundtable · Lunch
          </div>

        </div>

        {/* 4. HEADLINES */}
        <div className="space-y-3 mb-10 md:mb-12">
          {/* Responsive Font Sizes: text-4xl on mobile, scaling up to original size on LG */}
          <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-bold text-[#F5A623] leading-[1.1] tracking-tight">
            The Skills That Matter Next:
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-[3.8rem] font-medium text-[#F5A623] leading-[1.1] tracking-tight">
            Preparing Your Workforce <br className="hidden lg:block" /> & Leaders for the AI Era
          </h3>
        </div>

        {/* 5. DATE & LOCATION */}
        <div className="flex flex-col gap-3 md:gap-4 text-xl md:text-3xl font-bold text-white/95 pl-1">
          <div className="flex items-center gap-3">
            <Calendar className="text-white h-5 w-5 md:h-6 md:w-6 stroke-[3]" />
            <span>February 20, 2026</span>
          </div>
          <div className="flex items-start md:items-center gap-3">
            <MapPin className="text-white h-5 w-5 md:h-6 md:w-6 stroke-[3] mt-1 md:mt-0" />
            <span>Chamberlain&apos;s Steak & Fish House, Dallas</span>
          </div>
        </div>

      </div>
    </section>
  );
}