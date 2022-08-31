import Head from "next/head";

import MainLayout from "components/layout/MainLayout";
import HeroSection from "components/HeroSection";
import AboutUsSection from "components/AboutUsSection";
import ProgramsSection from "components/ProgramsSection";
import MentorsSection from "components/MentorsSection";
import TestimonySection from "components/TestimonySection";
import ContactUsSection from "components/ContactUsSection";

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
