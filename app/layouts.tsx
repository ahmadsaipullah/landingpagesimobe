import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { Navbar } from './components/Navbar/navbar';
import { Footer } from './components/Footer/footer';

export default function LandingLayout() {
  useEffect(() => {
    // Load AOS script dynamically
    const loadAOS = async () => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
      script.async = true;
      script.onload = () => {
        if ((window as any).AOS) {
          (window as any).AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
          });
        }
      };
      document.body.appendChild(script);
    };

    loadAOS();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
