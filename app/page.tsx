import Image from 'next/image';
import RsvpForm from '@/components/RsvpForm';
import { Calendar, MapPin, Clock, Users, BarChart3, ShieldCheck, MessageSquare, Rocket } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen font-sans text-gray-900 bg-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
           {/* REPLACE THIS SRC with your actual local file 'public/hero-bg.jpg' for 100% fidelity */}
           <Image 
             src="/public/Simple-hero.jpg" 
             alt="Network Background" 
             fill 
             className="object-cover opacity-40"
             priority
           />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          {/* Logo Placeholder */}
          <div className="mb-12">
            <h1 className="text-2xl font-bold tracking-tight text-white">simplilearn</h1>
          </div>

          {/* The Specific "Invite Only" Badge */}
          <div className="inline-flex items-center bg-black/40 border border-cyan-500/50 rounded-full pl-1 pr-4 py-1 mb-8 backdrop-blur-sm">
            <span className="bg-[#00D084] text-black text-[10px] font-bold px-2 py-0.5 rounded-sm mr-3 uppercase tracking-wider">
              Invite-Only
            </span>
            <span className="text-cyan-300 text-sm font-medium tracking-wide">
              An Executive Roundtable - Live
            </span>
          </div>

          {/* Headlines */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-[#F5A623] leading-[1.1]">
            The Skills That Matter Next:
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-5xl font-bold text-[#FFF8E7] mb-10 leading-[1.1]">
            Preparing Your Workforce <br className="hidden md:block" /> & Leaders for the AI Era
          </h3>

          {/* Date & Location Info */}
          <div className="flex flex-col md:flex-row gap-8 mb-12 text-lg font-medium text-white/90">
            <div className="flex items-center gap-3">
              <Calendar className="text-white h-5 w-5" />
              <span>February 20, 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-white h-5 w-5" />
              <span>Chamberlain&apos;s Steak & Fish House, Dallas</span>
            </div>
          </div>

          {/* Hero RSVP Form */}
          <div className="max-w-xl mb-16">
            <RsvpForm placeholderText="Enter your work email to confirm your attendance" />
          </div>

          {/* Hero Text Content */}
          <div className="max-w-4xl space-y-6 text-gray-200 text-lg leading-relaxed">
            <p>
              AI is accelerating change across every operational layer. Roles are shifting. Leadership models are collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and intelligent agents.
            </p>
            {/* The Quote with the Orange Bar */}
            <div className="border-l-[4px] border-[#F5A623] pl-6 py-1 my-8">
              <p className="text-white font-bold text-xl md:text-2xl leading-snug">
                But even the most advanced enterprises are asking the same question: <br/>
                <span className="block mt-2">Which capabilities will matter most, and how do we build them at scale?</span>
              </p>
            </div>
            <p>
              This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level discussion on what&apos;s coming next.
            </p>
          </div>
        </div>
      </section>

      {/* ================= "WHAT WE'LL EXPLORE" GRID ================= */}
      <section className="bg-[#F8FAFC] py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#F5A623] mb-3">What We&apos;ll Explore</h2>
          <p className="text-gray-600 mb-12 text-lg">The critical shifts every enterprise must plan for:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExploreCard icon={<Clock />} title="Skills Decay" desc="every 2-3 years faster for technical skills" />
            <ExploreCard icon={<Users />} title="Manager Role Shift" desc="orchestrating people + AI agents" />
            <ExploreCard icon={<BarChart3 />} title="Leaders + AI Co-Pilots" desc="requires sensemaking and systems thinking" />
            <ExploreCard icon={<ShieldCheck />} title="Frontline Capability" desc="now depends on digital fluency" />
            <ExploreCard icon={<MessageSquare />} title="Core Human Capabilities" desc="analytical reasoning and scenario planning" />
            <ExploreCard icon={<Rocket />} title="Winning Organizations" desc="predict skills ahead of demand" />
          </div>
        </div>
      </section>

      {/* ================= SPEAKERS SECTION ================= */}
      <section className="bg-[#1d4ed8] py-24 px-6 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-[#F5A623] mb-16">Featured Speakers</h2>
          <div className="space-y-12">
            <SpeakerRow 
              name="Rob Lauber" role="Former CLO McDonald's" 
              bio="Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's."
            />
            <SpeakerRow 
              name="Krishna Kumar" role="Founder & CEO, Simplilearn" 
              bio="Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. He brings a unique perspective on how roles and leadership expectations are evolving."
            />
             <SpeakerRow 
              name="Sudipto Mitra" role="CRO, Simplilearn" 
              bio="Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. He previously held leadership roles at Accenture and IBM."
            />
          </div>

          {/* Blue Expert Box */}
          <div className="mt-20 bg-[#3b82f6] rounded-lg p-8 border border-blue-400">
             <h4 className="text-cyan-300 font-bold text-lg mb-3">Additional Expert Perspectives</h4>
             <p className="text-blue-50 text-sm leading-relaxed max-w-3xl">
               Invited experts from leading consulting and enterprise learning organizations will contribute short perspectives, offering insight into how large organizations are evolving skills and leadership models in the AI era.
             </p>
          </div>
        </div>
      </section>

      {/* ================= INSIGHTS / CHESS SECTION ================= */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5A623] mb-8 leading-tight">
              Go behind the curtain with real examples and high-scale insights
            </h2>
            <p className="text-gray-900 font-semibold mb-8 text-lg">You&apos;ll walk away with:</p>
            
            <div className="space-y-6">
               <InsightItem text="A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months." />
               <InsightItem text="Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure." />
               <InsightItem text="Signals for where capability gaps may already be forming in your organization." />
               <InsightItem text="Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale." />
               <InsightItem text="Actionable insights you can take straight into your next exec meeting." />
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              {/* Using the form here again as per design */}
              <div className="w-full max-w-md">
                 <RsvpForm />
              </div>
            </div>
          </div>

          {/* Chess Image Placeholder */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            {/* REPLACE THIS with public/chess.png */}
            <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop" 
                  alt="Chess Pieces Strategy" 
                  fill 
                  className="object-contain"
                />
            </div>
          </div>
        </div>
      </section>

      {/* ================= AGENDA SECTION ================= */}
      <section className="bg-[#06b6d4] py-24 px-6"> {/* Cyan-500 approx */}
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Event Agenda</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <AgendaCard 
              title="Welcome & Opening"
              speaker="Sudipto Mitra, CRO Simplilearn"
              desc="Why capability-building is now a board-level issue and what's changing in the workforce landscape."
            />
            <AgendaCard 
              title="Keynote: What Enterprise Leaders Are Seeing on the Ground"
              speaker="Rob Lauber, Former CLO McDonald's"
              desc="A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
            />
            <AgendaCard 
              title="Lunch & Executive Conversation"
              speaker="Industry Experts Invited"
              desc="What large enterprise talent ecosystems are learning about capability-building at scale."
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative bg-[#0f172a] text-white py-24 px-6 overflow-hidden">
         {/* Footer Background Image */}
         <div className="absolute inset-0 z-0">
           {/* REPLACE with public/footer-bg.jpg */}
           <Image 
             src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
             alt="Steakhouse Background" 
             fill 
             className="object-cover opacity-30"
           />
        </div>

        <div className="relative z-10 container mx-auto text-center md:text-left">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-md">Space is limited.</h2>
              
              {/* White Box for Form */}
              <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm shadow-xl mb-16">
                 <RsvpForm className="text-gray-900" placeholderText="Enter your work email..." />
              </div>
           </div>

           <div className="border-t border-gray-600/50 pt-8 flex flex-col md:flex-row justify-between items-center opacity-80 text-sm">
              <div className="text-2xl font-bold tracking-tight mb-4 md:mb-0">simplilearn</div>
              <p>© 2009-2026 - Simplilearn Solutions. All Rights Reserved.</p>
           </div>
        </div>
      </footer>
    </main>
  );
}

// ================= HELPER COMPONENTS =================

function ExploreCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all h-full">
      <div className="mb-4 bg-blue-50 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function SpeakerRow({ name, role, bio }: { name: string, role: string, bio: string }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      {/* Speaker Image Placeholder */}
      <div className="w-40 h-40 flex-shrink-0 relative rounded-xl overflow-hidden bg-blue-800 border-[3px] border-[#F5A623]/30">
         <Image 
            src={`https://ui-avatars.com/api/?name=${name}&background=0D8ABC&color=fff&size=256`}
            alt={name}
            fill
            className="object-cover"
         />
      </div>
      <div className="flex-grow pt-2">
        <h3 className="text-2xl font-bold text-[#67e8f9] mb-1">{name}</h3>
        <p className="text-sm text-blue-100 mb-4 font-semibold uppercase tracking-wide">{role}</p>
        <p className="text-blue-50 leading-relaxed text-[15px] opacity-90">{bio}</p>
      </div>
    </div>
  );
}

function InsightItem({ text }: { text: string }) {
  return (
    <div className="flex gap-4 items-start">
       {/* The orange vertical bar */}
       <div className="w-1 self-stretch bg-[#F5A623] rounded-full flex-shrink-0 min-h-[1.5rem] mt-1 mb-1"></div>
       <p className="text-gray-700 leading-relaxed text-[15px] font-medium py-0.5">{text}</p>
    </div>
  );
}

function AgendaCard({ title, speaker, desc }: { title: string, speaker: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full border border-cyan-100">
      <h3 className="text-blue-700 font-bold text-lg mb-4 min-h-[3.5rem]">{title}</h3>
      <p className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wide">{speaker}</p>
      <p className="text-sm text-gray-600 leading-relaxed mt-auto">{desc}</p>
    </div>
  );
}