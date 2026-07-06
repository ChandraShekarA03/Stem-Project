import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';

export default function Workshop1Page() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-24">
        <div className="container mx-auto px-5 max-w-4xl pt-8 pb-4">
          <Link href="/reports" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Events & Reports
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <div className="mb-8 border-b border-slate-100 pb-8">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-xs font-semibold tracking-wide uppercase mb-6">
                Event Report
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading mb-6">Inaugural STEM Workshop</h1>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2"><Calendar size={18} className="text-accent" /> 12 December 2025</div>
                <div className="flex items-center gap-2"><MapPin size={18} className="text-accent" /> CHRIST University</div>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="lead text-xl text-slate-600 mb-6">
                The inaugural workshop was facilitated by Ms. Jaisleen Kaur Sondhi, Research Scholar at the School of Education, whose doctoral research focuses on STEAM Education. The two-hour session was conducted for approximately 40 students of Grade 7 and was designed to foster creativity, innovation, and collaborative problem-solving.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Session Overview</h3>
              <p>
                The workshop began with an introduction to the theoretical foundations of construction and design thinking. Students were introduced to the importance of creating a blueprint before initiating any structural design. Key scientific concepts such as forces in action, along with tension and compression, were explained in an age-appropriate and engaging manner to help students understand the structural principles behind stable constructions.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Tallest Tower Activity</h3>
              <p>
                The core activity of the session was the "Tallest Tower Challenge," where students were divided into groups of six. Each group was mentored by:
              </p>
              <ul>
                <li>One pre-service teacher from Australian Catholic University</li>
                <li>One pre-service teacher from CHRIST University</li>
              </ul>
              <p>
                This collaborative mentoring model not only supported students' learning but also provided valuable experiential exposure for the pre-service teachers. Students applied their understanding of structural forces while designing and constructing their towers, integrating creativity with scientific reasoning.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Experiential and Creative Closure</h3>
              <p>
                To conclude the session, a theatre-based activity was conducted, ensuring that learning was both reflective and enjoyable. This creative wrap-up helped reinforce concepts while leaving students with positive and memorable learning experiences.
              </p>
              <p>
                The workshop successfully marked the first academic session of the Global STEM Education Centre. With active participation from around 40 students and strong collaborative involvement from pre-service teachers of both partnering institutions, the session set a dynamic and engaging tone for future initiatives of the Centre. The event highlighted the Centre's commitment to interdisciplinary, experiential, and globally collaborative STEM education.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
