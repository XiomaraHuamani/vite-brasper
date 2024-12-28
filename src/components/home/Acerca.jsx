import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const Acerca = () => {
  const { t } = useTranslation();
  const elementsRef = useIntersectionObserver();

  return (
    <section className="about">
      <div className="about__container">
        <div className="about__row">
          <div
            ref={(el) => elementsRef.current.push(el)}
            className="about__content-wrapper fade-in"
          >
            <div className="about__content">
              <div className="about__title">
                <span className="about__subtitle">
                  {t("aboutSection.subTitle")}
                </span>
                <h2>{t("aboutSection.title")}</h2>
              </div>
              <p className="about__description">
                {t("aboutSection.description")}
              </p>
              <div className="about__buttons">
                <Link to="/about">
                  <span className="about__button">
                    {t("aboutSection.viewMoreButton")}{" "}
                    <i className="fas fa-long-arrow-right" />
                  </span>
                </Link>
                <div className="about__hotline">
                  <i className="fas fa-phone" />
                  <div className="about__hotline-content">
                    <span>{t("aboutSection.contactUs")}</span>
                    <br />
                    <a href="callto:+51966991933">+51 966991933</a>
                  </div>
                </div>
              </div>
              <div className="about__services">
                <div className="about__service">
                  <div className="about__service-icon">
                    <img
                      src="/assets/images/acerca/icon-about1.png"
                      alt="Icon"
                    />
                  </div>
                  <h4>
                    <Link to="#">{t("aboutSection.bestChoice.title")}</Link>
                  </h4>
                  <p>{t("aboutSection.bestChoice.description")}</p>
                </div>
                <div className="about__service">
                  <div className="about__service-icon">
                    <img
                      src="/assets/images/acerca/icon-about2.png"
                      alt="Icon"
                    />
                  </div>
                  <h4>
                    <Link to="#">
                      {t("aboutSection.smartInvestments.title")}
                    </Link>
                  </h4>
                  <p>{t("aboutSection.smartInvestments.description")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about__images-wrapper">
            <div className="about__images">
              <div className="about__image-top">
                <img
                  ref={(el) => elementsRef.current.push(el)}
                  className="about__image fade-in"
                  src="/assets/images/acerca/img1.png"
                  alt="About"
                />
                <img
                  ref={(el) => elementsRef.current.push(el)}
                  className="about__image fade-in"
                  src="/assets/images/acerca/ISOTIPO.png"
                  alt="About"
                />
              </div>
              <div className="about__image-bottom">
                <img
                  ref={(el) => elementsRef.current.push(el)}
                  className="about__image fade-in w-25"
                  src="/assets/images/acerca/about-dots.png"
                  alt="About"
                />
                <img
                  ref={(el) => elementsRef.current.push(el)}
                  className="about__image fade-in"
                  src="/assets/images/acerca/img2.png"
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acerca;
