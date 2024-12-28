import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
const Services = () => {
  const { t } = useTranslation();

  const elementsRef = useIntersectionObserver();
  return (
    <section className="services ">
      <div
        className="services__container fade-in"
        ref={(el) => elementsRef.current.push(el)}
      >
        <div className="services__intro">
          <h2 className="services__title">{t("servicesSection.subtitle")}</h2>
        </div>
        <div className="services__row">
          <div className="services__item">
            <div className="services__icon">
              <img
                src="assets/images/acerca/transferencias.png"
                alt="transferencias"
              />
            </div>
            <div className="services__content">
              <h4>
                <Link to="/service-details">
                  {t("servicesSection.service1Title")}
                </Link>
              </h4>
              <p>{t("servicesSection.service1Description")}</p>
            </div>
          </div>

          <div className="services__item">
            <div className="services__icon">
              <img
                src="assets/images/acerca/cotizaciones.png"
                alt="cotizaciones"
              />
            </div>
            <div className="services__content">
              <h4>
                <Link to="/service-details">
                  {t("servicesSection.service2Title")}
                </Link>
              </h4>
              <p>{t("servicesSection.service2Description")}</p>
            </div>
          </div>

          <div className="services__item">
            <div className="services__icon">
              <img src="assets/images/acerca/envios.png" alt="envios" />
            </div>
            <div className="services__content">
              <h4>
                <Link to="/service-details">
                  {t("servicesSection.service3Title")}
                </Link>
              </h4>
              <p>{t("servicesSection.service3Description")}</p>
            </div>
          </div>

          <div className="services__item">
            <div className="services__icon">
              <img src="assets/images/acerca/servicios.png" alt="servicios" />
            </div>
            <div className="services__content">
              <h4>
                <Link to="/service-details">
                  {t("servicesSection.service4Title")}
                </Link>
              </h4>
              <p>{t("servicesSection.service4Description")}</p>
            </div>
          </div>

          <div className="services__item">
            <div className="services__icon">
              <img src="assets/images/acerca/economia.png" alt="economia" />
            </div>
            <div className="services__content">
              <h4>
                <Link to="/service-details">
                  {t("servicesSection.service5Title")}
                </Link>
              </h4>
              <p>{t("servicesSection.service5Description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
