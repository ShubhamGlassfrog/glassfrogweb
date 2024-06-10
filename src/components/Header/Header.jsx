"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
     const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
         <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950 shadow-md' : 'bg-transparent'
      }`}
    >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-white hover:text-white">
                                                        <img src="/whitelogo.png" className="h-44 me-3 overflow-hidden" alt="Glassfrog Logo" style={{marginLeft:"-7px !important"}}/>

                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <nav className="flex space-x-4 items-center gap-8">
                                <Link href="/" className="text-white hover:text-white">
                                    Home
                                </Link>
                                <Link href="/about" className="text-white hover:text-white">
                                    About
                                </Link>
                                <Link href="/site-audit" className="text-white hover:text-white">
                                    Site Audit
                                </Link>
                                
                                <div className="relative">
          <button
            onClick={handleDropdownToggle}
            className="text-white hover:text-gray-300"
          >
            Services
          </button>
          {isDropdownOpen && (
                                        <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                                             <Link href="/services" className="block px-4 py-2 text-black hover:bg-gray-100">
                                    All Services
                                </Link>
              <Link
                href="/marketing"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Marketing
              </Link>
              <Link
                href="/technology"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Technical
              </Link>
            </div>
          )}
        </div>
                                <button className="hidden md:inline-flex items-center px-3 py-2 ml-4 border border-transparent roundedcustom shadow-sm text-sm font-medium text-white hover:text-black bg-[#ed2998] hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                                      <Link href="/contact" >Contact Us</Link>
                                </button>
                            </nav>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-white hover:text-white focus:outline-none"
                            >
                                <svg
                                    className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                                <svg
                                    className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 items-center">
                    <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white">

                        Home

                    </Link>
                    <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white">

                        About

                    </Link>
                     <Link href="/site-audit" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white">
                                    Site Audit
                                </Link>
                    <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white">

                        Services

                    </Link>
                    <button className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-[#ed2998] hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                       <Link href="/contact" >Contact Us</Link> 
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
