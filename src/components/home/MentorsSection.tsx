import React from "react";
import {useTranslations} from "next-intl";

function MentorsSection() {
  const t = useTranslations('home-page');

  return (
    <section className="bg-secondary">
      <div className="container mx-auto">
        <div className="py-32 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">{t('mentor-section-title')}</h2>
          <p className="text-white text-xl mb-8">{t('mentor-section-sub-title')}</p>
          <div className="flex flex-col md:flex-row justify-center mt-6">
            <div className="logo-wrapper inline-block mb-2">
              <img src="/shipper.svg" className="inline-block"/>
            </div>
            <div className="logo-wrapper inline-block mb-2">
              <img src="/tkp.svg" className="inline-block"/>
            </div>
            <div className="logo-wrapper inline-block mb-2">
              <img src="/eshos.png" className="inline-block"/>
            </div>
            <div className="logo-wrapper inline-block mb-2">
              <img src="/warpin.png" className="inline-block"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentorsSection;
