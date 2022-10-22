import React from "react";

import {whatsappLink} from "lib/url";
import {useTranslations} from "next-intl";

function ContactUsSection() {
  const t = useTranslations("home-page");

  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contact-us-section-title')}</h2>
          <p className="text-xl text-gray-700 mb-8">{t('contact-us-section-description')}</p>
          <a target="_blank" href={whatsappLink}
             className="btn btn--lg btn--secondary">{t('contact-us-section-cta')}</a>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
