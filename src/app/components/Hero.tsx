'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-200px)] overflow-hidden">
      {/* Animación 3D de Spline */}
      <Spline
        scene="/scene.splinecode" // Reemplaza con la ruta a tu archivo spline
        className="absolute top-0 left-0 w-full h-[calc(100vh+200px)]" // Expande la animación para compensar el recorte
      />

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">Boxie</h1>
        <p className="mt-4 text-xl text-gray-200 drop-shadow-lg">
          Rethinking banking as a service
        </p>
      </div>

      {/* Overlay para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-5"></div>
    </section>
  );
}
