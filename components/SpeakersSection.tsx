import Image from 'next/image';

export default function SpeakersSection() {
  return (
    <section className="bg-[#2563EB] py-16 md:py-24 border-b border-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#F5A623] mb-12 md:mb-16 text-left">
          Featured Speakers
        </h2>
        
        {/* Speakers List */}
        <div className="space-y-12 md:space-y-12 w-full">
          
          <SpeakerRow 
            name="Rob Lauber" 
            role="Former CLO McDonald's" 
            imgSrc="/1.jpg"
            bio="Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI."
          />

          <SpeakerRow 
            name="Krishna Kumar" 
            role="Founder & CEO, Simplilearn" 
            imgSrc="/2.png"
            bio="Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn't, in building workforce readiness for the AI era."
          />

          <SpeakerRow 
            name="Sudipto Mitra" 
            role="CRO, Simplilearn" 
            imgSrc="/3.jpg"
            bio="Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion."
          />

        </div>
 
        {/* BOTTOM BANNER */}
        <div className="mt-16 md:mt-20 relative bg-[#3B82F6] rounded-lg p-6 md:p-12 overflow-hidden border border-blue-400/30 shadow-lg">
           
           <div className="absolute inset-0 pointer-events-none">
             <Image 
               src="/5.png"
               alt="Background Pattern"
               fill
               className="object-cover opacity-120"
             />
           </div>
           
           <div className="relative z-10">
              <h3 className="text-[#67e8f9] font-bold text-2xl md:text-3xl mb-4">
                Additional Expert Perspectives
              </h3>
              <p className="text-white text-lg md:text-2xl leading-relaxed max-w-7xl">
                Invited experts from leading consulting and enterprise learning organizations will contribute short perspectives, offering insight into how large organizations are evolving skills and leadership models in the AI era.
              </p>
           </div>
           
           {/* Decorative Blur - Hidden on mobile to save space/performance */}
           <div className="absolute right-10 bottom-10 w-32 h-32 bg-white/10 blur-2xl rounded-full hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}

// Reusable Speaker Row Component
function SpeakerRow({ name, role, bio, imgSrc }: { name: string, role: string, bio: string, imgSrc: string }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
      {/* Image Container */}
      <div className="w-full md:w-100 h-80 md:h-100 flex-shrink-0 relative rounded-lg overflow-hidden bg-gray-200 shadow-xl">
         <Image 
           src={imgSrc} 
           alt={name} 
           fill 
           className="object-cover object-top" 
         />
      </div>
      
      {/* Text Content */}
      <div className="flex-grow pt-0 md:pt-2">
        <h3 className="text-3xl md:text-5xl font-bold text-[#67e8f9] mb-1">{name}</h3>
        <p className="text-lg md:text-[27px] text-white/95 font-medium leading-relaxed tracking-wide">
           {bio}
        </p>
      </div>
    </div>
  );
}