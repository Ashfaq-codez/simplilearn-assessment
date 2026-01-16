export default function AgendaSection() {
  return (
    <section className="bg-[#67e8f9] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#1544AD] mb-8 md:mb-12 text-left">
          Event Agenda
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <AgendaCard 
            title="Welcome & Opening"
            middleText="Sudipto Mitra, CRO Simplilearn"
            description="Why capability-building is now a board-level issue and what’s changing in the workforce landscape."
          />

          {/* Card 2 */}
          <AgendaCard 
            title={
              <>
                Keynote: <br /> 
                What Enterprise Leaders Are Seeing on the Ground
              </>
            }
            middleText="Rob Lauber, Former CLO McDonald’s"
            description="A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
          />

          {/* Card 3 - Custom Title Font */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm flex flex-col h-full min-h-auto md:min-h-[420px]">
            
            {/* 1. TOP ZONE */}
            <div className="min-h-auto md:min-h-[140px] mb-4 md:mb-0">
              <h3 className="text-2xl md:text-3xl lg:text-[29px] font-bold text-[#1544AD] font-serif leading-tight">
                Lunch & Executive <br /> Conversation
              </h3>
            </div>
            
            {/* 2. MIDDLE ZONE */}
            <div className="min-h-auto md:min-h-[60px] flex flex-col justify-center mb-4 md:mb-0">
              <p className="text-black font-bold text-lg md:text-xl">
                Industry Experts Invited
              </p>
            </div>
            
            {/* 3. BOTTOM ZONE */}
            <div className="mt-0 md:mt-4">
              <p className="text-slate-900 text-lg md:text-[22px] leading-relaxed">
                What large enterprise talent ecosystems are learning about capability-building at scale.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function AgendaCard({ title, middleText, description }: { title: React.ReactNode, middleText: string, description: string }) {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-sm flex flex-col h-full min-h-auto md:min-h-[400px]">
      
      {/* 1. TOP ZONE: Fixed Height on Desktop only */}
      <div className="min-h-auto md:min-h-[140px] mb-4 md:mb-0">
        <h3 className="text-2xl md:text-[26px] font-bold text-[#1544AD] leading-tight">
          {title}
        </h3>
      </div>
      
      {/* 2. MIDDLE ZONE */}
      <div className="min-h-auto md:min-h-[60px] flex flex-col justify-center mb-4 md:mb-0">
        <p className="text-black font-bold text-lg md:text-xl">
          {middleText}
        </p>
      </div>
      
      {/* 3. BOTTOM ZONE */}
      <div className="mt-0 md:mt-4">
        <p className="text-slate-900 text-lg md:text-[20px] leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
}