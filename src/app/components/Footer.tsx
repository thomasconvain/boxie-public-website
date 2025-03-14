'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8" id="contact">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo y Dirección */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/boxie-logo-white-text-only.png"
            alt="Logo"
            width={100}
            height={50}
            className="mb-4"
          />
          <p className="text-sm text-gray-400 font-serif text-center md:text-left">
            Las Urbinas 53, of 141,
            <br />
            Providencia, Santiago, Chile
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/boxie.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/boxie-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-400 font-serif">
        &copy; {new Date().getFullYear()} boxie.ai. Todos los derechos
        reservados.
        <button
          onClick={() => (window.location.href = '/privacy-policy')}
          className="px-6 py-2 hover:underline"
        >
          Políticas de Privacidad
        </button>
      </div>
    </footer>
  );
}
