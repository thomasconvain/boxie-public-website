'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image
              src={isScrolled ? '/boxie-logo.png' : '/boxie-logo-white.png'}
              alt="Boxie"
              width={130}
              height={50}
            />
          </Link>
        </div>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li>
            <a
              href="#product"
              className={`hover:text-pink-800 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Producto
            </a>
          </li>
          <li>
            <a
              href="#features"
              className={`hover:text-pink-800 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Funcionalidades
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`hover:text-pink-800 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón de menú móvil */}
        <button
          className={`md:hidden block focus:outline-none z-50 ${
            isScrolled && !isMenuOpen ? 'text-gray-700' : 'text-gray-200'
          }`}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Menú móvil en pantalla completa */}
      <div
        className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="space-y-8 text-center text-xl">
          <li>
            <a
              href="#product"
              onClick={toggleMenu}
              className="hover:text-pink-300"
            >
              Producto
            </a>
          </li>
          <li>
            <a
              href="#features"
              onClick={toggleMenu}
              className="hover:text-pink-300"
            >
              Funcionalidades
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="hover:text-pink-300"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
