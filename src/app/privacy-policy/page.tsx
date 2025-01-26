import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function PoliticasDePrivacidad() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 text-black font-serif">
        <div className="text-2xl font-bold pb-16">
          <a href="/">
            <Image src="/boxie-logo.png" alt="Boxie" width={130} height={50} />
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-8 font-sans">
          Políticas de Privacidad
        </h1>

        <p className="mb-4">
          Bienvenido a Boxie. Nos comprometemos a proteger tu privacidad y
          garantizar que tu información personal esté segura. Este documento
          detalla cómo recopilamos, usamos y protegemos tu información.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          1. Información que recopilamos
        </h2>
        <p className="mb-4">
          Recopilamos la siguiente información personal cuando interactúas con
          nuestro sitio web o servicios:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>
            Información de contacto, como nombre, dirección de correo
            electrónico y número de teléfono.
          </li>
          <li>
            Datos de navegación, como dirección IP, tipo de navegador y páginas
            visitadas.
          </li>
          <li>
            Información proporcionada voluntariamente, como datos enviados a
            través de formularios.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          2. Cómo usamos tu información
        </h2>
        <p className="mb-4">Utilizamos la información recopilada para:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Proveer, operar y mantener nuestros servicios.</li>
          <li>
            Mejorar la experiencia del usuario y personalizar el contenido.
          </li>
          <li>
            Enviar comunicaciones relacionadas con el servicio, como
            actualizaciones o promociones.
          </li>
          <li>Cumplir con requisitos legales o reglamentarios.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          3. Compartir tu información
        </h2>
        <p className="mb-4">
          No compartimos tu información personal con terceros, excepto en las
          siguientes circunstancias:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>
            Cuando es necesario para cumplir con la ley o responder a
            solicitudes legales.
          </li>
          <li>
            Con proveedores de servicios que nos ayudan a operar nuestro
            negocio, bajo estrictos acuerdos de confidencialidad.
          </li>
          <li>
            En caso de fusión, adquisición o venta de activos, donde tu
            información puede ser transferida como parte del negocio.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          4. Seguridad de la información
        </h2>
        <p className="mb-4">
          Adoptamos medidas razonables para proteger tu información personal
          contra acceso no autorizado, alteración, divulgación o destrucción.
          Sin embargo, no podemos garantizar una seguridad absoluta, ya que
          ningún método de transmisión o almacenamiento de datos es
          completamente seguro.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          5. Cookies y tecnologías similares
        </h2>
        <p className="mb-4">
          Utilizamos cookies y tecnologías similares para mejorar tu experiencia
          en nuestro sitio web. Puedes configurar tu navegador para rechazar las
          cookies, pero esto puede limitar algunas funcionalidades de nuestro
          sitio.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Tus derechos</h2>
        <p className="mb-4">Tienes derecho a:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Acceder a tu información personal y solicitar una copia.</li>
          <li>Corregir cualquier dato incorrecto o incompleto.</li>
          <li>
            Solicitar la eliminación de tu información personal, sujeto a
            requisitos legales.
          </li>
          <li>
            Retirar tu consentimiento para el procesamiento de datos personales.
          </li>
        </ul>
        <p className="mb-4">
          Para ejercer estos derechos, por favor contáctanos a través del correo
          electrónico: <strong>[email@boxie.ai]</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          7. Enlaces a terceros
        </h2>
        <p className="mb-4">
          Nuestro sitio web puede contener enlaces a otros sitios web que no
          controlamos. No somos responsables de las prácticas de privacidad de
          esos sitios y recomendamos revisar sus políticas antes de proporcionar
          cualquier información personal.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          8. Cambios en esta política
        </h2>
        <p className="mb-4">
          Podemos actualizar estas políticas de privacidad ocasionalmente para
          reflejar cambios en nuestras prácticas o requisitos legales. Te
          notificaremos sobre cualquier cambio publicando la versión actualizada
          en esta página.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">9. Contacto</h2>
        <p className="mb-4">
          Si tienes preguntas o inquietudes sobre nuestras políticas de
          privacidad, no dudes en contactarnos:
        </p>
        <address className="not-italic">
          <strong>Boxie</strong>
          <br />
          Las Urbinas 53, Of. 141, Providencia, Santiago, Chile
          <br />
          <strong>Correo electrónico:</strong>{' '}
          <a
            href="mailto:email@boxie.ai"
            className="text-blue-500 hover:underline"
          >
            email@boxie.ai
          </a>
        </address>
      </div>
      <Footer />
    </>
  );
}
