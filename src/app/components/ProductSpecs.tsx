'use client';

import React, { useState, useEffect } from 'react';

const tabs = [
  {
    name: 'Configura los parámetros',
    shortName: 'Configura',
    image: 'step1.webp',
    content: `Configura los parámetros globales  para gestionar las interacciones entre proyectos de manera coherente y personaliza opciones propias de cada proyecto.`,
  },
  {
    name: 'Atiende a tus clientes',
    shortName: 'Atiende',
    image: 'step2.webp',
    content: `El ejecutivo inmobiliario ingresa detalles clave en el chat de WhatsApp, como tipo de propiedad, monto del pie inicial, y plazo de financiamiento deseado. Esto inicia el análisis personalizado.`,
  },
  {
    name: 'Recibe opciones en tiempo real',
    shortName: 'Recibe opciones',
    image: 'step3.webp',
    content:
      'La herramienta analiza las políticas comerciales y genera opciones de financiamiento claras, detallando descuentos, tasas, incentivos y cuotas mensuales en segundos.',
  },
  {
    name: 'Comparte y gestiona propuestas',
    shortName: 'Comparte',
    image: 'step4.webp',
    content:
      'El ejecutivo puede enviar las opciones al cliente directamente desde el chat, realizar ajustes según las necesidades y llevar un seguimiento de las interacciones en un historial organizado.',
  },
];

export default function ProductSpecifications() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 5000; // Tiempo total (3 segundos)
    const updateInterval = 10; // Intervalo de actualización (50ms)
    const step = 100 / (totalDuration / updateInterval); // Incremento por intervalo

    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += step;

      if (currentProgress >= 100) {
        currentProgress = 0;
        setActiveTab((prevTab) => (prevTab + 1) % tabs.length); // Avanza al siguiente tab
      }

      setProgress(currentProgress); // Actualiza el progreso visual
    }, updateInterval);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <section className="font-serif">
      {/* General Text */}
      <div className="text-center -mt-5 py-20 mb-8 rounded-b-3xl bg-gradient-to-b from-slate-900 to-black">
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
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-4 border-b border-gray-200">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setProgress(0); // Reinicia la barra de progreso
                }}
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

          {/* Barra de progreso */}
          <div className="relative h-1 bg-gray-200 rounded-full -mt-1 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-1 bg-pink-600 rounded-full transition-all duration-[50ms]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Tab Content */}
          <div className="mt-8 flex flex-col md:flex-row items-center max-w-[900px] mx-auto space-y-8 md:space-y-0 md:space-x-8">
            {/* Left Section: Text */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">
                {tabs[activeTab].name}
              </h3>
              <p
                className="mt-4 text-gray-600"
                dangerouslySetInnerHTML={{ __html: tabs[activeTab].content }}
              ></p>
            </div>

            {/* Right Section: Image */}
            <div className="flex-1">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].name}
                className="w-[300px] rounded-2xl shadow-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
