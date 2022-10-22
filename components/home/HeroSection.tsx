import React from "react";
import {useTranslations} from "next-intl";

function HeroSection() {
  const t = useTranslations('home-page');

  return (
    <section className="bg-secondary">
      <div className="container mx-auto py-16">
        <div className="flex px-4">
          <div className="flex-1 py-16">
            <h1 className="text-white mb-4 font-bold text-4xl">{t('hero-section-title')}</h1>
            <p className="text-2xl mb-4 text-white">{t('hero-section-sub-title')}</p>
            <a className="btn btn--lg btn--black transition-all ease duration-300 hover:bg-white hover:text-black"
               target="_blank" href="https://discord.com/invite/M9mNK6MBbu">{t('hero-section-cta')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
