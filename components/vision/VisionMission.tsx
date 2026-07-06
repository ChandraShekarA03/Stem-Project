'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, Target, BookOpen, Search, Globe2 } from 'lucide-react';

function ObjectiveCard({ obj, i }: { obj: any, i: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
      className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-transparent overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] transition-all duration-500 hover:-translate-y-2 z-10"
    >
      {/* CSS-only Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>
      
      {/* Inner Card Backdrop */}
      <div className="absolute inset-[1px] bg-white/90 rounded-[2.5rem] -z-10"></div>
      
      {/* Floating Animated Icon Container */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: i * 0.3 }}
        className={`w-20 h-20 rounded-2xl ${obj.bg} flex items-center justify-center mb-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative`}
      >
         {/* Glow behind icon */}
         <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <obj.icon size={36} className={`${obj.color} relative z-10`} strokeWidth={1.5} />
      </motion.div>

      <h4 className="font-heading font-bold text-2xl text-slate-900 mb-5 group-hover:text-primary transition-colors duration-300">{obj.title}</h4>
      
      <div className="w-12 h-[3px] bg-slate-100 mb-6 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-700 ease-in-out"></div>
      
      <p className="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{obj.description}</p>
    </motion.div>
  );
}

export default function VisionMission() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-50%"]
  );

  const objectives = [
    {
      title: "Academic Excellence",
      icon: BookOpen,
      color: "text-primary",
      bg: "bg-primary/10",
      description: "Fostering a curriculum that meets international standards and promotes critical thinking."
    },
    {
      title: "Collaborative Research",
      icon: Search,
      color: "text-secondary",
      bg: "bg-secondary/10",
      description: "Encouraging joint research projects that address global challenges."
    },
    {
      title: "Global Immersion",
      icon: Globe2,
      color: "text-accent",
      bg: "bg-accent/10",
      description: "Providing students with opportunities for international exposure and cross-cultural learning."
    }
  ];

  return (
    <div className="relative bg-white" id="vision-mission">
      
      {/* High-Performance Horizontal Scroll Section */}
      <section ref={containerRef} id="vision-mission-scroll" className="h-[150vh] relative">
        <div className="sticky top-0 h-[100vh] overflow-hidden flex items-center">
          
          <motion.div 
            style={{ x, willChange: "transform" }} 
            className="flex w-[200vw] h-full transform-gpu"
          >
            
            {/* Vision Panel */}
            <div className="w-[100vw] h-full flex items-center justify-center relative flex-shrink-0 bg-white">
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
              </div>
              
              <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-8 shadow-sm">
                  <Eye className="text-primary" size={32} />
                </div>
                <h2 className="font-heading font-semibold text-2xl md:text-3xl text-primary tracking-widest uppercase mb-8">Our Vision</h2>
                <h3 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.2] tracking-tight">
                  To be a premier global center for STEM education, fostering <span className="text-gradient">innovative thinkers</span> and ethical leaders.
                </h3>
              </div>
            </div>

            {/* Mission Panel */}
            <div className="w-[100vw] h-full flex items-center justify-center relative bg-slate-50 flex-shrink-0 border-l border-slate-200">
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
              </div>
              
              <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-8 shadow-sm">
                  <Target className="text-secondary" size={32} />
                </div>
                <h2 className="font-heading font-semibold text-2xl md:text-3xl text-secondary tracking-widest uppercase mb-8">Our Mission</h2>
                <h3 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.3] tracking-tight font-light">
                  To provide world-class, interdisciplinary STEM education through <strong className="font-bold text-slate-900">experiential learning</strong>, cutting-edge research, and robust international collaborations.
                </h3>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives-section" className="py-40 relative z-20 bg-slate-50/30 overflow-hidden border-t border-slate-200">
        
        {/* Ambient Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="inline-block py-1 px-4 rounded-full border border-slate-200 bg-slate-50 text-slate-600 font-medium text-xs tracking-widest uppercase mb-6">
              Strategic Focus
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 tracking-tight">Core Objectives</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((obj, i) => (
              <ObjectiveCard key={i} obj={obj} i={i} />
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
