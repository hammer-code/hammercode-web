import Head from 'next/head';

import style from './index.module.css';
import { whatsappLink } from '@core/lib/url';
import MainLayout from '@core/layout/MainLayout';

interface Testimony {
  text: string,
  name: string,
  school: string,
  title?: string
}

function HeroSection () {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto py-8">
        <div className="flex">
          <div className="flex-1 py-16">
            <h1 className="text-white mb-4 font-bold text-4xl">Mencetak Talenta Teknologi Lokal, Berdaya Saing Global</h1>
            <p className="text-2xl mb-4 text-white">Mulai karirmu di bidang teknologi sebagai programmer, web atau mobile developer</p>
            <a className="btn btn--lg btn--black transition-all ease duration-300 hover:bg-white hover:text-black" target="_blank" href="https://discord.com/invite/M9mNK6MBbu">Gabung Komunitas</a>
          </div>
          <div className="flex-1" />
        </div>
      </div>
    </section>
  );
}

function AboutUsSection () {
  return  (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
          <div className="flex">
            <div className="flex-1">

            </div>
            <div className="flex-1">
              <p className="text-hc-green text-lg mb-5 font-bold">Siapa Kami</p>
              <h2 className="text-4xl font-bold mb-4">Komunitas Untuk Memajukan Daerah</h2>
              <p className="text-xl text-gray-700">Hammercode adalah sebuah komunitas teknologi yang diinisiasi sebagai wadah berkumpulnya para pembelajar, programmer, web/mobile developer, dan pelaku industri teknologi lainnya yang berada di kota Palu dan sekitarnya. Kegiatan-kegiatan yang Kami selenggarakan berorientasi pada <i>knowledge-transfer</i> yang diharapkan dapat mempercepat pemerataan keterampilan di bidang teknologi informasi serta mencetak talenta teknologi yang siap kerja. Hammercode tempat yang cocok untukmu yang ingin belajar tentang <i>coding</i>/pemograman dan <i>software engineering</i>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection () {
  return  (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
        <p className="text-hc-green text-lg mb-5 font-bold">Program</p>
          <h2 className="text-3xl font-bold mb-8">Kegiatan Bermanfaat dan Gratis*</h2>
          <div className="flex">
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


function MentorsSection () {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto">
        <div className="py-12 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Belajar Dari Ekspert Teknologi</h2>
          <p className="text-white text-xl">Ambil kesempatan untuk belajar dari ekspert dari perusahaan teknologi</p>
          <div className="flex justify-center mt-6">
            <div className="logo-wrapper">
              <img src="/shipper.svg" />
            </div>
            <div className="logo-wrapper">
              <img src="/tkp.svg" />
            </div>
            <div className="logo-wrapper">
              <img src="/eshos.png" />
            </div>
            <div className="logo-wrapper">
              <img src="/warpin.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type TestimonyCard = Testimony;

function TestimonyCard ({
  text,
  name,
  school = '',
  title = '',
}: TestimonyCard) {
  return (
    <div className="text-gray-700">
      <p className="mb-4 text-lg font-bold"><span>&rdquo;</span>{text}</p>
      <p className="mb-2">{name}</p>
      {school && <p className="">{school}</p>}
      {title && <p>{title}</p>}
    </div>
  );
}

function TestimonySection () {
  const testimonies: Testimony[] = [
    { name: 'Agi', school: 'Universitas Tadulako \'17', text: 'hammercode komunitas nya friendly banget, baik mentor, dan peserta pelajarnya. Kelas  di hammercode jg itu sangat seru, metode mengajar para mentornya sangat membntu, dijamin paham 1000%' },
    { name: 'Zulnabil', school: 'Universitas Tadulako \'16', title: 'Frontend Engineer @ 99.co', text: 'As a software engineer or who wants to, prepare yourself to face the real IT industry. Since studying from college is not enough, you have to find your mentor. In hammercode you can find it, and expand your network. Because your network is your net worth' },
    { name: 'Akwan', school: 'Universitas Tadulako \'19', title: 'Backend Engineer Intern @ Bareksa', text: 'Dengan bantuan dan dorongan teman-teman dan mentor yg ada di komunitas, saya berhasil mendapatkan kesempatan magang di tahun pertama dan kedua kuliah' },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
          <p className="text-hc-green text-lg mb-5 font-bold">Our Impact</p>
          <h2 className="text-3xl font-bold mb-6">Beberapa Teman Yang Merasakan Manfaat</h2>
          <div className="flex">
            <div className="flex-1 mr-2 text-gray-700">
              <TestimonyCard {...testimonies[0]} />
            </div>
            <div className="flex-1 mx-2">
              <TestimonyCard {...testimonies[1]} />
            </div>
            <div className="flex-1 ml-2">
              <TestimonyCard {...testimonies[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactUsSection () {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Punya pertanyaan atau ingin sekedar ngobrol?</h2>
          <p className="text-xl text-gray-700 mb-8">Kami dengan senang hati terhubung dengan Anda. Cukup klik tombol di bawah ;)</p>
          <a target="_blank" href={whatsappLink} className="btn btn--lg btn--secondary">Hubungi Kami</a>
        </div>
      </div>
    </section>
  );
}

export default function Home () {
  return (
    <MainLayout>
      <Head>
        <title>Hammercode - Komunitas programmer, web/mobile software developer, praktisi IT kota Palu</title>
      </Head>
      <main>
        <HeroSection />
        <AboutUsSection />
        <ProgramsSection />
        <MentorsSection />
        <TestimonySection />
        <ContactUsSection />
      </main>
    </MainLayout>
  );
}
