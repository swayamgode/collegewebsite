"use client"

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0B1F4F] text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* BRANDING */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
               <div className="bg-white rounded-full p-2 w-14 h-14 flex items-center justify-center">
                 <Image 
                   src="/img/vcet.edu.in_f9059271-4779-44bd-a2eb-9e19e7db0fd2/College-Logo.png" 
                   alt="VCET Logo" 
                   width={40} 
                   height={40} 
                   className="object-contain"
                 />
               </div>
               <div className="flex flex-col">
                 <span className="font-black text-sm tracking-widest uppercase">VCET Vasai</span>
                 <span className="text-xs font-bold text-[#F5A623] tracking-[0.3em] uppercase">Autonomous Institute</span>
               </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-medium max-w-xs mt-4">
              Vidyavardhini's College of Engineering and Technology is a premier technical institution committed to academic excellence and innovation since 1994.
            </p>
            <div className="flex gap-4 mt-4">
              {['FB', 'TW', 'IG', 'LI'].map((social) => (
                <Link key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs font-semibold hover:bg-[#F5A623] hover:text-[#0B1F4F] hover:border-[#F5A623] transition-all duration-300">
                  {social}
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.5em] text-[#F5A623] mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['About VCET', 'Academic Calendar', 'Exam Portal', 'Library', 'Mandatory Disclosure', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DEPARTMENTS */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.5em] text-[#F5A623] mb-8">Departments</h4>
            <ul className="flex flex-col gap-4">
              {['Computer Engineering', 'Information Technology', 'Civil Engineering', 'Mechanical Engineering', 'AI & Data Science', 'Data Engineering'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.5em] text-[#F5A623] mb-8">Contact Us</h4>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Address</span>
                <p className="text-xs font-bold leading-relaxed">
                  K.T. Marg, Vasai Road (W),<br />
                  Dist-Palghar, Maharashtra 401202
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Phone</span>
                <p className="text-xs font-bold">+91 250 233 8234</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Email</span>
                <p className="text-xs font-bold">principal@vcet.edu.in</p>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
            Â© 2026 VCET VASAI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 hover:text-[#F5A623] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 hover:text-[#F5A623] transition-colors">Terms of Use</Link>
            <Link href="#" className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 hover:text-[#F5A623] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
