import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Placements | VCET Vasai',
  description: 'VCET placement statistics â€” top recruiters, package data and placement records for 2025â€“26.',
};

const recruiters = [
  { company: 'Google',          package: 'â‚¹42 LPA', offers: 12,  sector: 'Tech'        },
  { company: 'Microsoft',       package: 'â‚¹38 LPA', offers: 8,   sector: 'Tech'        },
  { company: 'Goldman Sachs',   package: 'â‚¹22 LPA', offers: 5,   sector: 'Finance'     },
  { company: 'Deloitte',        package: 'â‚¹14 LPA', offers: 30,  sector: 'Consulting'  },
  { company: 'Accenture',       package: 'â‚¹9 LPA',  offers: 85,  sector: 'IT Services' },
  { company: 'Infosys',         package: 'â‚¹12 LPA', offers: 120, sector: 'IT Services' },
  { company: 'TCS',             package: 'â‚¹7 LPA',  offers: 200, sector: 'IT Services' },
  { company: 'Wipro',           package: 'â‚¹8 LPA',  offers: 70,  sector: 'IT Services' },
  { company: 'Cognizant',       package: 'â‚¹7.5 LPA',offers: 60,  sector: 'IT Services' },
  { company: 'Capgemini',       package: 'â‚¹8 LPA',  offers: 45,  sector: 'IT Services' },
  { company: 'L&T Technology',  package: 'â‚¹10 LPA', offers: 20,  sector: 'Engineering' },
  { company: 'Tata Motors',     package: 'â‚¹8 LPA',  offers: 15,  sector: 'Auto'        },
];

const yearwiseStats = [
  { year: '2025â€“26', avg: 'â‚¹11.2 LPA', highest: 'â‚¹42 LPA', placed: '95%', companies: 120 },
  { year: '2024â€“25', avg: 'â‚¹9.8 LPA',  highest: 'â‚¹36 LPA', placed: '92%', companies: 105 },
  { year: '2023â€“24', avg: 'â‚¹8.5 LPA',  highest: 'â‚¹28 LPA', placed: '89%', companies: 90  },
  { year: '2022â€“23', avg: 'â‚¹7.2 LPA',  highest: 'â‚¹24 LPA', placed: '86%', companies: 80  },
];

export default function PlacementsPage() {
  return (
    <div className="min-h-screen bg-white pt-24">

      {/* HEADER */}
      <section className="py-20 bg-[#0B1F4F]">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em]">Career Outcomes</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h1 className="text-white font-black text-4xl md:text-6xl tracking-tighter leading-none">
              PLACEMENTS<br />
              <span className="text-[#F5A623]">2025â€“26.</span>
            </h1>
            <div className="flex gap-12">
              {[['95%','Placement Rate'],['â‚¹42 LPA','Highest CTC'],['300+','Companies']].map(([v,l],i) => (
                <div key={i} className="border-l border-white/10 pl-6">
                  <span className="text-white font-black text-2xl block tracking-tight">{v}</span>
                  <span className="text-white/30 text-xs uppercase tracking-[0.2em]">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YEAR-WISE STATS */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-10">
          <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-10">Year-wise Performance</span>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {['Year','Avg Package','Highest Package','Placement %','Companies'].map((h) => (
                    <th key={h} className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-[0.3em]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {yearwiseStats.map((row, i) => (
                  <tr key={i} className={`hover:bg-gray-50 transition-colors ${i === 0 ? 'bg-[#F5A623]/5' : ''}`}>
                    <td className="py-5 px-6 font-black text-[#0B1F4F] text-sm tracking-tight">{row.year}</td>
                    <td className="py-5 px-6 font-bold text-gray-600 text-xs">{row.avg}</td>
                    <td className="py-5 px-6 font-bold text-[#F5A623] text-xs">{row.highest}</td>
                    <td className="py-5 px-6">
                      <span className="bg-[#0B1F4F] text-white font-black text-xs px-3 py-1 uppercase tracking-wider">{row.placed}</span>
                    </td>
                    <td className="py-5 px-6 font-bold text-gray-600 text-xs">{row.companies}+</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RECRUITERS */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-10">Top Recruiters 2025â€“26</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {recruiters.map((r, i) => (
              <div key={i} className="bg-white p-8 flex items-center justify-between group hover:bg-[#0B1F4F] transition-colors">
                <div>
                  <h3 className="text-[#0B1F4F] group-hover:text-white font-black text-sm tracking-tight mb-1 transition-colors">{r.company}</h3>
                  <span className="text-gray-400 group-hover:text-white/30 text-xs uppercase tracking-[0.2em] transition-colors">{r.sector}</span>
                </div>
                <div className="text-right">
                  <span className="text-[#F5A623] font-black text-sm block">{r.package}</span>
                  <span className="text-gray-400 group-hover:text-white/30 text-xs uppercase tracking-[0.2em] transition-colors">{r.offers} offers</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F9F8F6] border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[#0B1F4F] font-black text-2xl tracking-tighter mb-1">Join our placement cell</h2>
            <p className="text-gray-400 text-xs">Exclusive recruiter access & placement prep resources for VCET students.</p>
          </div>
          <Link href="/contact"
            className="bg-[#0B1F4F] text-white px-10 py-4 font-medium text-xs uppercase tracking-[0.3em] hover:bg-[#F5A623] hover:text-[#0B1F4F] transition-colors shrink-0">
            Contact Placement Cell â†’
          </Link>
        </div>
      </section>
    </div>
  );
}
