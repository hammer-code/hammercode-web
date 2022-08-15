import MainLayout from "@core/layout/MainLayout";

export default function SupportUsPage() {
  return (
    <MainLayout>
      <p>Sponsorship</p>

      <section>
        <p>Bank Syariah Indonesia</p>
        <p>720 3000 768</p>
        <p>Penggiat Teknologi Palu Berkarya</p>
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
      messages: (await import(`../locales/${locale}.json`)).default
    }
  };
}
