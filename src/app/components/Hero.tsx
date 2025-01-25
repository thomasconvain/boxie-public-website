'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-400px)] lg:h-[calc(100vh-200px)] overflow-hidden rounded-b-3xl bg-gradient-to-l from-pink-400 to-pink-900">
      {/* Animación 3D de Spline */}
      <Spline
        scene="/scene.splinecode" // Reemplaza con la ruta a tu archivo spline
        className="absolute top-0 left-0 w-full h-[calc(100vh-400px)] lg:h-[calc(100vh+200px)] opacity-60" // Expande la animación para compensar el recorte
      />

      {/* Contenido superpuesto */}
      <div className="absolute container mx-auto px-4 inset-0 flex flex-col items-left justify-center z-10 text-left">
        <h1 className="text-4xl lg:text-6xl text-white drop-shadow-lg">
          <span className="font-light">Rethinking</span> <br />
          <span className="font-semibold">banking as a service</span>
        </h1>
        <p className="mt-4 text-xl text-gray-200 drop-shadow-lg">
          {/* Rethinking banking as a service */}
        </p>
      </div>

      {/* Overlay para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-5"></div>
    </section>
  );
}
