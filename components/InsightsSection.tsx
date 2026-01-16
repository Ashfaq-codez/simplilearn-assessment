import Image from 'next/image';
import RsvpForm from './RsvpForm';

export default function InsightsSection() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      
      {/* 1. IMAGE LAYER */}
      <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[70%] z-0 h-full">
        <Image 
          src="/chess.png" 
          alt="Strategy Chess Pieces" 
          fill
          className="object-cover object-center"
          priority
        />
        {/* ENHANCED GRADIENT FADE: 
            Mobile: Stronger white overlay so text is readable.
            Desktop: Standard fade.
        */}
        <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-white/90 md:bg-gradient-to-r md:from-white md:via-white/60 md:to-transparent"></div>
      </div>

      {/* 2. TEXT CONTENT LAYER */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pointer-events-none">
        
        <div className="w-full lg:w-[75%] pointer-events-auto">
          
           {/* TITLE */}
           <div className="mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#F5A623] leading-tight md:-ml-12 drop-shadow-sm">
                 Go behind the curtain with real <br />
                 examples and high-scale insights
               </h2>
           </div>

           {/* POINTS */}
           <div className="pl-0 md:pl-1 pr-0 md:pr-4 mb-10 md:mb-16">
               <p className="text-black text-xl md:text-2xl font-medium mb-8 md:mb-12">
                 You&apos;ll walk away with:
               </p>

               <div className="space-y-8 md:space-y-12">
                 <InsightItem text="A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months." />
                 <InsightItem text="Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure." />
                 <InsightItem text="Signals for where capability gaps may already be forming in your organization." />
                 <InsightItem text="Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale." />
                 <InsightItem text="Actionable insights you can take straight into your next exec meeting." />
               </div>
           </div>

           {/* RSVP FORM */}
           <div className="w-full">
              <RsvpForm className="w-full" placeholderText="Enter your work email to confirm your attendance" />
           </div>

        </div>
      </div>
    </section>
  );
}

// Helper Component
function InsightItem({ text }: { text: string }) {
  return (
    <div className="flex gap-4 md:gap-6 items-start relative">
      <div className="w-[3px] bg-[#F5A623] shrink-0 h-12 md:h-16 mt-1"></div>
      <p className="text-lg md:text-[24px] text-slate-900 leading-relaxed font-normal drop-shadow-sm">
        {text}
      </p>
    </div>
  );
}