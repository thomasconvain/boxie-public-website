const features = [
  {
    name: 'Conexión y análisis en tiempo real',
    description:
      'La herramienta conecta a los ejecutivos inmobiliarios con políticas comerciales de múltiples instituciones financieras, analizando grandes volúmenes de datos en segundos para ofrecer opciones actualizadas, personalizadas y alineadas con las necesidades del cliente.',
  },
  {
    name: 'Personalización y gestión de propuestas',
    description:
      'Permite ingresar parámetros específicos como tipo de propiedad, precio y financiamiento requerido. Basándose en esta información, identifica descuentos, incentivos y condiciones exclusivas, gestionando propuestas claras y adaptadas para cada cliente.',
  },
  {
    name: 'Interfaz intuitiva mediante WhatsApp',
    description:
      'Opera a través de un chat WhatsApp API, ofreciendo una experiencia fluida. Los ejecutivos pueden ingresar parámetros, recibir opciones en segundos y compartirlas directamente con los clientes, simplificando la comunicación.',
  },
  {
    name: 'Seguimiento y reportes organizados',
    description:
      'Consulta en tiempo real la disponibilidad de unidades de los proyectos inmobiliarios. Obtén detalles como precios de lista, descuentos aplicables y beneficios financieros, ajustados automáticamente según las políticas comerciales.',
  },
];

export default function Example() {
  return (
    <div
      className="relative bg-gradient-to-b from-pink-50 to-transparent"
      id="features"
    >
      <div
        style={{
          backgroundImage: "url('/nnnoise.svg')", // Cambia esto por la ruta de tu textura
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container -mt-4 relative z-10 mx-auto items-center gap-x-8 gap-y-16 px-4 py-24">
          <div>
            <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl text-center">
              <span className="font-semibold">
                Soluciones rápidas y precisas
              </span>
              <br />
              que se adaptan a las necesidades de cada cliente
            </h2>

            <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="bg-white text-gray-900 hover:bg-black hover:text-white transition p-6 rounded-xl cursor-pointer border border-gray-300"
                >
                  <dt className="font-semibold">{feature.name}</dt>
                  <dd className="mt-2 text-sm font-serif">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
