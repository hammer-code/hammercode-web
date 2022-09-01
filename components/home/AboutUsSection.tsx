import React from "react";

function AboutUsSection() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 px-4"></div>
            <div className="flex-1 px-4">
              <p className="text-hc-green text-lg mb-5 font-bold">Siapa Kami</p>
              <h2 className="text-4xl font-bold mb-4">
                Komunitas Untuk Memajukan Daerah
              </h2>
              <p className="text-xl text-gray-700">
                Hammercode adalah sebuah komunitas teknologi yang diinisiasi
                sebagai wadah berkumpulnya para pembelajar, programmer,
                web/mobile developer, dan pelaku industri teknologi lainnya yang
                berada di kota Palu dan sekitarnya. Kegiatan-kegiatan yang Kami
                selenggarakan berorientasi pada <i>knowledge-transfer</i> yang
                diharapkan dapat mempercepat pemerataan keterampilan di bidang
                teknologi informasi serta mencetak talenta teknologi yang siap
                kerja. Hammercode tempat yang cocok untukmu yang ingin belajar
                tentang <i>coding</i>/pemograman dan <i>software engineering</i>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
