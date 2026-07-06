'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Users, Microscope, Network } from 'lucide-react';

function InitiativeCard({ init, i, variants }: { init: any, i: number, variants: any }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      onMouseMove={handleMouseMove}
      className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-transparent transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 z-10 overflow-hidden"
    >
      {/* Magic Spotlight Background following Mouse */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37,99,235,0.06), transparent 40%)`
        }}
      />
      {/* Magic Glowing Border following Mouse */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-20 blur-[2px]"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37,99,235,0.6), rgba(109,40,217,0.6), transparent 60%)`
        }}
      />
      {/* Inner Card Background */}
      <div className="absolute inset-[1px] bg-white rounded-3xl -z-10"></div>

      {/* Large Watermark Icon */}
      <div className="absolute -top-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.06] transition-all duration-700 transform group-hover:scale-150 group-hover:rotate-12 -z-10">
        <init.icon size={120} className="text-primary" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Constantly Floating Icon Container */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: i * 0.2 }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500"
        >
          <init.icon size={26} strokeWidth={1.5} />
        </motion.div>

        <h4 className="font-heading font-bold text-xl text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">{init.title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">{init.desc}</p>

        {/* Interactive Learn More Link */}
        <div className="flex items-center gap-2 text-slate-900 text-sm font-semibold group-hover:text-primary transition-colors duration-300 mt-auto w-fit">
          <span className="relative">
            Explore
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </span>
          <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

export default function AllianceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const initiatives = [
    { title: 'Student Faculty Exchange', icon: Users, desc: 'Cross-cultural immersion programs for future leaders.' },
    { title: 'Collaborative Research', icon: Microscope, desc: 'Joint funding for high-impact scientific studies.' },
    { title: 'Community Partnerships', icon: Network, desc: 'Bridging the gap between academia and industry.' },
    { title: 'Global Immersion', icon: Globe, desc: 'International exposure tailored for modern innovators.' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" }
    })
  };

  return (
    <section id="alliance" ref={containerRef} className="relative py-32 bg-slate-50 overflow-hidden border-t border-slate-200">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] mix-blend-multiply -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-white text-primary font-medium text-xs tracking-widest uppercase mb-6 shadow-sm">
              International Alliance
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
              Bridging <br /><span className="text-gradient">Continents.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pb-4"
          >
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg">
              A historic partnership combining Indian academic excellence with Australian innovation to create a premier global research ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-32">

          {/* CHRIST Panel */}
          <motion.div
            style={{ y: y1 }}
            className="lg:col-span-5 glass-card relative group overflow-hidden bg-white hover:bg-slate-50/80"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 flex flex-col h-full items-center text-center">
              <div className="w-32 h-32 mb-8 flex items-center justify-center">
                <Image src="/logo.webp" alt="CHRIST" width={128} height={128} className="object-contain" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-slate-900 mb-1">CHRIST</h3>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold mb-6 block">(Deemed to be University)</span>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                A premier educational institution in India, recognized for holistic education, academic discipline, and world-class infrastructure.
              </p>
              <div className="flex flex-col items-center w-full gap-4 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-4 text-slate-700 font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">✓</div>
                  NAAC &apos;A+&apos; Grade
                </div>
                <div className="flex items-center gap-4 text-slate-700 font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">✓</div>
                  25,000+ Students
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Connection Element with Animated Data Streams */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center relative w-full h-full">

            {/* The base connecting track */}
            <div className="absolute top-1/2 left-[-30%] w-[160%] h-px bg-slate-200 -translate-y-1/2"></div>

            {/* Data stream moving Left to Right */}
            <div className="absolute top-1/2 left-[-30%] w-[160%] h-[2px] -translate-y-1/2 overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "300%"] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
              ></motion.div>
            </div>

            {/* Data stream moving Right to Left */}
            <div className="absolute top-1/2 left-[-30%] w-[160%] h-[2px] -translate-y-1/2 overflow-hidden">
              <motion.div
                animate={{ x: ["300%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "linear", delay: 1 }}
                className="w-1/4 h-full bg-gradient-to-l from-transparent via-secondary to-transparent"
              ></motion.div>
            </div>

            {/* Central Node */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-20 h-20 rounded-full bg-white border border-slate-100 flex items-center justify-center text-primary relative z-10 shadow-[0_0_30px_rgba(37,99,235,0.15)]"
            >
              {/* Outer Ping */}
              <div className="absolute inset-0 rounded-full bg-primary/5 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              {/* Spinning Ring */}
              <div className="absolute inset-2 rounded-full border-t border-primary/40 animate-[spin_4s_linear_infinite]"></div>
              <div className="absolute inset-2 rounded-full border-b border-secondary/40 animate-[spin_6s_linear_infinite_reverse]"></div>
              <Globe size={28} className="text-primary" />
            </motion.div>
          </div>

          {/* ACU Panel */}
          <motion.div
            style={{ y: y2 }}
            className="lg:col-span-5 glass-card relative group overflow-hidden bg-white hover:bg-slate-50/80"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 flex flex-col h-full items-center text-center">
              <div className="w-32 h-32 mb-8 flex items-center justify-center">
                <Image src="/ACU.webp" alt="ACU" width={128} height={128} className="object-contain" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-slate-900 mb-1">ACU</h3>
              <span className="text-secondary text-xs tracking-[0.2em] uppercase font-semibold mb-6 block">Australian Catholic University</span>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                A publicly funded university in Australia, ranked in the top 2% of universities worldwide, focusing on societal impact and pioneering research.
              </p>
              <div className="flex flex-col items-center w-full gap-4 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-4 text-slate-700 font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-sm">✓</div>
                  Top 2% Globally
                </div>
                <div className="flex items-center gap-4 text-slate-700 font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-sm">✓</div>
                  7 Campuses
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Initiatives Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-6 mb-12">
            <h3 className="font-heading font-semibold text-2xl text-slate-900">Strategic Initiatives</h3>
            <div className="h-px flex-grow bg-gradient-to-r from-slate-200 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((init, i) => (
              <InitiativeCard key={i} init={init} i={i} variants={cardVariants} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
