import { History, GitFork, BarChart3, ShieldCheck, BrainCircuit, Rocket } from 'lucide-react';

export default function ExploreSection() {
  return (
    <section className="bg-[#E8F1FA] py-16 md:py-24 border-t border-b border-black">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* 1. SECTION HEADERS */}
        <div className="mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#F5A623] mb-6 md:mb-14">
              What We&apos;ll Explore
            </h2>
            <p className="text-slate-900 text-2xl md:text-3xl font-medium">
              The critical shifts every enterprise must plan for:
            </p>
        </div>

        {/* 2. GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          <ExploreCard 
            icon={<History className="w-8 h-8" />} 
            title="Skills Decay" 
            line1="every 2-3 years" 
            line2="faster for technical skills" 
          />
          
          <ExploreCard 
            icon={<GitFork className="w-8 h-8 rotate-180" />} 
            title="Manager Role Shift" 
            line1="orchestrating" 
            line2="people + AI agents" 
          />
          
          <ExploreCard 
            icon={<BarChart3 className="w-8 h-8" />} 
            title="Leaders + AI Co-Pilots" 
            line1="requires sensemaking" 
            line2="and systems thinking" 
          />
          
          <ExploreCard 
            icon={<ShieldCheck className="w-8 h-8" />} 
            title="Frontline Capability" 
            line1="now depends" 
            line2="on digital fluency" 
          />
          
          <ExploreCard 
            icon={<BrainCircuit className="w-8 h-8" />} 
            title="Core Human Capabilities" 
            line1="analytical reasoning" 
            line2="and scenario planning" 
          />
          
          <ExploreCard 
            icon={<Rocket className="w-8 h-8" />} 
            title="Winning Organizations" 
            line1="predict skills" 
            line2="ahead of demand" 
          />

        </div>
      </div>
    </section>
  );
}

// 3. REUSABLE CARD COMPONENT
function ExploreCard({ icon, title, line1, line2 }: { icon: React.ReactNode, title: string, line1: string, line2: string }) {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-[0_20px_30px_-5px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-shadow h-full flex flex-col items-start border border-slate-50">
      
      {/* HEADER ROW */}
      <div className="flex items-start gap-4 mb-4 md:mb-6">
        <div className="text-[#2563EB] shrink-0 ">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">
          {title}
        </h3>
      </div>
      {/* Description Lines */}
      <div className="text-lg md:text-[22px] text-slate-800 font-medium leading-relaxed">
        <p>{line1}</p>
        <p>{line2}</p>
      </div>
    </div>
  );
}