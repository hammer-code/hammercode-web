import React from "react";

import style from "./ProgramsSection.module.css";

import { whatsappLink } from "lib/url";

function ProgramsSection() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
          <div className="px-6">
            <p className="text-hc-green text-lg mb-5 font-bold">Program</p>
            <h2 className="text-3xl font-bold mb-8">Kegiatan Bermanfaat dan Gratis*</h2>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className={style['program-card-wrapper']}>
              <div className={style['program-card']}>
                <h3 className="font-bold text-2xl mb-4">Mentoring</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Teman-teman anggota komunitas dari berbagai perusahaan teknologi siap membantu Kamu untuk persiapan aplikasi <i>internship</i> dan <i>full-time job</i>
                </p>
                <a href={whatsappLink} target="_blank" className="btn btn--lg btn--secondary">Lebih Lanjut</a>
              </div>
            </div>
            <div className={style['program-card-wrapper']}>
              <div className={style['program-card']}>
                <h3 className="font-bold text-2xl mb-4">Kelas &amp; Workshop</h3>
                <p className="text-lg text-gray-700 mb-4">Tersedia kelas dan workshop untuk berbagai bidang, seperti <strong>web</strong>, <strong>mobile apps</strong> hingga <strong>data</strong>. Tingakat materi yang disampaikan bervariasi, mulai dari <i>beginner</i> hingga <i>advanced</i>.</p>
                <a href={whatsappLink} target="_blank" className="btn btn--lg btn--secondary">Lebih Lanjut</a>
              </div>
            </div>
            <div className={style['program-card-wrapper']}>
              <div className={style['program-card']}>
                <h3 className="font-bold text-2xl mb-4">Tech Talk</h3>
                <p className="text-lg text-gray-700 mb-4">Acara <i>knowledge-sharing</i> bulanan yang diisi oleh pemateri dari pelaku industri dan teman-teman komunitas.</p>
                <a href="https://instagram.com/hmrcode" target="_blank" className="btn btn--lg btn--secondary">Lihat Acara</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
