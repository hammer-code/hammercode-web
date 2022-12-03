import MainLayout from 'src/components/layout/MainLayout';
import { useTranslations } from 'next-intl';

interface IAboutUs {
  areaOfPrograms: Array<String>;
  partners: Array<String>;
}

export default function AboutUs({ areaOfPrograms, partners }: IAboutUs) {
  const t = useTranslations('about-us-page');

  return (
    <MainLayout>
      <section className="py-8 container mx-auto">
        <h1>{t('title')}</h1>
      </section>

      <section className="py-8 container mx-auto">
        <h2>{t('background-section-title')}</h2>
        <p>{t('background-section-description')}</p>
        <p></p>
      </section>

      <section className="py-8 container mx-auto">
        <h2>{t('our-programs')}</h2>
        {areaOfPrograms.map((areaOfProgram) => (
          <p>{areaOfProgram}</p>
        ))}
      </section>

      <section className="py-8 container mx-auto">
        <h2>{t('history-section-title')}</h2>
        <p>{t('history-section-description')}</p>
      </section>

      <section className="py-8 container mx-auto">
        <h2>{t('impact-section-title')}</h2>
        <p>{t('impact-section-description')}</p>
        <p>{partners}</p>
      </section>

      <section className="py-8 container mx-auto">
        <h2>{t('our-vision')}</h2>
      </section>

      <section className="py-8 container mx-auto">
        <h2>{t('partner-section-title')}</h2>
        <p>{t('partner-section-description')}</p>
      </section>
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
      areaOfPrograms: [
        'Web Development',
        'Mobile App Development',
        'Data Analysis',
      ],
      partners:
        'Samsung, Warpin, e-Fishery, Tictag, Shipper, Ralali, Bareksa, Software Seni',
    },
  };
}
