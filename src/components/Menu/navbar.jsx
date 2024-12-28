import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../Logos/logoNavbar";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Checa si la posición del scroll es mayor a 50px
      setIsScrolled(window.scrollY > 50);
    };

    // Añadir y limpiar el evento scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar ${
        isScrolled ? "navbar--scrolled" : "navbar--transparent"
      }`}
    >
      <div className="navbar__logo">
        <Logo />
      </div>
      <div
        className={`navbar__hamburger ${
          menuActive ? "navbar__hamburger--active" : ""
        }`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul
        className={`navbar__menu ${menuActive ? "navbar__menu--active" : ""}`}
      >
        <li className="navbar__item">
          <Link to="/">{t("Inicio")}</Link>
        </li>
        <li className="navbar__item">
          <Link to="/about">{t("Nosotros")}</Link>
        </li>
        <li className="navbar__item">
          <Link to="/reales">{t("Reales")}</Link>
        </li>
        <li className="navbar__item">
          <Link to="/dolares">{t("Dólares")}</Link>
        </li>
        <li className="navbar__item">
          <Link to="/blog">{t("Blog")}</Link>
        </li>
      </ul>
      <select
        className="navbar__language-selector"
        onChange={handleLanguageChange}
        value={i18n.language}
      >
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
};

export default Navbar;
