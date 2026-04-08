"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Departments', href: '/departments' },
    { name: 'Examination', href: '/examination' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'Placement', href: '/placement' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-md border-b border-gray-100 h-20' 
          : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-10 h-full flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-5 group">
          <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-full p-2 shadow-sm">
            <Image 
              src="/img/vcet.edu.in_f9059271-4779-44bd-a2eb-9e19e7db0fd2/College-Logo.png" 
              alt="Official VCET Logo" 
              width={48} 
              height={48} 
              className="object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col border-l border-gray-200 pl-5 h-10 justify-center">
            <span className="font-black text-sm tracking-[-0.03em] leading-tight text-[#0B1F4F]">VCET VASAI</span>
            <span className="text-[9px] font-black text-[#F5A623] uppercase tracking-[0.4em] mt-0.5">Autonomous Excellence</span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <div className="hidden xl:flex items-center gap-6 ml-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium uppercase tracking-[0.15em] text-[#8C8C8C] hover:text-[#0B1F4F] transition-all duration-300 relative group py-2 whitespace-nowrap flex-shrink-0"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F5A623] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="hidden lg:flex items-center gap-6 ml-auto pl-6 border-l border-gray-100 h-8 flex-shrink-0">
          <Link 
            href="/portal" 
            className="text-sm font-medium uppercase tracking-[0.15em] text-[#0B1F4F] transition-colors relative group py-2 whitespace-nowrap"
          >
            Portal
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#F5A623]"></span>
          </Link>
          <button className="bg-[#0B1F4F] text-white px-8 py-2.5 rounded-full font-medium text-sm uppercase tracking-[0.2em] shadow-xl shadow-[#0B1F4F]/10 hover:bg-[#F5A623] hover:text-[#0B1F4F] transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap flex-shrink-0 min-w-max">
            Apply Now
          </button>
        </div>

        {/* MOBILE MENU BUTTON placeholder */}
        <button className="xl:hidden text-[#0B1F4F] p-4 text-2xl">
          â˜°
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
