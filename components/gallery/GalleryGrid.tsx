'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function GalleryGrid() {
  const images = [
    {
      src: "/Inaugural/1.webp",
      alt: "Inaugural Event",
      className: "md:col-span-2 md:row-span-2", // Large Hero
      category: "Event"
    },
    {
      src: "/ReportPics/2.webp",
      alt: "Innovation Labs",
      className: "md:col-span-1 md:row-span-1", // Standard
      category: "Facility"
    },
    {
      src: "/ReportPics/5.webp",
      alt: "Advanced Research",
      className: "md:col-span-1 md:row-span-2", // Tall
      category: "Research"
    },
    {
      src: "/ReportPics/9.webp",
      alt: "Campus Life",
      className: "md:col-span-1 md:row-span-1", // Standard
      category: "Campus"
    },
    {
      src: "/ReportPics/6.webp",
      alt: "Global Collaboration",
      className: "md:col-span-2 md:row-span-1", // Wide
      category: "Initiative"
    },
    {
      src: "/Inaugural/2.webp",
      alt: "Keynote Address",
      className: "md:col-span-1 md:row-span-1", // Standard
      category: "Event"
    },
    {
      src: "/ReportPics/8.webp",
      alt: "Student Innovation",
      className: "md:col-span-1 md:row-span-1", // Standard
      category: "Students"
    }
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-slate-50 border-t border-slate-200 relative">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 py-1.5 px-5 rounded-full border border-slate-200 bg-white text-slate-600 font-medium text-xs tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles size={14} className="text-primary" />
            <span>Campus & Innovation</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight mb-6">
            Visualizing the <span className="text-primary">Future</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-lg font-light leading-relaxed">
            Explore the state-of-the-art facilities and vibrant campus life driving our joint initiatives globally.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px] grid-flow-row-dense">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200 bg-slate-100 ${img.className}`}
            >
              {/* Colored Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay pointer-events-none"></div>
              
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Glassmorphism Label */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/90 backdrop-blur-xl rounded-2xl p-4 md:p-5 border border-white/50 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <span className="text-primary text-[10px] md:text-xs tracking-widest uppercase font-bold block mb-1">
                  {img.category}
                </span>
                <span className="text-slate-900 font-bold text-sm md:text-base leading-tight block">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
