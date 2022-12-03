import React from "react";
import {useTranslations} from "next-intl";

function AboutUsSection() {
  const t = useTranslations('home-page');
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 px-4"></div>
            <div className="flex-1 px-4">
              <p className="text-hc-green text-lg mb-5 font-bold">{t('about-us-section-title')}</p>
              <h2 className="text-4xl font-bold mb-4">
                {t('about-us-section-sub-title')}
              </h2>
              <p className="text-xl text-gray-700">
                {t('about-us-section-description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
