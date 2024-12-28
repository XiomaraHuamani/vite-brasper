import React from "react";
import { useTranslation } from "react-i18next";

const WorkProcess = () => {
  const { t } = useTranslation();

  return (
    <section className="work-process">
      <div className="work-process__header">
        <span className="work-process__subtitle">
          {t("workProcessSection.subtitle")}
        </span>
        <h2 className="work-process__title">{t("workProcessSection.title")}</h2>
      </div>
      <div className="work-process__line">
        <img src="/assets/images/WorkProcess/work-process-line.png" alt="line" />
      </div>
      <div className="work-process__container">
        <div className="work-process__row">
          <div className="work-process__item">
            <div className="work-process__number">01</div>
            <div className="work-process__content">
              <h4>{t("workProcessSection.step1Title")}</h4>
              <p>{t("workProcessSection.step1Description")}</p>
            </div>
          </div>
          <div className="work-process__item">
            <div className="work-process__number">02</div>
            <div className="work-process__content">
              <h4>{t("workProcessSection.step2Title")}</h4>
              <p>{t("workProcessSection.step2Description")}</p>
            </div>
          </div>
          <div className="work-process__item">
            <div className="work-process__number">03</div>
            <div className="work-process__content">
              <h4>{t("workProcessSection.step3Title")}</h4>
              <p>{t("workProcessSection.step3Description")}</p>
            </div>
          </div>
          <div className="work-process__item">
            <div className="work-process__number">04</div>
            <div className="work-process__content">
              <h4>{t("workProcessSection.step4Title")}</h4>
              <p>{t("workProcessSection.step4Description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
