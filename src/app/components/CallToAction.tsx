'use client';

import React from 'react';

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-black py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">
          ¿Listo para transformar tu negocio inmobiliario?
        </h2>
        <p className=" mb-8 font-serif">
          Descubre cómo nuestra herramienta puede ayudarte a conectar
          oportunidades inmobiliarias con soluciones de financiamiento
          personalizadas.
        </p>
        <button
          onClick={() => alert('Pronto estaremos disponibles!')}
          className="w-[200px] transition bg-white text-black px-6 py-3 rounded-lg font-semibold font-serif text-lg shadow-md hover:bg-black hover:text-white"
        >
          Empecemos
        </button>
      </div>
    </section>
  );
}
