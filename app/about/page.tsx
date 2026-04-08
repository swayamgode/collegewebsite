import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About VCET | Vidyavardhini\'s College of Engineering & Technology',
  description: 'Learn about VCET â€” its history, vision, mission, leadership and institutional values since 1994.',
};

const leadership = [
  { name: 'Shri. Vishnu Wagh',      role: 'President, VVP',           img: '' },
  { name: 'Dr. C. S. Patil',        role: 'Principal',                 img: '' },
  { name: 'Dr. R. K. Sharma',       role: 'Dean Academics',            img: '' },
  { name: 'Prof. A. B. Nair',       role: 'Dean Student Welfare',      img: '' },
];

const milestones = [
  { year: '1994', event: 'VCET established under VVP with first intake of 120 CE students.' },
  { year: '2001', event: 'IT department launched; campus area expanded to 15 acres.' },
  { year: '2007', event: 'Granted Autonomous status by University of Mumbai.' },
  { year: '2012', event: 'NBA accreditation awarded for CE and ME programs.' },
  { year: '2018', event: 'NAAC \'A\' Grade accreditation secured.' },
  { year: '2020', event: 'AI & Data Science department launched with NVIDIA partnership.' },
  { year: '2022', event: 'Data Engineering department established; new Innovation Lab inaugurated.' },
  { year: '2026', event: 'Record placements: 95% placement rate, â‚¹42 LPA highest package.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24">

      {/* HEADER */}
      <section className="py-20 bg-[#0B1F4F]">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em]">Who We Are</span>
          </div>
          <h1 className="text-white font-black text-4xl md:text-6xl tracking-tighter leading-none max-w-3xl">
            THREE DECADES OF<br />
            <span className="text-[#F5A623]">ENGINEERING EXCELLENCE.</span>
          </h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-6">About the Institution</span>
              <p className="text-gray-600 text-sm leading-8 mb-6">
                Vidyavardhini's College of Engineering & Technology (VCET), established in 1994, is an autonomous institution affiliated to the University of Mumbai and approved by AICTE. The college is managed by Vidyavardhini Pratishthan (VVP) and has been consistently recognized for academic excellence.
              </p>
              <p className="text-gray-600 text-sm leading-8">
                Accredited 'A' Grade by NAAC and with several programs holding NBA accreditation, VCET has grown from a single department to six engineering disciplines serving over 5,000 students annually, with a faculty corps of 150+ experienced educators and researchers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-gray-100">
              {[
                { val: '1994', lbl: 'Year Founded' },
                { val: 'NAAC A', lbl: 'Accreditation' },
                { val: '5000+', lbl: 'Students' },
                { val: '150+', lbl: 'Faculty' },
                { val: '95%', lbl: 'Placement Rate' },
                { val: 'Autonomous', lbl: 'Status' },
              ].map((s, i) => (
                <div key={i} className="bg-white p-8">
                  <span className="text-[#0B1F4F] font-black text-2xl block mb-1 tracking-tight">{s.val}</span>
                  <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 bg-[#F9F8F6] border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            <div className="bg-white p-12">
              <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-6">Vision</span>
              <p className="text-[#0B1F4F] font-black text-xl tracking-tight leading-snug mb-4">
                "To be a globally recognised institution for technical education and research."
              </p>
              <p className="text-gray-500 text-sm leading-7">
                VCET aims to be a centre of excellence that produces technically competent, ethically grounded engineers who lead industry transformation and academic innovation worldwide.
              </p>
            </div>
            <div className="bg-white p-12">
              <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-6">Mission</span>
              <div className="flex flex-col gap-4">
                {[
                  'Provide quality technical education aligned with global standards.',
                  'Foster research, innovation and entrepreneurship.',
                  'Develop industry partnerships for practical exposure.',
                  'Nurture ethical, socially responsible professionals.',
                ].map((m, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#F5A623] font-black text-xs mt-1">{String(i+1).padStart(2,'0')}</span>
                    <span className="text-gray-600 text-sm leading-6">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-10">
          <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-12">Timeline</span>
          <div className="flex flex-col gap-0 divide-y divide-gray-100">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-12 py-6 group hover:bg-gray-50 transition-colors px-4 -mx-4">
                <span className="text-[#0B1F4F] font-black text-sm w-12 shrink-0 tracking-tight">{m.year}</span>
                <div className="w-px bg-gray-200 shrink-0" />
                <p className="text-gray-600 text-sm leading-6">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-12">Leadership</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100">
            {leadership.map((l, i) => (
              <div key={i} className="bg-white p-8 group hover:bg-[#0B1F4F] transition-colors">
                <div className="w-12 h-12 bg-gray-100 group-hover:bg-white/10 rounded-full flex items-center justify-center mb-6 transition-colors">
                  <span className="text-[#0B1F4F] group-hover:text-white font-black text-sm transition-colors">
                    {l.name.split(' ')[1][0]}
                  </span>
                </div>
                <h3 className="text-[#0B1F4F] group-hover:text-white font-black text-sm tracking-tight mb-1 transition-colors">{l.name}</h3>
                <span className="text-gray-400 group-hover:text-white/40 text-xs uppercase tracking-[0.2em] transition-colors">{l.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B1F4F]">
        <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-white font-black text-2xl md:text-3xl tracking-tighter">Ready to join VCET?</h2>
          <Link href="/admission"
            className="bg-[#F5A623] text-[#0B1F4F] px-10 py-4 font-medium text-xs uppercase tracking-[0.3em] hover:bg-white transition-colors shrink-0">
            Apply for Admission â†’
          </Link>
        </div>
      </section>
    </div>
  );
}
