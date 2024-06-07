"use client"
import { useState } from 'react';
import Link from 'next/link';

const Header2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed w-full  header  pt-4 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-white hover:text-white">
                            <img src="/logo.svg" className="h-20 me-3" alt="Glassfrog Logo" />
                        </Link>
                    </div>
                    
                </div>
            </div>
           
        </header>
    );
};

export default Header2;
