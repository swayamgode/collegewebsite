'use client';

import type { Metadata } from 'next';

const contactInfo = [
  { label: 'Address',   value: 'K.T. Marg, Vasai Road (W), Dist. Palghar, Maharashtra 401202' },
  { label: 'Phone',     value: '+91 250 233 8234' },
  { label: 'Email',     value: 'principal@vcet.edu.in' },
  { label: 'Website',   value: 'www.vcet.edu.in' },
];

const departments = [
  { name: 'Admissions Office',   email: 'admissions@vcet.edu.in', phone: '+91 250 233 8234' },
  { name: 'Placement Cell',      email: 'placements@vcet.edu.in', phone: '+91 250 233 8235' },
  { name: 'Examination Cell',    email: 'exam@vcet.edu.in',       phone: '+91 250 233 8236' },
  { name: 'Research Office',     email: 'research@vcet.edu.in',   phone: '+91 250 233 8237' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24">

      {/* HEADER */}
      <section className="py-20 bg-[#0B1F4F]">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em]">Get in Touch</span>
          </div>
          <h1 className="text-white font-black text-4xl md:text-6xl tracking-tighter leading-none">
            CONTACT US.
          </h1>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* LEFT â€” Info */}
            <div className="flex flex-col gap-12">
              <div>
                <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-8">General Information</span>
                <div className="flex flex-col divide-y divide-gray-100">
                  {contactInfo.map((c, i) => (
                    <div key={i} className="flex gap-8 py-5">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.3em] w-20 shrink-0 pt-0.5">{c.label}</span>
                      <span className="text-[#0B1F4F] font-bold text-sm leading-6">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-8">Department Contacts</span>
                <div className="flex flex-col gap-px bg-gray-100">
                  {departments.map((d, i) => (
                    <div key={i} className="bg-white p-6">
                      <h3 className="text-[#0B1F4F] font-black text-xs mb-2">{d.name}</h3>
                      <div className="flex gap-6">
                        <span className="text-gray-400 text-xs">{d.email}</span>
                        <span className="text-gray-400 text-xs">{d.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT â€” Form */}
            <div>
              <span className="text-[#F5A623] font-medium text-xs uppercase tracking-[0.5em] block mb-8">Send a Message</span>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-[0.3em]">First Name</label>
                    <input type="text" placeholder="John"
                      className="border border-gray-200 px-4 py-3 text-xs text-[#0B1F4F] focus:outline-none focus:border-[#0B1F4F] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-[0.3em]">Last Name</label>
                    <input type="text" placeholder="Doe"
                      className="border border-gray-200 px-4 py-3 text-xs text-[#0B1F4F] focus:outline-none focus:border-[#0B1F4F] transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-[0.3em]">Email</label>
                  <input type="email" placeholder="you@example.com"
                    className="border border-gray-200 px-4 py-3 text-xs text-[#0B1F4F] focus:outline-none focus:border-[#0B1F4F] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-[0.3em]">Subject</label>
                  <select className="border border-gray-200 px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#0B1F4F] transition-colors bg-white">
                    <option>Admissions Enquiry</option>
                    <option>Placement Enquiry</option>
                    <option>Research Collaboration</option>
                    <option>General Query</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-[0.3em]">Message</label>
                  <textarea rows={5} placeholder="Your message..."
                    className="border border-gray-200 px-4 py-3 text-xs text-[#0B1F4F] focus:outline-none focus:border-[#0B1F4F] transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="bg-[#0B1F4F] text-white px-10 py-4 font-medium text-xs uppercase tracking-[0.3em] hover:bg-[#F5A623] hover:text-[#0B1F4F] transition-colors self-start">
                  Send Message â†’
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="h-64 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-gray-300 font-medium text-xs uppercase tracking-[0.5em] block mb-2">Find Us</span>
            <span className="text-gray-400 font-bold text-xs">K.T. Marg, Vasai Road (W), Palghar, Maharashtra</span>
          </div>
        </div>
        {/* Grid overlay for map aesthetic */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </section>
    </div>
  );
}
