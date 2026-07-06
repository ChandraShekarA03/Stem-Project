import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Clock, User } from 'lucide-react';

export default function Workshop34Page() {
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
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading mb-6">Marine Science to the Masses</h1>
              <p className="text-xl text-slate-600 mb-6 font-light">Exploring the Ocean, Empowering Minds</p>
              
              <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2 w-full md:w-auto"><Calendar size={18} className="text-accent" /> Monday, 9 March 2026</div>
                <div className="flex items-center gap-2 w-full md:w-auto"><Clock size={18} className="text-accent" /> 1:30 PM to 3:30 PM IST</div>
                <div className="flex items-center gap-2 w-full md:w-auto"><MapPin size={18} className="text-accent" /> Room No. 732, Block II, School of Education</div>
                <div className="flex items-center gap-2 w-full"><User size={18} className="text-accent" /> Speaker: Meg Green – Marine Scientist & Conservation Biologist</div>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="lead text-xl text-slate-600 mb-6">
                Conducted as a Women's Day Special in celebration of International Women's Day.
              </p>
              <p>
                The Global STEM Education Centre at CHRIST (Deemed to be University) organized the workshop <strong>"Marine Science to the Masses: Exploring the Ocean, Empowering Minds"</strong> as part of the CM1 Year of Education Workshop Series. The session was delivered by Meg Green, a marine scientist, conservation biologist, and founder of Blue View Marine Education.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Introduction</h3>
              <p>
                The session began with a welcome address by Dr. Greta D'Souza from CHRIST University. She highlighted the importance of interdisciplinary learning and the need to promote environmental awareness through STEM education.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">A Journey into Marine Science</h3>
              <p>
                In her talk, Meg Green shared her personal journey into marine science, reflecting on her experiences as a marine photographer and explorer of ocean ecosystems. She spoke about how these experiences inspired her to pursue marine conservation and later transition into education to make marine science more accessible to learners.
              </p>
              <p>
                She also introduced the work of Blue View Marine Education, which focuses on engaging and inclusive marine education that inspires respect and understanding of ocean ecosystems. Emphasizing personalized learning, she highlighted the importance of designing educational experiences that cater to different student needs and abilities.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Impact and Participation</h3>
              <p>
                The workshop saw active participation from students at CHRIST University (School of Sciences and School of Engineering) and around 50 online participants from Don Bosco College of Education, Yadgir.
              </p>
              <p>
                As the event was organized as a Women's Day Special, Meg Green's journey served as an inspiring example of the contributions of women in science and environmental education. The session concluded with leaving participants with a deeper appreciation for marine ecosystems and the importance of science communication in promoting ocean conservation.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
