import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Lightbulb } from 'lucide-react';

export default function StrategicVisionPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 flex items-center justify-center">
        <div className="container mx-auto px-5 max-w-2xl text-center">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Lightbulb size={32} className="text-secondary" />
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-slate-800 mb-6">Strategic Vision 2030</h1>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed">
            The comprehensive roadmap detailing our goals for transnational education, research expansion, and community impact is currently being finalised.
          </p>
          
          <Link href="/reports" className="inline-flex items-center gap-2 text-secondary font-medium hover:text-accent transition-colors">
            <ArrowLeft size={20} />
            Back to Reports Hub
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
