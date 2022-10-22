import Head from 'next/head';

import style from './index.module.css';
import { whatsappLink } from '@core/lib/url';
import MainLayout from '@core/layout/MainLayout';
import { useTranslations } from 'next-intl';

interface Testimony {
  text: string;
  name: string;
  school: string;
  title?: string;
}

function HeroSection() {
  const t = useTranslations('home');

  return (
    <section className="bg-secondary">
      <div className="container mx-auto py-16">
        <div className="flex px-4">
          <div className="flex-1 py-16">
            <h1 className="text-white mb-4 font-bold text-4xl">
              {t('hero-title')}
            </h1>
            <p className="text-2xl mb-4 text-white">{t('hero-sub-title')}</p>
            <a
              className="btn btn--lg btn--black transition-all ease duration-300 hover:bg-white hover:text-black"
              target="_blank"
              href="https://discord.com/invite/M9mNK6MBbu"
            >
              {t('hero-cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutUsSection() {
  const t = useTranslations('home');
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 px-4"></div>
            <div className="flex-1 px-4">
              <p className="text-hc-green text-lg mb-5 font-bold">
                {t('about-us-session-title')}
              </p>
              <h2 className="text-4xl font-bold mb-4">
                {t('about-us-session-sub-title')}
              </h2>
              <p className="text-xl text-gray-700">
                {t('about-us-session-description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const t = useTranslations('home');
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
          <div className="px-6">
            <p className="text-hc-green text-lg mb-5 font-bold">
              {t('program-session-title')}
            </p>
            <h2 className="text-3xl font-bold mb-8">
              {t('program-session-sub-title')}
            </h2>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className={style['program-card-wrapper']}>
              <div className={style['program-card']}>
                <h3 className="font-bold text-2xl mb-4">
                  {t('program-session-1')}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t('program-description-1')}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="btn btn--lg btn--secondary"
                >
                  {t('program-cta')}
                </a>
              </div>
            </div>
            <div className={style['program-card-wrapper']}>
              <div className={style['program-card']}>
                <h3 className="font-bold text-2xl mb-4">
                  {t('program-session-2')}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t('program-description-2')}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="btn btn--lg btn--secondary"
                >
                  {t('program-cta')}
                </a>
              </div>
            </div>
            <div className={style['program-card-wrapper']}>
              <div className={style['program-card']}>
                <h3 className="font-bold text-2xl mb-4">
                  {t('program-session-3')}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t('program-description-3')}
                </p>
                <a
                  href="https://instagram.com/hmrcode"
                  target="_blank"
                  className="btn btn--lg btn--secondary"
                >
                  {t('program-cta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MentorsSection() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto">
        <div className="py-32 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">
            Belajar Dari Ekspert Teknologi
          </h2>
          <p className="text-white text-xl mb-8">
            Ambil kesempatan untuk belajar dari ekspert dari perusahaan
            teknologi
          </p>
          <div className="flex flex-col md:flex-row justify-center mt-6">
            <div className="logo-wrapper inline-block mb-2">
              <img src="/shipper.svg" className="inline-block" />
            </div>
            <div className="logo-wrapper inline-block mb-2">
              <img src="/tkp.svg" className="inline-block" />
            </div>
            <div className="logo-wrapper inline-block mb-2">
              <img src="/eshos.png" className="inline-block" />
            </div>
            <div className="logo-wrapper inline-block mb-2">
              <img src="/warpin.png" className="inline-block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type TestimonyCard = Testimony;

function TestimonyCard({ text, name, school = '', title = '' }: TestimonyCard) {
  return (
    <div className="text-gray-700">
      <p className="mb-4 text-lg font-bold">
        <span>&rdquo;</span>
        {text}
      </p>
      <p className="mb-2">{name}</p>
      {school && <p className="">{school}</p>}
      {title && <p>{title}</p>}
    </div>
  );
}

function TestimonySection() {
  const testimonies: Testimony[] = [
    {
      name: 'Agi',
      school: "Universitas Tadulako '17",
      text: 'hammercode komunitas nya friendly banget, baik mentor, dan peserta pelajarnya. Kelas  di hammercode jg itu sangat seru, metode mengajar para mentornya sangat membntu, dijamin paham 1000%',
    },
    {
      name: 'Zulnabil',
      school: "Universitas Tadulako '16",
      title: 'Frontend Engineer @ 99.co',
      text: 'As a software engineer or who wants to, prepare yourself to face the real IT industry. Since studying from college is not enough, you have to find your mentor. In hammercode you can find it, and expand your network. Because your network is your net worth',
    },
    {
      name: 'Akwan',
      school: "Universitas Tadulako '19",
      title: 'Backend Engineer Intern @ Bareksa',
      text: 'Dengan bantuan dan dorongan teman-teman dan mentor yg ada di komunitas, saya berhasil mendapatkan kesempatan magang di tahun pertama dan kedua kuliah',
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
          <div className="px-4 mb-12">
            <p className="text-hc-green text-lg mb-5 font-bold">Our Impact</p>
            <h2 className="text-3xl font-bold mb-6">
              Beberapa Teman Yang Merasakan Manfaat
            </h2>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex-1 mb-4 px-4">
              <TestimonyCard {...testimonies[0]} />
            </div>
            <div className="flex-1 mb-4 px-4">
              <TestimonyCard {...testimonies[1]} />
            </div>
            <div className="flex-1 px-4">
              <TestimonyCard {...testimonies[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>
          Hammercode - Komunitas programmer, web/mobile software developer,
          praktisi IT kota Palu
        </title>
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  };
}
