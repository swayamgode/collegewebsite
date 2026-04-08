import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions 2026 | VCET Vasai',
  description: 'Apply for admission to VCET for the academic year 2026â€“27. Learn about eligibility, process, and important dates.',
};

const steps = [
  { step: '01', title: 'MHT-CET / JEE Mains',    desc: 'Appear for Maharashtra CET or JEE Mains. Both scores are accepted for admission to VCET.' },
  { step: '02', title: 'Centralised Admission',   desc: 'Register on the DTE Maharashtra CAP portal. Fill preferences and submit required documents.' },
  { step: '03', title: 'Merit List & Allotment',  desc: 'Allotment is based on merit rank, category and preferences submitted during CAP rounds.' },
  { step: '04', title: 'Document Verification',   desc: 'Report to VCET campus with original documents for verification and seat confirmation.' },
  { step: '05', title: 'Fee Payment',             desc: 'Pay semester tuition fee online or at the accounts counter to complete admission.' },
  { step: '06', title: 'Orientation & Induction', desc: 'Attend the 5-day induction program and meet your department faculty and mentors.' },
];

const programs = [
  { name: 'Computer Engineering',   intake: 120, duration: '4 Years', degree: 'B.E.' },
  { name: 'Information Technology', intake: 60,  duration: '4 Years', degree: 'B.E.' },
  { name: 'AI & Data Science',      intake: 60,  duration: '4 Years', degree: 'B.E.' },
  { name: 'Mechanical Engineering', intake: 60,  duration: '4 Years', degree: 'B.E.' },
  { name: 'Civil Engineering',      intake: 60,  duration: '4 Years', degree: 'B.E.' },
  { name: 'Data Engineering',       intake: 60,  duration: '4 Years', degree: 'B.E.' },
];

const dates = [
  { event: 'MHT-CET 2026 Exam',             date: 'April â€“ May 2026'   },
  { event: 'CAP Round 1 Registration',       date: 'June 2026'          },
  { event: 'Merit List Publication',         date: 'July 2026'          },
  { event: 'CAP Allotment Rounds',           date: 'July â€“ August 2026' },
  { event: 'VCET Document Verification',     date: 'August 2026'        },
  { event: 'Classes Commence',               date: '01 September 2026'  },
];

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-white pt-24">

      {/* HEADER */}
      <section className="py-20 bg-[#0B1F4F]">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em]">Admissions Open</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h1 className="text-white font-black text-4xl md:text-6xl tracking-tighter leading-none">
              JOIN VCET<br />
              <span className="text-[#F5A623]">2026â€“27.</span>
            </h1>
            <p className="text-white/50 text-sm leading-7 max-w-sm">
              Admission to VCET is through DTE Maharashtra CAP process based on MHT-CET or JEE Mains scores. Management quota seats are also available.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-10">
          <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-10">Programs Offered</span>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {['Program','Degree','Duration','Intake'].map((h) => (
                    <th key={h} className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-[0.3em]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {programs.map((p, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-black text-[#0B1F4F] text-sm">{p.name}</td>
                    <td className="py-5 px-6 font-bold text-gray-500 text-xs">{p.degree}</td>
                    <td className="py-5 px-6 font-bold text-gray-500 text-xs">{p.duration}</td>
                    <td className="py-5 px-6 font-bold text-gray-500 text-xs">{p.intake} seats</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-[#F9F8F6] border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-10">
          <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-12">Admission Process</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {steps.map((s, i) => (
              <div key={i} className="bg-white p-10 flex flex-col gap-4">
                <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.4em]">{s.step}</span>
                <h3 className="text-[#0B1F4F] font-black text-sm tracking-tight">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-6">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-10">Important Dates</span>
          <div className="flex flex-col divide-y divide-gray-100">
            {dates.map((d, i) => (
              <div key={i} className="flex items-center justify-between py-5 hover:bg-gray-50 px-4 -mx-4 transition-colors">
                <span className="text-[#0B1F4F] font-bold text-xs">{d.event}</span>
                <span className="text-[#F5A623] font-black text-xs">{d.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F5A623]">
        <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[#0B1F4F] font-black text-2xl md:text-3xl tracking-tighter mb-1">Ready to apply?</h2>
            <p className="text-[#0B1F4F]/60 text-xs">Visit DTE Maharashtra portal or contact our admissions office directly.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a href="https://cetcell.mahacet.org" target="_blank" rel="noopener noreferrer"
              className="bg-[#0B1F4F] text-white px-8 py-4 font-medium text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-[#0B1F4F] transition-colors">
              DTE Portal â†’
            </a>
            <Link href="/contact"
              className="border-2 border-[#0B1F4F] text-[#0B1F4F] px-8 py-4 font-medium text-xs uppercase tracking-[0.3em] hover:bg-[#0B1F4F] hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
