import React from "react";

import { whatsappLink } from "lib/url";

function ContactUsSection() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Punya pertanyaan atau ingin sekedar ngobrol?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Kami dengan senang hati terhubung dengan Anda. Cukup klik tombol di
            bawah ;)
          </p>
          <a
            target="_blank"
            href={whatsappLink}
            className="btn btn--lg btn--secondary"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
