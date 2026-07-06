'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, ArrowRight } from 'lucide-react';

export default function ReportCard({ title, date, href, linkText = "View Report", image }: { title: string, date: string, href: string, linkText?: string, image?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="glass rounded-3xl border border-royal/10 hover:border-royal/30 transition-colors duration-500 flex flex-col h-full group overflow-hidden bg-white/50"
    >
      {image ? (
        <div className="relative h-48 w-full overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      ) : (
        <div className="p-8 pb-0">
          <div className="w-14 h-14 bg-royal/5 text-royal rounded-2xl flex items-center justify-center mb-4 group-hover:bg-royal group-hover:text-white transition-colors duration-500">
            <FileText size={24} strokeWidth={1.5} />
          </div>
        </div>
      )}
      
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex-grow">
          <span className="block text-xs font-semibold text-royal/50 tracking-[0.15em] uppercase mb-3">{date}</span>
          <h3 className="font-heading font-medium text-2xl text-royal mb-4 leading-tight group-hover:text-indigo transition-colors duration-300">{title}</h3>
        </div>
        
        <div className="pt-6 mt-4 border-t border-royal/10">
          <Link 
            href={href} 
            className="inline-flex items-center gap-3 text-sm font-semibold text-royal uppercase tracking-widest hover:text-accent transition-colors"
          >
            <span>{linkText}</span>
            <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
