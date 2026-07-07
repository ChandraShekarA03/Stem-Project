'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Atom } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Use 'vh' instead of '%' for massive performance gains (prevents layout recalculation on every frame)
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const textVariants: any = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <section ref={containerRef} id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background pt-32 pb-40">
      
      {/* High-Performance Hardware Accelerated Parallax */}
      <motion.div 
        style={{ y, willChange: "transform" }} 
        className="absolute inset-0 z-0 w-full h-full transform-gpu"
      >
        <video 
          src="/STEM_hero_background.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-100 scale-[1.4] md:scale-[1.35]"
        />
        {/* Subtle overlay gradient to blend with the next section at the very bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent"></div>
        {/* A very light overall overlay just to guarantee text contrast */}
        <div className="absolute inset-0 bg-white/10"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl w-full px-6 flex flex-col items-center gap-8 mt-16">
        
        {/* High-Performance glow behind text (No CSS blur, No mix-blend-mode) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-5xl h-[60vh] pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)'
          }}
        ></div>

        
        {/* Animated Badge */}
        <motion.div 
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md text-sm font-medium tracking-wide text-primary shadow-sm hover:shadow-md transition-shadow cursor-default"
        >
          <Atom size={18} className="text-accent animate-[spin_10s_linear_infinite]" />
          Pioneering Global Innovation
        </motion.div>

        {/* Huge Typography Hero */}
        <div className="text-center flex flex-col items-center">
          <motion.h1 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter text-slate-900 drop-shadow-md leading-[1.05]"
          >
            Global <span className="text-gradient">STEM</span>
          </motion.h1>
          <motion.h1 
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter text-slate-900 drop-shadow-md leading-[1.05]"
          >
            Education Centre
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div 
          custom={4}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-col items-center gap-6 mt-6"
        >
          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl text-center leading-relaxed">
            A historic partnership integrating Indian excellence with Australian innovation to redefine global education.
          </p>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 uppercase tracking-widest mt-4">
            <span className="hover:text-primary transition-colors cursor-default">Christ University</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span className="hover:text-primary transition-colors cursor-default">ACU</span>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm shadow-sm"
        >
          <ChevronDown className="text-primary" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
