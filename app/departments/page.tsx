import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Departments | VCET Vasai',
  description: 'Explore all engineering departments at VCET â€” Computer Engineering, IT, AI & Data Science, Mechanical, Civil and Data Engineering.',
};

const departments = [
  {
    slug: 'computer-engineering',
    name: 'Computer Engineering',
    abbr: 'CE',
    intake: 120,
    established: 1994,
    hod: 'Dr. R. K. Sharma',
    desc: 'The Department of Computer Engineering focuses on algorithms, systems design, software engineering, and emerging technologies including AI and cloud computing.',
    highlights: ['Machine Learning Lab', 'CISCO Networking Academy', 'IBM Centre of Excellence', 'ACM Student Chapter'],
  },
  {
    slug: 'information-technology',
    name: 'Information Technology',
    abbr: 'IT',
    intake: 60,
    established: 2001,
    hod: 'Dr. S. P. Kulkarni',
    desc: 'IT at VCET trains students in enterprise software, web technologies, database management and information security for industry roles.',
    highlights: ['Oracle Academy', 'Microsoft IT Academy', 'Cybersecurity Lab', 'IoT Research Cell'],
  },
  {
    slug: 'ai-data-science',
    name: 'AI & Data Science',
    abbr: 'AIDS',
    intake: 60,
    established: 2020,
    hod: 'Dr. P. M. Joshi',
    desc: 'The newest department at VCET, focused exclusively on machine intelligence, statistical modelling, big data analytics and deep learning.',
    highlights: ['NVIDIA GPU Computing Lab', 'Data Analytics Studio', 'Research Publications Cell', 'Kaggle Club'],
  },
  {
    slug: 'mechanical-engineering',
    name: 'Mechanical Engineering',
    abbr: 'ME',
    intake: 60,
    established: 1994,
    hod: 'Dr. A. B. Patil',
    desc: 'Mechanical Engineering covers thermodynamics, fluid mechanics, manufacturing processes, CAD/CAM, robotics and renewable energy systems.',
    highlights: ['CAD/CAM Lab', 'Thermal Lab', 'Robotics Club', 'SAE Collegiate Chapter'],
  },
  {
    slug: 'civil-engineering',
    name: 'Civil Engineering',
    abbr: 'CE',
    intake: 60,
    established: 1994,
    hod: 'Prof. V. N. Desai',
    desc: 'Civil Engineering at VCET emphasises sustainable infrastructure design, structural analysis, environmental engineering and urban planning.',
    highlights: ['Surveying Lab', 'Concrete Testing Lab', 'AutoCAD Facility', 'ASCE Student Chapter'],
  },
  {
    slug: 'data-engineering',
    name: 'Data Engineering',
    abbr: 'DE',
    intake: 60,
    established: 2022,
    hod: 'Dr. M. K. Singh',
    desc: 'Data Engineering prepares students to design pipelines, manage cloud infrastructure and handle large-scale distributed systems for modern enterprises.',
    highlights: ['AWS Cloud Lab', 'Apache Spark Cluster', 'Data Warehouse Studio', 'Open Source Cell'],
  },
];

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-white pt-24">

      {/* PAGE HEADER */}
      <section className="py-20 bg-[#0B1F4F]">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-px bg-[#F5A623]" />
                <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em]">Academic Domains</span>
              </div>
              <h1 className="text-white font-black text-4xl md:text-6xl tracking-tighter leading-none">
                DEPARTMENTS
              </h1>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-white font-black text-3xl block tracking-tight">6</span>
              <span className="text-white/30 text-xs uppercase tracking-[0.3em]">Departments</span>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS GRID */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {departments.map((dept, idx) => (
              <Link key={idx} href={`/departments/${dept.slug}`}
                className="bg-white p-10 group hover:bg-[#0B1F4F] transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-10">
                  <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.4em]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-gray-200 group-hover:text-white/10 font-black text-3xl tracking-tighter transition-colors">
                    {dept.abbr}
                  </span>
                </div>

                <h2 className="text-[#0B1F4F] group-hover:text-white font-black text-lg tracking-tight mb-3 transition-colors leading-snug">
                  {dept.name}
                </h2>
                <p className="text-gray-400 group-hover:text-white/50 text-sm leading-6 mb-8 flex-1 transition-colors">
                  {dept.desc}
                </p>

                <div className="border-t border-gray-100 group-hover:border-white/10 pt-6 flex items-center justify-between transition-colors">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#0B1F4F] group-hover:text-white font-black text-sm transition-colors">
                      {dept.intake}
                    </span>
                    <span className="text-gray-400 group-hover:text-white/30 text-xs uppercase tracking-[0.2em] transition-colors">
                      Intake
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-[0.3em]">
                    View â†’
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
