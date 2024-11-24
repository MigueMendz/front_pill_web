import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import caru from '../../assets/caru.jpg';
import rd from '../../assets/rd.jpg'
import med from '../../assets/med.jpg'

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center flex-grow px-8 text-center bg-[#FDFDFD] mt-12">
      <h2 className="text-4xl font-semibold text-[#00747C] mb-4">
        BIENVENIDO A PILLCARE
      </h2>
      <p className="text-lg text-[#202022] max-w-2xl mb-8">
        La plataforma diseñada para mejorar la salud y el bienestar de las
        personas mayores, garantizando que nunca olviden su medicación.
      </p>

      <div className="w-full max-w-3xl mb-8">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img
              src={med}
              alt="Imagen 1"
              className="rounded-xl"
            />
          </div>
          <div>
            <img
              src={rd}
              alt="Imagen 2"
              className="rounded-lg"
            />
          </div>
          <div>
            <img
              src={caru}
              alt="Imagen 3"
              className="rounded-lg"
            />
          </div>
        </Carousel>
      </div>
      <Link
        to="/signup"
        className="px-6 py-3 bg-[#00747C] text-white text-lg rounded hover:bg-[#00BBC9] transition duration-300 no-underline"
      >
        ¡Comienza ahora!
      </Link>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00747C] to-transparent mt-16"></div>
    </section>
  );
}

export default HeroSection;
