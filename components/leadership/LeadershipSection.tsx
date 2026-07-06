'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadershipSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const leaders = [
    {
      name: "DR. FR. SEBASTIAN MATHAI",
      role: "Director",
      quote: "Innovation is not just about ideas, it is about making ideas happen. We strive to create an ecosystem where every student feels empowered to build the future.",
      image: "/Sebastian.webp",
      glowColor: "from-primary/60",
      textColor: "text-primary"
    },
    {
      name: "DR. GRETA D'SOUZA",
      role: "Associate Director",
      quote: "Education is the kindling of a flame, not the filling of a vessel. Our mission is to ignite curiosity and facilitate growth through hands-on experience.",
      image: "/Greta.webp",
      glowColor: "from-secondary/60",
      textColor: "text-secondary"
    },
    {
      name: "DR. SINDU GEORGE",
      role: "Associate Professor",
      quote: "The beautiful thing about learning is that no one can take it away from you.",
      image: "/sindhu mam.webp",
      glowColor: "from-accent/60",
      textColor: "text-accent"
    }
  ];

  return (
    <section id="leadership" className="py-24 md:py-40 bg-white relative border-t border-slate-200">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative">
          
          {/* Left Column: Scrolling Content */}
          <div className="flex flex-col">
            
            {/* Header */}
            <div className="mb-24 lg:pt-10">
              <span className="inline-block py-1.5 px-5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 font-medium text-xs tracking-[0.2em] uppercase mb-6 shadow-sm">
                Visionary Guidance
              </span>
              <h2 className="font-heading font-bold text-5xl md:text-6xl text-slate-900 tracking-tight mb-8">
                Leadership
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-sm"></div>
            </div>

            {/* Leader Blocks */}
            <div className="flex flex-col gap-32 lg:gap-[60vh] lg:pb-[50vh]">
              {leaders.map((leader, i) => (
                <motion.div
                  key={i}
                  onViewportEnter={() => setActiveIndex(i)}
                  viewport={{ amount: 0.4, margin: "-20% 0px -20% 0px" }}
                  className={`transition-all duration-700 ${activeIndex === i ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}
                >
                  <span className={`${leader.textColor} text-sm tracking-[0.2em] uppercase font-bold mb-4 block`}>
                    {leader.role}
                  </span>
                  <h3 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 mb-8 leading-tight">
                    {leader.name}
                  </h3>
                  <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light italic border-l-4 border-slate-200 pl-6">
                    "{leader.quote}"
                  </p>

                  {/* Mobile Inline Image */}
                  <div className="lg:hidden w-full aspect-[4/5] relative rounded-[2rem] overflow-hidden mt-12 shadow-xl border border-slate-200">
                    <Image 
                      src={leader.image} 
                      alt={leader.name} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${leader.glowColor} to-transparent opacity-60 pointer-events-none`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Image Swap */}
          <div className="hidden lg:block lg:sticky lg:top-[15vh] h-[70vh] w-full relative">
            <div className="w-full h-full relative rounded-[3rem] overflow-hidden bg-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-slate-200">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    src={leaders[activeIndex].image} 
                    alt={leaders[activeIndex].name} 
                    fill
                    className="object-cover"
                    sizes="50vw"
                    priority
                  />
                  {/* Subtle Colored Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${leaders[activeIndex].glowColor} to-transparent opacity-70 pointer-events-none mix-blend-overlay`}></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
