import AboutUsSection from "components/home/AboutUsSection";
import ContactUsSection from "components/home/ContactUsSection";
import HeroSection from "components/home/HeroSection";
import MentorsSection from "components/home/MentorsSection";
import ProgramsSection from "components/home/ProgramsSection";
import TestimonySection from "components/home/TestimonySection";
import MainLayout from "components/layout/MainLayout";
import Head from "next/head";

export default function Home() {
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../locales/${locale}.json`)).default
    }
  };
}
