'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-700">
          <a href="/">
            {' '}
            <Image src="/boxie-logo.png" alt="Boxie" width={130} height={50} />
          </a>
        </div>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li>
            <a href="#about" className="hover:text-pink-700">
              Sobre nosotros
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-pink-700">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-700">
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden block text-gray-600 focus:outline-none"
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

      {/* Menú desplegable para móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 text-gray-600 px-4 py-4">
            <li>
              <a href="#about" className="block hover:text-pink-700">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="block hover:text-pink-700">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-pink-700">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
