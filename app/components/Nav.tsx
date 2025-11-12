"use client";
import React, { useState } from "react";
import { Menu, X, Home, Info, Mail, ClipboardList } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: Info },
  { label: "Flowers", href: "/gallery", icon: ClipboardList },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    // Only run smooth scroll for # anchors
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const section = document.getElementById(href.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-bold text-xl hover:text-pink-500 transition duration-300"
            >
              TheFlowerShop
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                >
                  <link.icon className="w-5 h-5 mr-2" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md cursor-pointer"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-pink-500 transition-colors"
            >
              <link.icon className="w-5 h-5 mr-3" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
