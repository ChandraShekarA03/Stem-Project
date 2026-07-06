import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Newspaper } from 'lucide-react';

export default function MediaReportPage() {
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
                Media Report
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading mb-6">Global STEM Education Centre Inaugurated at Christ University</h1>
              
              <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2"><Calendar size={18} className="text-accent" /> Dec 12, 2025</div>
                <div className="flex items-center gap-2"><MapPin size={18} className="text-accent" /> Bangalore Central Campus</div>
                <div className="flex items-center gap-2"><Newspaper size={18} className="text-accent" /> Published on Catholic Connect - India</div>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="lead text-xl text-slate-600 mb-6">
                In a milestone for transnational academic cooperation, Christ (Deemed to be University), India, in collaboration with Australian Catholic University (ACU), inaugurated the Global STEM Education Centre on Friday at its Bangalore Central Campus.
              </p>
              
              <p>
                The initiative aims to transform STEM education across the Indo-Pacific through research, innovation, and inclusive teaching practices. The ceremony began at 9 a.m. with a traditional lighting of the lamp, followed by an invocation led by the university choir. Dr Greta D'Souza, Professor and Head of the School of Education, delivered the welcome address.
              </p>
              
              <p>
                The event drew an impressive gathering of academic leaders, including Dr Fr. Jose C.C., Vice Chancellor of Christ University, who joined online to deliver the inaugural address, and Prof Julie Cogin, Provost and Deputy Vice-Chancellor (Academic) of ACU, who delivered the keynote leadership address. In his address, Dr Jose C.C. underscored the Centre's potential to empower educators and students with future-ready STEM capabilities rooted in ethical values and global relevance. Prof Cogin hailed the partnership as a bold step toward interdisciplinary, inclusive, and socially responsive education.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Centre's Vision and Collaborative Scope</h3>
              <p>
                The Centre will act as a hub for research-informed STEM education and bilateral exchange between Australia and India. Its objectives include professional development for pre-service and in-service teachers, collaborative research in artificial intelligence, cybersecurity, and digital literacy; joint curriculum development; and university–school–community partnerships, as well as the inclusion of underrepresented groups, especially girls and marginalised communities. The Centre is aligned with India's National Education Policy 2020, aiming to shift STEM learning beyond textbooks into hands-on, interdisciplinary engagement.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Distinguished Delegations and Highlights</h3>
              <p>
                The inauguration was attended by leadership teams from both universities, including: Prof Larissa McLean Davies, Prof Donna King, Prof Iain Hay, Prof Andrew O'Neil, Prof Robert Tai, Dr Sindu George, and a delegation of eight student representatives from ACU, and Dr Fr. Viju P.D. (Pro Vice Chancellor), Dr Anil Joseph Pinto (Registrar), Dr Surekha (Dean, School of Psychological Sciences, Education & Social Work), Dr Fr. Sebastian Mathai (Director, School of Education), faculty members, research scholars and B Ed students from Christ University.
              </p>
              <p>
                A symbolic unveiling of the Centre's logo and website was followed by a student exhibition showcasing innovations in robotics, AI, and sustainability. A panel discussion explored the significance of inclusive STEM education, while concurrent workshops offered professional development for teachers and an interactive STEM lab experience for school students.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Regional Impact and Future Roadmap</h3>
              <p>
                The ACU–Christ Global STEM Education Centre is poised to become a regional think tank driving policy reform and educational innovation across the Indo-Pacific. Future plans include annual summits, academic exchanges, joint publications, and scaling of initiatives to other countries in the region.
              </p>
              <p>
                Dr Sindu George, Associate Professor at ACU's National School of Education, concluded the event with a vote of thanks, emphasising that this partnership exemplifies what's possible when institutions unite to serve a global good. The programme concluded with the inauguration of the on-campus STEM Lab and the singing of the Christ University anthem, marking the launch not only of a facility but also of a future-facing academic collaboration poised to redefine STEM education for generations to come.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
                <p className="text-sm text-slate-500 font-semibold mb-2">Reported by:</p>
                <p className="text-slate-800">Vintu Augustine (Research Scholar, School of Education, Christ University, Bangalore)</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
