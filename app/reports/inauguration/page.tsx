import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Mic, Quote, CheckCircle, GraduationCap, ArrowRight } from 'lucide-react';

export default function InaugurationReportPage() {
  const images = Array.from({ length: 6 }, (_, i) => `/ReportPics/${i + 1}.webp`);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-24">
        
        {/* Back Link */}
        <div className="container mx-auto px-5 max-w-6xl pt-8 pb-4">
          <Link href="/reports" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Reports
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative pt-12 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10"></div>
            <Image src="/stem_hero_light.png" alt="Background" fill className="object-cover" />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
              Event Report
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
              Global STEM Education Centre <br/>
              <span className="text-gradient">Inaugurated at <br/> CHRIST University</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              A milestone for transnational academic cooperation between India and Australia, transforming STEM education.
            </p>
            <div className="mt-8 flex justify-center gap-8 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2"><Calendar size={18} className="text-accent" /> December 12, 2025</div>
              <div className="flex items-center gap-2"><MapPin size={18} className="text-accent" /> Bangalore Central Campus</div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto px-5 py-12">
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 border-l-4 border-primary pl-6 italic">
            In a milestone for transnational academic cooperation, <strong>CHRIST (Deemed to be University), India</strong>, in collaboration with <strong>Australian Catholic University (ACU)</strong>, inaugurated the Global STEM Education Centre on 12 December 2025 at its Bangalore Central Campus. The initiative aims to transform STEM education across the Indo-Pacific through research, innovation, and inclusive teaching practices.
          </p>
        </div>

        {/* The Ceremony Timeline */}
        <div className="max-w-5xl mx-auto px-5 py-16">
          <div className="glass p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="text-center mb-16 relative z-10">
              <h3 className="text-3xl font-bold mb-4 flex items-center justify-center text-slate-900 gap-3 font-heading">
                <Mic className="text-secondary" size={32} /> The Ceremony
              </h3>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                The ceremony commenced at 8:45 AM, setting the stage for a morning of insightful addresses and the formal unveiling of the centre.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-10">
                {[{title:"Introduction", speaker:"Dr. Infanta Vincy", color:"bg-primary"},
                  {title:"Lighting of the Lamp", speaker:"University Choir & Dignitaries", color:"bg-primary"},
                  {title:"Welcome Address", speaker:"Dr. Greta D'Souza - Head, School of Education", color:"bg-primary"},
                  {title:"Inaugural Address", speaker:"Dr. Fr. Jose C.C. - Vice Chancellor, CHRIST", color:"bg-primary"}
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className={`w-2 h-2 rounded-full mt-2 shadow-sm ${item.color}`}></div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.speaker}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-10">
                {[{title:"Leadership Address", speaker:"Prof. Julie Cogin - Provost & Deputy VC, ACU", color:"bg-secondary"},
                  {title:"Unveiling of the Centre", speaker:"Dr. Fr. Viju - Pro Vice Chancellor", color:"bg-secondary"},
                  {title:"Address & Vote of Thanks", speaker:"Dr. Sindu George - Assoc. Prof, NSE Melbourne", color:"bg-secondary"},
                  {title:"CHRIST University Anthem", speaker:"Concluding segment", color:"bg-secondary"}
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className={`w-2 h-2 rounded-full mt-2 shadow-sm ${item.color}`}></div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-lg group-hover:text-secondary transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.speaker}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote Block */}
        <div className="max-w-5xl mx-auto px-5 py-12">
          <div className="glass rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl transition-all duration-700"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="shrink-0 relative w-48 h-48 md:w-56 md:h-56">
                <Image src="/jose.webp" alt="Dr. Fr. Jose C.C." fill className="rounded-full object-cover border-4 border-white shadow-xl" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <Quote className="text-primary/20 mb-6 mx-auto md:mx-0" size={48} />
                <p className="text-xl md:text-2xl italic text-slate-700 mb-8 leading-relaxed font-light">
                  "The Centre’s potential to empower educators and students with future-ready STEM capabilities rooted in ethical values and global relevance."
                </p>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-xl font-bold text-primary tracking-wide">Dr. Fr. Jose C.C.</p>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mt-1">Vice Chancellor, CHRIST University</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Distinguised Delegations & Highlights */}
        <div className="max-w-7xl mx-auto px-5 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass rounded-3xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold mb-8 text-slate-900 font-heading">Distinguished Delegations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-primary font-bold text-sm uppercase tracking-wider border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
                  <GraduationCap size={18} /> ACU Leadership
                </h4>
                <ul className="text-slate-600 space-y-3 text-sm leading-relaxed">
                  <li>• Prof. Julie Cogin - Provost and Deputy Vice Chancellor</li>
                  <li>• Prof. Larissa McLean Davies - Dean Faculty of Education and Arts</li>
                  <li>• Prof. Donna King - Head, National School of Education</li>
                  <li>• Prof. lain Hay - Associate Dean, Partnerships</li>
                  <li>• Prof. Andrew O'Neil - Dean, Graduate Research and International</li>
                  <li>• Prof. Robert Tai - Lead, ACU STEM Centre for Excellence</li>
                  <li>• Mr Paul Campbell - Deputy Chief Operating Officer</li>
                  <li>• Ms Bronwyn Bartsch - Director, Global Engagement</li>
                  <li className="italic text-xs text-slate-400">And other esteemed members...</li>
                </ul>
              </div>
              <div>
                <h4 className="text-secondary font-bold text-sm uppercase tracking-wider border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
                  <GraduationCap size={18} /> CHRIST University Leadership
                </h4>
                <ul className="text-slate-600 space-y-3 text-sm leading-relaxed">
                  <li>• Dr. Fr. Jose C.C. (Vice Chancellor)</li>
                  <li>• Dr. Fr. Viju P.D. (Pro Vice Chancellor)</li>
                  <li>• Dr. Anil Joseph Pinto (Registrar)</li>
                  <li>• Dr. Surekha (Dean, School of Psychological Sciences)</li>
                  <li>• Dr. Fr. Sebastian Mathai (Director, School of Education)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="glass rounded-3xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold mb-6 text-slate-900 font-heading">Event Highlights</h3>
              <ul className="space-y-4">
                {[
                  "Unveiling of the Centre’s logo and website",
                  "Student exhibition showcasing innovations in robotics, AI, and sustainability",
                  "Interactive STEM lab experience for school students"
                ].map((txt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-600 text-sm leading-relaxed">{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-3xl p-8 border border-slate-200 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold mb-4 text-slate-900 font-heading">Future Roadmap</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                The Global STEM Education Centre is poised to become a regional think tank driving policy reform and educational innovation across the Indo-Pacific.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Annual Summits", "Academic Exchanges", "Joint Publications"].map((badge, i) => (
                  <span key={i} className="bg-primary/5 border border-primary/10 px-3 py-1 rounded-full text-xs text-primary font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="max-w-7xl mx-auto px-5 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-4">Event Gallery</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">A visual recap of the inauguration ceremony, delegations, and student exhibitions.</p>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, i) => (
              <div key={i} className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow bg-slate-100">
                <Image 
                  src={src} 
                  alt={`Event Photo ${i + 1}`} 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
