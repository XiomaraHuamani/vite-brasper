
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const HeaderHome = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="header-home">
      <div className="header-home__wrapper">
        <div
          className={`header-home__content ${
            isVisible ? "header-home__content--visible" : ""
          }`}
        >
          <h1
            className="header-home__title"
            dangerouslySetInnerHTML={{
              __html: t("header.title"),
            }}
          ></h1>
          <p className="header-home__highlight">{t("header.subtitle")}</p>
          <button className="button-baground-blue mt-1">{t("header.button")}</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
