import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSpecs from './components/ProductSpecs';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductSpecs />
      <CallToAction />
      <Footer />
    </>
  );
}
