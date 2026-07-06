import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-surface border-t border-white/5 pt-24 pb-12 overflow-hidden mt-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-5">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 tracking-tight">
              GLOBAL <span className="text-gradient">STEM</span><br/>EDUCATION CENTRE
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-md leading-relaxed">
              Pioneering the future of science, technology, and innovation through an unprecedented global partnership.
            </p>
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
              <Image src="/logo.webp" alt="CHRIST University" width={100} height={40} className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
              <div className="w-[1px] h-10 bg-white/20"></div>
              <Image src="/ACU.webp" alt="Australian Catholic University" width={100} height={40} className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="font-heading font-semibold text-foreground text-lg mb-6">Initiatives</h3>
            <ul className="space-y-4">
              {['Research Grants', 'Student Exchange', 'Faculty Development', 'Innovation Labs'].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-foreground text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              {['About Us', 'Leadership', 'News & Gallery', 'Annual Reports'].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading font-semibold text-foreground text-lg mb-6">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-text-muted">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <span>CHRIST (Deemed to be University)<br/>Bangalore, India</span>
              </li>
              <li className="flex items-center gap-4 text-text-muted">
                <Mail className="text-primary shrink-0" size={20} />
                <a href="mailto:contact@globalstem.edu" className="hover:text-foreground transition-colors">contact@globalstem.edu</a>
              </li>
              <li className="flex items-center gap-4 text-text-muted">
                <Phone className="text-primary shrink-0" size={20} />
                <a href="tel:+918040129100" className="hover:text-foreground transition-colors">+91 80 4012 9100</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Global STEM Education Centre. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-muted">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
