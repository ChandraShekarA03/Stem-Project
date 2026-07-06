import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

export default function AnnualReviewPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 flex items-center justify-center">
        <div className="container mx-auto px-5 max-w-2xl text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Clock size={32} className="text-primary" />
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-slate-800 mb-6">Annual Review 2025-2026</h1>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed">
            This comprehensive report on the progress and milestones of the Global STEM Education Centre is currently being compiled and will be published soon.
          </p>
          
          <Link href="/reports" className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors">
            <ArrowLeft size={20} />
            Back to Reports Hub
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
