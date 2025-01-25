'use client';

import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo y Dirección */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/boxie-logo-white.png" alt="Logo" className="w-32 mb-4" />
          <p className="text-sm text-gray-400">
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
            className="text-gray-400 hover:text-white transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/boxie-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} boxie.ai. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
