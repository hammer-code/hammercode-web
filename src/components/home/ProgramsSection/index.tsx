import React from 'react';

import style from './ProgramsSection.module.css';

import { useTranslations } from 'next-intl';
import { whatsappLink } from 'src/lib/url';

function ProgramsSection() {
  const t = useTranslations('home-page');
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
          <div className="px-6">
            <p className="text-hc-green text-lg mb-5 font-bold">
              {t('program-section-title')}
            </p>
            <h2 className="text-3xl font-bold mb-8">
              {t('program-section-sub-title')}
            </h2>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className={style['program-card-wrapper']}>
              <div className={style['program-card']}>
                <h3 className="font-bold text-2xl mb-4">
                  {t('program-section-1-title')}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t('program-section-1-description')}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="btn btn--lg btn--secondary"
                >
                  {t('program-section-cta')}
                </a>
              </div>
            </div>
            <div className={style['program-card-wrapper']}>
              <div className={style['program-card']}>
                <h3 className="font-bold text-2xl mb-4">
                  {t('program-section-2-title')}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t('program-section-2-description')}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="btn btn--lg btn--secondary"
                >
                  {t('program-section-cta')}
                </a>
              </div>
            </div>
            <div className={style['program-card-wrapper']}>
              <div className={style['program-card']}>
                <h3 className="font-bold text-2xl mb-4">
                  {t('program-section-3-title')}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t('program-section-3-description')}
                </p>
                <a
                  href="https://instagram.com/hmrcode"
                  target="_blank"
                  className="btn btn--lg btn--secondary"
                >
                  {t('program-section-cta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
