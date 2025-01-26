'use client';

import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Cambia el estado según la visibilidad (sirve para mejorar rendimiento de la pagina ya que la animación spline ralentiza el sitio aun cuando no esta en pantalla)
      },
      { threshold: 0.1 } // El 10% del elemento debe estar visible para considerarlo
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[450px] h-[calc(100vh-400px)] lg:h-[calc(100vh-170px)] 2xl:h-[calc(100vh-350px)] overflow-hidden rounded-b-3xl bg-gradient-to-l from-pink-400 to-pink-900"
    >
      {/* Animación 3D de Spline */}
      {isVisible && (
        <Spline
          scene="/scene.splinecode"
          className="absolute top-0 left-0 w-full h-[calc(100vh+4000px)] lg:h-[calc(100vh+170px)] 2xl:h-[calc(100vh+350px)] opacity-60"
        />
      )}

      {/* Contenido superpuesto */}
      <div className="absolute container mx-auto px-4 pt-20 inset-0 flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-4xl lg:text-6xl text-white drop-shadow-lg">
          <span className="font-light">Rethinking</span> <br />
          <span className="font-semibold">banking as a service</span>
        </h1>
        <p className="mt-4 text-xl text-gray-100 drop-shadow-lg font-serif">
          Impulsa tus ventas con financiamiento instantáneo para tus clientes
        </p>
        {/* Botón de Call to Action */}
        <button
          className="mt-6 px-6 py-3 w-[200px] bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition font-serif"
          onClick={() => alert('Pronto estaremos disponibles!')}
        >
          Empecemos
        </button>
      </div>

      {/* Overlay para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-pink-950 bg-opacity-20 z-5"></div>
    </section>
  );
}
