import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) 
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    debug: false, 
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: `/locales/{{lng}}/translation.json`,
    },
    
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"], 
      caches: ["localStorage", "cookie"], 
    },
  });

export default i18n;
