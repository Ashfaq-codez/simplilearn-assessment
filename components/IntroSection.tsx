import RsvpForm from './RsvpForm';

export default function IntroSection() {
  return (
    <section className="bg-white py-12 md:py-20 border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* 1. LEFT ALIGNED CONTENT WRAPPER */}
        <div className="w-full text-left">
           
           {/* Top Form */}
           <div className="mb-12 md:mb-16 w-full max-w-4xl">
              <RsvpForm />
           </div>

           {/* Paragraphs - Text size scaled down for mobile */}
           <div className="w-full space-y-6 md:space-y-8 text-xl md:text-3xl leading-relaxed text-slate-900 font-normal">
               <p className="max-w-8xl">
                 AI is accelerating change across every operational layer. Roles are shifting. Leadership models are collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and intelligent agents.
               </p>
               <p>
                 But even the most advanced enterprises are asking the same question:
               </p>
           </div>
        </div>

        {/* 2. CENTERED BOLD QUESTION */}
        <div className="w-full text-center my-12 md:my-20">
          <h2 className="text-3xl md:text-6xl lg:text-8xl font-black text-black leading-tight md:leading-relaxed">
            Which capabilities will matter most, <br className="hidden md:block" />
            and how do we build them at scale?
          </h2>
        </div>

        {/* 3. BOTTOM TEXT */}
        <div className="w-full text-left">
           <p className="text-xl md:text-3xl leading-relaxed text-slate-900 font-normal max-w-8xl">
             This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level discussion on what&apos;s coming next.
           </p>
        </div>

      </div>
    </section>
  );
}