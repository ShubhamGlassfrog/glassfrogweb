"use client"
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed w-full bg-slate-950 shadow-md header">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-white hover:text-white">
                            Glassfrog
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
                                <Link href="/contact" className="text-white hover:text-white">
                                    Contact
                                </Link>
                                <button className="hidden md:inline-flex items-center px-3 py-2 ml-4 border border-transparent roundedcustom shadow-sm text-sm font-medium text-black bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                                    Contact Us
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
                    <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white">

                        Contact

                    </Link>
                    <button className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-black bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                        Contact Us
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
