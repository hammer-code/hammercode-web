import AboutUsSection from 'src/components/home/AboutUsSection';
import ContactUsSection from 'src/components/home/ContactUsSection';
import HeroSection from 'src/components/home/HeroSection';
import MentorsSection from 'src/components/home/MentorsSection';
import ProgramsSection from 'src/components/home/ProgramsSection';
import TestimonySection from 'src/components/home/TestimonySection';
import MainLayout from 'src/components/layout/MainLayout';
import Head from 'next/head';

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
