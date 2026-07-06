import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';

export default function Workshop2Page() {
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
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading mb-6">InventED: STEM Workshop</h1>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2"><Calendar size={18} className="text-accent" /> 12 February 2026</div>
                <div className="flex items-center gap-2"><Clock size={18} className="text-accent" /> 9:00 AM to 3:30 PM</div>
                <div className="flex items-center gap-2"><MapPin size={18} className="text-accent" /> Global STEM Education Centre</div>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="lead text-xl text-slate-600 mb-6">
                The Global STEM Education Centre, in collaboration with the School of Education, CHRIST (Deemed to be University) and the National School of Education, Australian Catholic University, organized InventED: STEM Workshop as part of celebrating CM1 Year of Education.
              </p>
              
              <p>
                The workshop brought together 12 in-service teachers serving as Nodal Officers for STEM and ATL from South 1, 2, 3, 4 and Anekal Taluks, 30 B.Ed students from CHRIST University, and 40 pre-service teachers and 5 teacher educators from The Gandhigram Rural Institute, Tamil Nadu. The day was designed as a comprehensive professional learning experience that aimed to rethink depth, transfer, and classroom impact in STEM education.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Inauguration</h3>
              <p>
                The programme began with a soulful prayer song by students of the School of Education. Dr Greta D'Souza, Associate Director of the Global STEM Education Centre, delivered the welcome address, outlining the vision of the Centre and introducing the sessions planned for the day. The inaugural address by Dr Fr Sebastian Mathai, Director of the Centre, highlighted the significance of international collaboration and emphasized the responsibility of educators in preparing learners for complex, real-world problem solving.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Why STEM Belongs in Every Classroom</h3>
              <p>
                The first academic session was led by Dr Sarah Taouk, who joined live from Australia, along with Dr Sindu George from the National School of Education at Australian Catholic University. Dr Sarah Taouk's session, titled <em>Why STEM Belongs in Every Classroom</em>, positioned STEM not as four isolated disciplines but as an integrated approach to teaching and learning. She emphasized that STEM becomes meaningful when classroom learning is connected to real-world contexts and when students are encouraged to think critically, creatively, and collaboratively.
              </p>
              <p>
                Through classroom examples, she demonstrated how simple science activities can become inquiry-driven learning experiences. Concepts such as physical and chemical change were explored through observable evidence like temperature shifts, colour change, and gas production. An engaging exploration of the science of sound showed how experimentation can extend into design challenges, encouraging students to engineer practical solutions. The medicinal plants activity further demonstrated how scientific inquiry can respectfully integrate Indigenous knowledge systems, thereby enriching STEM learning with cultural relevance. The session reinforced that STEM education is most impactful when it nurtures transferable skills rather than focusing only on content coverage.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">STEM on the Ground: Classroom Practices and Applications</h3>
              <p>
                The next session, facilitated by Mrs Nirmala C. L., translated theory into practice through an interdisciplinary activity on sustainable urbanisation. Participants were divided into thematic groups focusing on environmental planning, social structures, economics, and infrastructure. Each group developed plans for different aspects of a sustainable city and later collaborated to create an integrated city design. This activity highlighted systems thinking, interdisciplinary integration, and collaborative decision making. It demonstrated how STEM tasks can mirror authentic societal challenges and encourage learners to negotiate trade-offs while developing viable solutions.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Rethinking Depth, Transfer and Impact</h3>
              <p>
                The concluding session, facilitated by Ms Jaisleen Kaur Sondhi, invited participants to reflect on how STEM is introduced and assessed in schools. The session focused on cultivating epistemic agency, encouraging students to see themselves as knowledge creators rather than passive recipients. Through everyday school-based problem scenarios such as rising electricity bills, water stagnation, food waste, and classroom acoustics, participants analysed issues using a structured STEM lens. They were guided to identify assumptions, gather data, justify decisions, and reflect on possible trade-offs.
              </p>
              <p>
                The session also introduced the Double Diamond design thinking framework, illustrating how empathy, problem framing, ideation, prototyping, and testing can be meaningfully embedded into classroom practice. Participants reflected on real classroom realities including students' concern about grades, fear of failure, and resistance to open-ended tasks. The discussion emphasized that assessment should capture thinking processes rather than merely evaluating final products.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
                <p className="text-slate-700 m-0 font-medium italic text-center">
                  InventED: STEM Workshop successfully created a platform for collaborative, inquiry-driven professional learning. By bringing together international perspectives, interdisciplinary practice, and reflective dialogue, the workshop strengthened the vision of the Global STEM Education Centre to promote meaningful, transferable, and impact-oriented STEM education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
