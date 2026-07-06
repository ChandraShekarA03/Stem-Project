import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ReportCard from '@/components/reports/ReportCard';
import Image from 'next/image';

export default function ReportsPage() {
  const eventsCarousel = [
    { title: "Inauguration Ceremony", date: "12 December 2025", image: "/events/image1.png" },
    { title: "Inauguration Ceremony", date: "12 December 2025", image: "/events/image2.jpeg" },
    { title: "Inauguration Ceremony", date: "12 December 2025", image: "/events/image3.jpeg" },
    { title: "Inaugural STEM Workshop", date: "12 December 2025", image: "/events/image4.jpeg" },
    { title: "Inaugural STEM Workshop", date: "12 December 2025", image: "/events/image5.jpeg" },
    { title: "Inaugural STEM Workshop", date: "12 December 2025", image: "/events/image6.jpeg" },
    { title: "Inaugural STEM Workshop", date: "12 December 2025", image: "/events/image7.jpeg" },
    { title: "InventED: STEM Workshop", date: "12 February 2026", image: "/events/image8.jpeg" },
    { title: "InventED: STEM Workshop", date: "12 February 2026", image: "/events/image9.png" },
    { title: "InventED: STEM Workshop", date: "12 February 2026", image: "/events/image10.png" },
    { title: "InventED: STEM Workshop", date: "12 February 2026", image: "/events/image11.jpeg" },
    { title: "InventED: STEM Workshop", date: "12 February 2026", image: "/events/image12.jpeg" },
    { title: "Marine Science to the Masses", date: "9 March 2026", image: "/events/image13.jpeg" },
    { title: "Marine Science to the Masses", date: "9 March 2026", image: "/events/image14.jpeg" },
    { title: "Marine Science to the Masses", date: "9 March 2026", image: "/events/image15.jpeg" },
    { title: "Marine Science to the Masses", date: "9 March 2026", image: "/events/image16.jpeg" },
    { title: "Marine Science to the Masses", date: "9 March 2026", image: "/events/image17.jpeg" }
  ];

  const reports = [
    {
      title: "Global STEM Education Centre Inauguration",
      date: "12 December 2025",
      href: "/reports/inauguration",
      image: "/events/image1.png"
    },
    {
      title: "Inaugural STEM Workshop",
      date: "12 December 2025",
      href: "/reports/events/workshop-1",
      image: "/events/image4.jpeg"
    },
    {
      title: "InventED: STEM Workshop",
      date: "12 February 2026",
      href: "/reports/events/workshop-2",
      image: "/events/image11.jpeg"
    },
    {
      title: "Marine Science to the Masses",
      date: "9 March 2026",
      href: "/reports/events/workshop-3-4",
      image: "/events/image13.jpeg"
    },
    {
      title: "Media Report: STEM Centre Inauguration",
      date: "12 December 2025",
      href: "/reports/media-report",
      image: "/events/image2.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl text-slate-800 mb-4">Events & Reports</h1>
            <p className="text-slate-500 max-w-2xl mx-auto">Access details of past events and strategic reports published by the Global STEM Education Centre.</p>
          </div>

          <div className="mb-24">
            <div className="flex justify-between items-end border-b pb-4 mb-8">
              <h2 className="font-heading font-bold text-3xl text-slate-800">Event Gallery</h2>
              <span className="text-sm text-slate-400">Swipe to view more</span>
            </div>
            
            <div className="relative -mx-5 px-5 md:mx-0 md:px-0">
              <div 
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {eventsCarousel.map((event, i) => (
                  <div key={i} className="min-w-[80vw] sm:min-w-[400px] snap-center shrink-0 relative group rounded-3xl overflow-hidden aspect-video sm:aspect-square shadow-sm hover:shadow-xl transition-all duration-500">
                    <Image 
                      src={event.image} 
                      alt={event.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center cursor-default">
                      <h3 className="text-white font-heading font-bold text-2xl mb-2">{event.title}</h3>
                      <p className="text-white/80 font-medium tracking-wide uppercase text-sm">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading font-bold text-3xl text-slate-800 mb-8 border-b pb-4">Official Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((report, i) => (
                <ReportCard key={i} title={report.title} date={report.date} href={report.href} linkText="Read Report" image={report.image} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
