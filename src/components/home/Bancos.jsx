import React, { useState, useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import databancos from "@/data/databancos";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};

const Bancos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // Delay para la animación
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className={`partners-area ${isVisible ? "partners-area--visible" : ""}`}
    >
      <div className="partners-area__content">
        <div className="partners-area__title">
          <span className="partners-area__subtitle">Bancos</span>
          <h2 className="partners-area__heading">Medios de transferencia</h2>
        </div>

        <Swiper {...swiperOptions} className="partners-area__swiper">
          {databancos.map((banco, index) => (
            <SwiperSlide key={index}>
              <a
                href={banco.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="partners-area__link"
              >
                <img
                  className="partners-area__image"
                  src={banco.img1}
                  alt={banco.nombre}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Bancos;
