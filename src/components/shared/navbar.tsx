"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { Logo } from './logo';

interface NavContent {
  id: string;
  href: string;
  name: string;
  description?: string;
}

interface NavLink {
  id: string;
  href: string;
  name: string;
  contents?: NavContent[];
}

const nav_links: NavLink[] = [
    {
        id: "1",
        href: "/",
        name: "Platform",
        contents: [
            { id: "1", href: "/platform/payments", name: "Payments", description: `Ready to use payment rails and services for your merchants` },
            { id: "2", href: "/platform/merchant-services", name: "Merchant Services", description: `Intuitive tools and features for merchant onboarding, management and monitoring` },
            { id: "3", href: "/platform/technology", name: "Technology", description: `Modular API-based suite with instant connectors and configurable services` },
        ]
    },
    {
        id: "2",
        href: "/",
        name: "Solutions",
        contents: [
            { id: "1", href: "/solutions/financial-institutions", name: "Financial Institutions" }
        ]
    },
    {
        id: "3",
        href: "/company/about-us",
        name: "Company",
        contents: [
            { id: "1", href: "/company/about-us", name: "About Us" },
            { id: "2", href: "/", name: "Partners" }
        ]
    },
    { id: "4", href: "/company/newsroom", name: "Newsroom" },
    { id: "5", href: "/", name: "Careers" },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const router = useRouter()
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = (name: string) => setOpenDropdown(openDropdown === name ? null : name);

    return (
        <div className='w-full px-4 sm:px-6 py-4 bg-transparent z-50'>
            <nav className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <Logo variant="wordmark" className="h-12 sm:h-14" />
                    </Link>
                    
                    <div className="hidden lg:flex space-x-8 xl:space-x-12 items-center">
                        {nav_links.map((item) => (
                            <div key={item.id} className="relative group">
                                {item.contents ? (
                                    <button
                                        className="text-base xl:text-base hover:text-teal-500 transition-colors flex items-center cursor-pointer"
                                        onClick={() => item.contents && toggleDropdown(item.name)}
                                        onMouseEnter={() => item.contents && setOpenDropdown(item.name)}
                                    >
                                        {item.name}
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                    </button>
                                ):(
                                    <button
                                        className="text-base xl:text-base hover:text-teal-500 transition-colors flex items-center cursor-pointer"
                                        onClick={() => router.push(item.href)}
                                        onMouseEnter={() => item.contents && setOpenDropdown(item.name)}
                                    >
                                        {item.name}
                                    </button>
                                )}

                                {openDropdown === item.name && item.contents && (
                                    <div
                                        className="absolute left-0 mt-2 w-[350px] bg-white rounded-md shadow-lg py-6 px-4 z-50 border border-gray-100"
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        {item.contents.map((subItem) => (
                                            <Link
                                                key={subItem.id}
                                                href={subItem.href}
                                                className="block px-4 py-3 hover:border hover:border-gray-200 hover:rounded-md hover:bg-[#f5f5f5] transition-all"
                                            >
                                                <div className="text-base font-medium text-black">{subItem.name}</div>
                                                {subItem?.description && (
                                                    <div className="text-sm font-medium text-gray-400 mt-1 leading-snug">
                                                        {subItem?.description}
                                                    </div>
                                                )}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    <div className="lg:hidden flex items-center">
                        <button
                            ref={menuButtonRef}
                            onClick={toggleMenu}
                            className="text-black focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    
                    <button className="hidden lg:block bg-black text-white text-base xl:text-lg px-4 xl:px-6 py-2 xl:py-3 rounded-md hover:bg-gray-800 transition-colors">
                        Get in touch
                    </button>
                </div>
                
                <div
                    ref={menuRef}
                    className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="px-4 py-6 space-y-6">
                        {nav_links.map((item) => (
                            <div key={item.id}>
                                {item.contents ? (
                                    <div className="mb-2">
                                        <button
                                            className="flex items-center justify-between w-full text-lg hover:text-teal-500 transition-colors"
                                            onClick={() => toggleDropdown(item.name)}
                                        >
                                            {item.name}
                                            <svg
                                                className={`w-4 h-4 ml-1 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {openDropdown === item.name && (
                                            <div className="pl-4 mt-2 space-y-3">
                                                {item.contents.map((subItem) => (
                                                    <Link
                                                        key={subItem.id}
                                                        href={subItem.href}
                                                        className="block hover:text-teal-500 transition-colors px-4 py-2 hover:border hover:border-gray-200 hover:rounded-md hover:bg-[#f5f5f5]"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <div className="text-base">{subItem.name}</div>
                                                        {subItem.description && (
                                                            <div className="text-sm text-gray-500 mt-1 leading-snug">
                                                                {subItem.description}
                                                            </div>
                                                        )}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block text-lg hover:text-teal-500 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <button className="w-full bg-black text-white text-lg px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                            Get in touch
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
