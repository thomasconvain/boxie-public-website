'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const tabs = [
  {
    name: 'Configura los parámetros',
    shortName: 'Configura',
    image: '/step1.webp',
    content: `Configura los parámetros globales  para gestionar las interacciones entre proyectos de manera coherente y personaliza opciones propias de cada proyecto.`,
  },
  {
    name: 'Atiende a tus clientes',
    shortName: 'Atiende',
    image: '/step2.webp',
    content: `El ejecutivo inmobiliario ingresa detalles clave en el chat de WhatsApp, como tipo de propiedad, monto del pie inicial, y plazo de financiamiento deseado. Esto inicia el análisis personalizado.`,
  },
  {
    name: 'Recibe opciones en tiempo real',
    shortName: 'Revisa',
    image: '/step3.webp',
    content:
      'La herramienta analiza las políticas comerciales y genera opciones de financiamiento claras, detallando descuentos, tasas, incentivos y cuotas mensuales en segundos.',
  },
  {
    name: 'Comparte y gestiona propuestas',
    shortName: 'Comparte',
    image: '/step4.webp',
    content:
      'El ejecutivo puede enviar las opciones al cliente directamente desde el chat, realizar ajustes según las necesidades y llevar un seguimiento de las interacciones en un historial organizado.',
  },
];

export default function UserSteps() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
    }, 5000); // Cambia de tab cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <section className="font-serif" id="product">
      {/* General Text */}
      <div className="text-center -mt-5 py-20 mb-8 rounded-b-3xl bg-gradient-to-b from-slate-900 to-black shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl lg:text-4xl font-light text-white font-sans">
            Conecta oportunidades inmobiliarias
            <br />
            con <strong>financiamiento a medida</strong>
          </h2>
          <p className="mt-4 text-gray-100">
            Somos la herramienta definitiva para ejecutivos de inmobiliarias que
            facilita propuestas financieras rápidas y personalizadas.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-b-3xl z-10 relative shadow-lg shadow-pink-100 pb-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-4 border-b border-gray-200">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-md pb-2 ${
                  activeTab === index
                    ? 'text-black font-semibold'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {tab.shortName}
              </button>
            ))}
          </div>

          {/* Barra de progreso animada con CSS */}
          <div className="relative h-1 bg-gray-200 rounded-full -mt-1 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-1 bg-pink-600 rounded-full"
              style={{
                animation: `progressAnimation 5s linear infinite`,
                transformOrigin: 'left',
              }}
            ></div>
          </div>

          {/* Tab Content */}
          <div className="mt-8 flex flex-col md:flex-row items-center max-w-[900px] mx-auto space-y-8 md:space-y-0 md:space-x-8">
            {/* Left Section: Text */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 font-sans">
                {tabs[activeTab].name}
              </h3>
              <p
                className="mt-4 text-gray-600"
                dangerouslySetInnerHTML={{ __html: tabs[activeTab].content }}
              ></p>
            </div>

            {/* Right Section: Image */}
            <div className="flex-1">
              <Image
                src={tabs[activeTab].image}
                alt={tabs[activeTab].name}
                width={300}
                height={300}
                className="rounded-2xl shadow-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilo para la animación de la barra de progreso */}
      <style jsx>{`
        @keyframes progressAnimation {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
