'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'International Collaboration', href: '#alliance' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Reports', href: '/reports' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 transition-all duration-500`}
    >
      <div
        className={`w-full max-w-7xl flex justify-between items-center transition-all duration-500 ${scrolled
          ? 'glass rounded-full px-6 md:px-8 py-3 border border-white/10 dark:border-white/5'
          : 'px-4 py-4 md:px-0 md:py-2'
          }`}
      >
        {/* Left Side */}
        <div className="flex-1 flex items-center justify-start shrink-0 z-10">
          <div className="flex items-center gap-2 lg:gap-4 bg-white/50 backdrop-blur-md rounded-full px-2 lg:px-4 py-2 border border-slate-200/50">
            <Image src="/logo.webp" alt="CHRIST University" width={140} height={55} className="object-contain w-20 lg:w-[120px] h-auto" priority />
            <div className="w-[1px] h-6 lg:h-8 bg-slate-300"></div>
            <Image src="/ACU.webp" alt="Australian Catholic University" width={140} height={55} className="object-contain w-20 lg:w-[120px] h-auto" priority />
          </div>
        </div>

        {/* Center STEM Logo */}
        <div className="hidden lg:flex items-center justify-center shrink-0 z-10 transition-all duration-500 px-4">
          <Link href="#home" className={`relative flex items-center justify-center hover:scale-105 transition-all duration-500 bg-white/50 backdrop-blur-md rounded-full border border-slate-200/50 shadow-sm ${scrolled ? 'px-3 lg:px-5 py-2' : 'px-4 lg:px-8 py-3'}`}>
            <Image 
              src="/stem logo.webp" 
              alt="STEM Logo" 
              width={300} 
              height={100} 
              className={`object-contain w-auto transition-all duration-500 ${scrolled ? 'h-[40px] lg:h-[55px]' : 'h-[60px] lg:h-[90px]'}`} 
              priority 
            />
          </Link>
        </div>

        {/* Right Nav */}
        <div className="flex-1 hidden lg:flex items-center justify-end shrink-0 z-10">
          <nav className="bg-white/60 rounded-full px-2 lg:px-3 py-1.5 border border-slate-200/50 backdrop-blur-md shadow-sm flex items-center gap-1 text-center">
            <Link
              href="#leadership"
              className="relative px-2 lg:px-4 py-2 font-medium text-sm text-slate-700 hover:text-primary transition-colors group rounded-full hover:bg-white/50 inline-block"
            >
              Leadership
            </Link>
            <Link
              href="/reports"
              className="relative px-2 lg:px-4 py-2 font-medium text-sm text-slate-700 hover:text-primary transition-colors group rounded-full hover:bg-white/50 inline-block"
            >
              Reports
            </Link>
            <Link
              href="#alliance"
              className="relative px-2 lg:px-4 py-2 font-medium text-sm text-slate-700 hover:text-primary transition-colors group rounded-full hover:bg-white/50 inline-block whitespace-nowrap"
            >
              International Collaboration
            </Link>
          </nav>
        </div>

        <button
          className="lg:hidden text-foreground p-2 rounded-full hover:bg-white/10 transition-colors z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-[80px] left-4 right-4 glass border border-white/10 rounded-3xl p-6 flex flex-col gap-4 lg:hidden shadow-2xl"
          >
            {navLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-medium text-lg text-text-muted hover:text-primary transition-colors py-2 border-b border-border/20 last:border-0"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
