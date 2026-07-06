import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import AllianceSection from '@/components/alliance/AllianceSection';
import VisionMission from '@/components/vision/VisionMission';
import LeadershipSection from '@/components/leadership/LeadershipSection';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="flex min-h-screen flex-col w-full relative">
        <HeroSection />
        <AllianceSection />
        <VisionMission />
        <LeadershipSection />
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  );
}
//testing