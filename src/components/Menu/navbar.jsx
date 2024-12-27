import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importa useTranslation
import Logo from "../Logos/logoNavbar";

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Obtén funciones de traducción
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value; // Obtiene el idioma seleccionado
    i18n.changeLanguage(selectedLanguage); // Cambia el idioma en i18next
  };

  return (
    <div className="navbar navbar--dark">
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
        <li className="navbar__item navbar__item--active">
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
        value={i18n.language} // Mantiene el idioma seleccionado
      >
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
};

export default Navbar;
