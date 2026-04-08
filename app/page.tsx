"use client"

import Image from 'next/image';
import Link from 'next/link';

/* â”€â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const departments = [
  { name: 'Computer Engineering',   desc: 'Computation, algorithms & intelligent systems.', abbr: 'CE'  },
  { name: 'Information Technology', desc: 'Connected systems & enterprise solutions.',       abbr: 'IT'  },
  { name: 'AI & Data Science',      desc: 'Machine intelligence & analytical modelling.',    abbr: 'AIDS'},
  { name: 'Mechanical Engineering', desc: 'Thermodynamics, design & manufacturing.',         abbr: 'ME'  },
  { name: 'Civil Engineering',      desc: 'Infrastructure, structures & environment.',       abbr: 'CE'  },
  { name: 'Data Engineering',       desc: 'Big data pipelines & cloud architecture.',        abbr: 'DE'  },
];

const announcements = [
  { date: 'APR 05', title: 'End Semester Examination Schedule â€“ May 2026',          tag: 'Exam'      },
  { date: 'APR 02', title: 'National Level Hackathon â€“ Registration Now Open',      tag: 'Event'     },
  { date: 'MAR 28', title: 'Commencement of Classes for Odd Semester 2026',         tag: 'Academic'  },
  { date: 'MAR 25', title: 'Campus Placements: Google & Microsoft Drive Scheduled', tag: 'Placement' },
];

const placers = [
  { company: 'Google',    package: 'â‚¹42 LPA', count: '12 offers'  },
  { company: 'Microsoft', package: 'â‚¹38 LPA', count: '8 offers'   },
  { company: 'Infosys',   package: 'â‚¹12 LPA', count: '120 offers' },
  { company: 'TCS',       package: 'â‚¹7 LPA',  count: '200 offers' },
  { company: 'Accenture', package: 'â‚¹9 LPA',  count: '85 offers'  },
  { company: 'Wipro',     package: 'â‚¹8 LPA',  count: '70 offers'  },
];

const researchAreas = [
  { title: 'Artificial Intelligence',  count: '24 active projects', icon: 'â—ˆ' },
  { title: 'Green Energy Systems',     count: '11 active projects', icon: 'â—‰' },
  { title: 'Smart Infrastructure',     count: '8 active projects',  icon: 'â—Ž' },
  { title: 'Biomedical Engineering',   count: '6 active projects',  icon: 'â—' },
];

const campusStats = [
  { val: '15 acres', label: 'Campus Area' },
  { val: '80,000+', label: 'Sq. ft. Library' },
  { val: '40+',     label: 'Labs & Studios' },
  { val: '500+',    label: 'Hostel Capacity' },
];

const facilities = [
  { name: 'Central Library',      desc: '80,000+ books & digital archives.',   img: '/img/vcet.edu.in_f9059271-4779-44bd-a2eb-9e19e7db0fd2/young-girl-student-smiling-against-university_101969-611.jpg.jpeg' },
  { name: 'Innovation Lab',       desc: 'Maker-space, 3D printing & robotics.', img: '/img/vcet.edu.in_f9059271-4779-44bd-a2eb-9e19e7db0fd2/IMG-20251005-WA0080.jpg.jpeg' },
  { name: 'Sports Complex',       desc: 'Indoor & outdoor multi-sport arenas.', img: '/img/vcet.edu.in_f9059271-4779-44bd-a2eb-9e19e7db0fd2/Badminton-25.png' },
  { name: 'Student Activity Hub', desc: 'Clubs, auditorium & cultural spaces.', img: '/img/vcet.edu.in_f9059271-4779-44bd-a2eb-9e19e7db0fd2/IMG_4193-e1751968562696.jpg.jpeg' },
];

/* â”€â”€â”€ PAGE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* â•â•â•â• HERO â•â•â•â• */}
      <main className="relative h-screen bg-white overflow-hidden flex border-b border-gray-100">

        {/* LEFT — text column */}
        <div className="relative z-10 flex flex-col justify-between pt-32 pb-16 px-10 md:px-16 w-full lg:w-1/2">
          {/* Top label */}
          <div className="flex items-center gap-4">
            <div className="w-5 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] font-medium text-sm uppercase tracking-[0.3em]">Est. 1994 · Vasai, Maharashtra</span>
          </div>

          {/* Centre text block */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-gray-400 font-medium text-sm uppercase tracking-[0.3em] block mb-5">
                Vidyavardhini's College of Engineering &amp; Technology
              </span>
              <h1 className="text-[#0B1F4F] font-black leading-[0.9] tracking-[-0.03em] text-[clamp(4rem,8vw,7.5rem)] animate-fade-in">
                SHAPE<br />
                YOUR<br />
                <span className="text-[#F5A623]">FUTURE.</span>
              </h1>
            </div>

            <div className="w-12 h-px bg-gray-200" />

            <p className="text-gray-600 text-lg leading-relaxed max-w-md animate-fade-in animate-delay-100">
              An autonomous institution committed to academic excellence, innovation and industry-ready graduates since 1994.
            </p>

            <div className="flex gap-4 animate-fade-in animate-delay-200">
              <Link href="/admission"
                className="bg-[#0B1F4F] text-white px-8 py-4 font-medium text-sm uppercase tracking-[0.2em] hover:bg-[#F5A623] hover:text-[#0B1F4F] transition-colors">
                Apply 2026
              </Link>
              <Link href="/about"
                className="border border-gray-200 text-[#0B1F4F] px-8 py-4 font-medium text-sm uppercase tracking-[0.2em] hover:border-[#0B1F4F] transition-colors">
                Learn More
              </Link>
            </div>
          </div>

          {/* Bottom â€” accreditation row */}
          <div className="flex gap-8 animate-fade-in animate-delay-300">
            {[['NAAC','A Grade'],['NBA','Accredited'],['AICTE','Approved'],['MU','Affiliated']].map(([abbr, label], i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[#0B1F4F] font-black text-xs tracking-tight">{abbr}</span>
                <span className="text-gray-400 text-xs uppercase tracking-[0.25em]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT â€” image panel */}
        <div className="hidden lg:block relative w-1/2 h-full">
          <Image
            src="/img/VCET-Home-1-scaled.jpg"
            alt="VCET Campus"
            fill
            className="object-cover"
            priority
          />
          {/* White left-fade into the text column */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent" />
          {/* Scroll hint */}
          <div className="absolute bottom-16 right-10 flex flex-col items-end gap-2">
            <span className="text-white/60 text-xs uppercase tracking-[0.4em]">Scroll to explore</span>
            <div className="w-px h-12 bg-white/30 ml-auto" />
          </div>
          {/* Badge */}
          <div className="absolute top-16 right-10 bg-white/80 backdrop-blur-sm border border-white/60 px-5 py-3">
            <span className="text-[#0B1F4F] font-medium text-xs uppercase tracking-[0.3em] block">Ranked</span>
            <span className="text-[#F5A623] font-black text-xl tracking-tight">#1</span>
            <span className="text-gray-400 text-xs uppercase tracking-[0.2em] block">Vasai Region</span>
          </div>
        </div>
      </main>


      {/* â•â•â•â• MARQUEE â•â•â•â• */}
      <div className="bg-[#F5A623] py-3 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          {[1,2,3].map((i) => (
            <span key={i} className="text-[#0B1F4F] font-medium text-xs uppercase tracking-[0.5em] mx-12">
              â€¢ ADMISSIONS OPEN 2026â€“27 â€¢ SEMESTER RESULTS OUT FOR SECOND YEAR â€¢ PROJECT SUBMISSION DEADLINE: 15 APR â€¢ NATIONAL SYMPOSIUM: 20 MAY â€¢
            </span>
          ))}
        </div>
      </div>

      {/* â•â•â•â• QUICK STATS â•â•â•â• */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: '30+',   sub: 'Years of Excellence' },
              { label: '5000+', sub: 'Students Enrolled'   },
              { label: '150+',  sub: 'Expert Faculty'      },
              { label: '95%',   sub: 'Placement Rate'      },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-5xl md:text-6xl font-black text-[#0B1F4F] tracking-tighter">{stat.label}</span>
                <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-[0.4em]">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â• ABOUT / VISION â•â•â•â• */}
      <section className="py-28 bg-[#0B1F4F]">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text */}
            <div>
              <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] mb-5 block">Who We Are</span>
              <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-8">
                THREE DECADES OF<br />
                <span className="text-[#F5A623]">ENGINEERING EXCELLENCE.</span>
              </h2>
              <p className="text-white/60 text-sm leading-7 max-w-lg mb-10">
                Founded in 1994, VCET is an autonomous institution affiliated to Mumbai University, approved by AICTE and accredited NAAC 'A'. We nurture technically proficient, ethically grounded graduates who lead industry and academia alike.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                {[
                  { val: '1994',  lbl: 'Year Founded'       },
                  { val: 'MU',    lbl: 'Affiliated To'       },
                  { val: 'AICTE', lbl: 'Approved By'         },
                  { val: '\'A\'', lbl: 'NAAC Grade'          },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-[#F5A623]/30 pl-4">
                    <span className="text-white font-black text-xl tracking-tight block">{item.val}</span>
                    <span className="text-white/40 text-xs uppercase tracking-[0.3em]">{item.lbl}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-block border border-[#F5A623]/40 text-[#F5A623] px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#F5A623] hover:text-[#0B1F4F] transition-all">
                Our Story â†’
              </Link>
            </div>

            {/* Image Stack */}
            <div className="relative h-[420px]">
              <div className="absolute inset-0 rounded-sm overflow-hidden">
                <Image
                  src="/img/vcet.edu.in_f9059271-4779-44bd-a2eb-9e19e7db0fd2/VCET-Home-1-scaled.jpg.jpeg"
                  alt="Campus"
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4F] via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex gap-6">
                {['Innovation','Integrity','Impact'].map((word, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 flex-1 text-center">
                    <span className="text-white font-medium text-xs uppercase tracking-[0.3em]">{word}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â•â•â•â• DEPARTMENTS â•â•â•â• */}
      <section className="py-28 bg-[#F9F8F6]">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] mb-3 block">Academic Domains</span>
              <h2 className="text-[#0B1F4F] text-4xl md:text-5xl font-black tracking-tighter leading-none">WORLD-CLASS<br />DEPARTMENTS.</h2>
            </div>
            <Link href="/departments" className="text-[#0B1F4F] font-medium text-xs uppercase tracking-[0.3em] border-b-2 border-[#F5A623] pb-1 hover:text-[#F5A623] transition-colors shrink-0 mb-2">
              View All â†’
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {departments.map((dept, idx) => (
              <div key={idx} className="bg-white p-10 group hover:bg-[#0B1F4F] transition-all duration-300 cursor-pointer">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.4em]">{String(idx+1).padStart(2,'0')}</span>
                  <span className="text-[#0B1F4F] group-hover:text-white/30 font-black text-2xl tracking-tighter transition-colors">{dept.abbr}</span>
                </div>
                <h3 className="text-[#0B1F4F] group-hover:text-white text-base font-black tracking-tight mb-3 transition-colors">{dept.name}</h3>
                <p className="text-gray-400 group-hover:text-white/50 text-sm leading-6 mb-8 transition-colors">{dept.desc}</p>
                <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-[0.3em] group-hover:opacity-80 transition-opacity">Explore â†’</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â• ANNOUNCEMENTS & CAMPUS IMAGERY â•â•â•â• */}
      <section className="py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Announcements */}
            <div>
              <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] mb-5 block">Stay Informed</span>
              <h2 className="text-[#0B1F4F] text-4xl font-black tracking-tighter mb-12">ANNOUNCEMENTS.</h2>
              <div className="flex flex-col divide-y divide-gray-100">
                {announcements.map((item, idx) => (
                  <div key={idx} className="flex gap-8 py-6 group cursor-pointer items-start">
                    <div className="flex flex-col items-center justify-center bg-gray-50 group-hover:bg-[#0B1F4F] transition-colors px-5 py-3 rounded-sm shrink-0 w-16 text-center">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 group-hover:text-white/50 transition-colors">{item.date.split(' ')[0]}</span>
                      <span className="text-lg font-black text-[#0B1F4F] group-hover:text-white transition-colors">{item.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex flex-col gap-1 pt-1">
                      <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-[0.3em]">{item.tag}</span>
                      <h4 className="text-[#0B1F4F] text-sm font-bold leading-snug group-hover:text-[#F5A623] transition-colors">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/announcements" className="mt-10 inline-block bg-[#0B1F4F] text-white px-8 py-3 font-medium text-xs uppercase tracking-[0.3em] hover:bg-[#F5A623] transition-all">
                View All Announcements
              </Link>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-3 h-[500px]">
              <div className="relative overflow-hidden row-span-2">
                <Image src="/img/vcet.edu.in_f9059271-4779-44bd-a2eb-9e19e7db0fd2/young-girl-student-smiling-against-university_101969-611.jpg.jpeg" alt="Library" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <span className="text-white font-medium text-xs uppercase tracking-[0.3em]">Central Library</span>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <Image src="/img/vcet.edu.in_f9059271-4779-44bd-a2eb-9e19e7db0fd2/IMG_4193-e1751968562696.jpg.jpeg" alt="Students" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-white font-medium text-xs uppercase tracking-[0.3em]">Student Life</span>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <Image src="/img/vcet.edu.in_f9059271-4779-44bd-a2eb-9e19e7db0fd2/IMG-20251005-WA0080.jpg.jpeg" alt="Lab" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-white font-medium text-xs uppercase tracking-[0.3em]">Innovation Lab</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â•â•â•â• PLACEMENTS â•â•â•â• */}
      <section className="py-28 bg-[#0B1F4F]">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] mb-4 block">Career Outcomes</span>
              <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter leading-[1.05]">
                INDUSTRY-LEADING<br />
                <span className="text-[#F5A623]">PLACEMENTS.</span>
              </h2>
            </div>
            <div className="flex gap-12 shrink-0">
              {[['95%','Placement Rate'],['â‚¹42 LPA','Highest Package'],['300+','Recruiters']].map(([v,l],i)=>(
                <div key={i} className="text-center">
                  <span className="text-white font-black text-2xl md:text-3xl block tracking-tight">{v}</span>
                  <span className="text-white/40 text-xs uppercase tracking-[0.3em]">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
            {placers.map((p, i) => (
              <div key={i} className="bg-[#0B1F4F] p-8 text-center border border-white/5 hover:bg-white/5 transition-colors group">
                <span className="text-white font-black text-sm block mb-1 tracking-tight">{p.company}</span>
                <span className="text-[#F5A623] font-black text-xs block mb-2">{p.package}</span>
                <span className="text-white/30 text-xs uppercase tracking-[0.2em]">{p.count}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link href="/placements" className="border border-[#F5A623]/40 text-[#F5A623] px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#F5A623] hover:text-[#0B1F4F] transition-all">
              Full Placement Report â†’
            </Link>
          </div>
        </div>
      </section>

      {/* â•â•â•â• RESEARCH & INNOVATION â•â•â•â• */}
      <section className="py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] mb-5 block">Discovery & Impact</span>
              <h2 className="text-[#0B1F4F] text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-[1.05]">
                RESEARCH THAT<br />CHANGES WORLDS.
              </h2>
              <p className="text-gray-400 text-sm leading-7 mb-10 max-w-md">
                Our faculty and students collaborate on funded research projects spanning AI, clean energy, smart cities, and biomedical technology â€” publishing in top-tier journals and filing industry patents.
              </p>
              <div className="grid grid-cols-2 gap-px bg-gray-100">
                {[['50+','Research Papers (2025)'],['â‚¹2Cr+','Funded Projects'],['15','Industry Collaborations'],['8','Patents Filed']].map(([v,l],i)=>(
                  <div key={i} className="bg-white p-6">
                    <span className="text-[#0B1F4F] font-black text-2xl block mb-1 tracking-tight">{v}</span>
                    <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px bg-gray-100">
              {researchAreas.map((r, i) => (
                <div key={i} className="bg-white p-8 flex items-center gap-8 group hover:bg-[#0B1F4F] transition-colors cursor-pointer">
                  <span className="text-3xl text-[#0B1F4F] group-hover:text-[#F5A623] transition-colors font-black">{r.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-[#0B1F4F] group-hover:text-white text-sm font-semibold tracking-tight mb-1 transition-colors">{r.title}</h3>
                    <span className="text-gray-400 group-hover:text-white/40 text-xs uppercase tracking-[0.2em] transition-colors">{r.count}</span>
                  </div>
                  <span className="text-[#F5A623] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">â†’</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â•â•â•â• CAMPUS LIFE â•â•â•â• */}
      <section className="py-28 bg-[#F9F8F6]">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] mb-3 block">Life at VCET</span>
              <h2 className="text-[#0B1F4F] text-4xl md:text-5xl font-black tracking-tighter leading-none">CAMPUS LIFE.</h2>
            </div>
            <div className="flex gap-8 mb-2">
              {campusStats.map((s,i) => (
                <div key={i} className="text-right">
                  <span className="text-[#0B1F4F] font-black text-lg block tracking-tight">{s.val}</span>
                  <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((f, i) => (
              <div key={i} className="group relative overflow-hidden h-72 cursor-pointer">
                <Image src={f.img} alt={f.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4F]/90 via-[#0B1F4F]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-black text-sm tracking-tight mb-1">{f.name}</h3>
                  <p className="text-white/50 text-sm leading-5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â• TESTIMONIALS â•â•â•â• */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="mb-16 text-center">
            <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] mb-3 block">Alumni Voices</span>
            <h2 className="text-[#0B1F4F] text-4xl font-black tracking-tighter">WHAT OUR ALUMNI SAY.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
            {[
              { name: 'Rohan Mehta',    batch: 'B.E. CSE 2020', company: 'Google', quote: 'VCET instilled a problem-solving mindset that I rely on every single day at Google. The faculty pushed us beyond textbooks.' },
              { name: 'Priya Sharma',   batch: 'B.E. IT 2019',  company: 'Microsoft', quote: 'The research culture and lab infrastructure at VCET are genuinely world-class. My final year project became my joining portfolio.' },
              { name: 'Amit Desai',     batch: 'B.E. ME 2018',  company: 'Tata Motors', quote: 'Industry exposure through VCET placement cell was exceptional. I had five offers before graduation day even arrived.' },
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 flex flex-col gap-6">
                <span className="text-[#F5A623] text-2xl font-black">"</span>
                <p className="text-gray-600 text-sm leading-7 flex-1">"{t.quote}"</p>
                <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#0B1F4F] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">{t.name[0]}</span>
                  </div>
                  <div>
                    <span className="text-[#0B1F4F] font-black text-xs block">{t.name}</span>
                    <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">{t.batch} Â· {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â• CTA BANNER â•â•â•â• */}
      <section className="py-28 bg-[#F5A623]">
        <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <span className="text-[#0B1F4F]/60 font-medium text-xs uppercase tracking-[0.5em] mb-3 block">Admissions 2026â€“27</span>
            <h2 className="text-[#0B1F4F] text-4xl md:text-5xl font-black tracking-tighter leading-[1.05]">
              YOUR ENGINEERING<br />JOURNEY BEGINS HERE.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/admission" className="bg-[#0B1F4F] text-white px-10 py-4 font-medium text-xs uppercase tracking-widest hover:bg-white hover:text-[#0B1F4F] transition-all">
              Apply Now
            </Link>
            <Link href="/contact" className="border-2 border-[#0B1F4F] text-[#0B1F4F] px-10 py-4 font-medium text-xs uppercase tracking-widest hover:bg-[#0B1F4F] hover:text-white transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
