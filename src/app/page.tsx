import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="bg-gray-50 min-h-screen">
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Pronto</h1>
          <p className="mt-4 text-gray-600">Rethinking banking as a service </p>
        </section>
      </main>
    </>
  );
}
