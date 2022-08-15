import MainLayout from "@core/layout/MainLayout";

export default function CurriculumPage() {
  return (
    <MainLayout>
      <h1>About</h1>

      <section>
        <h2>History</h2>
      </section>

      <section>
        <h2>Impact</h2>
      </section>

      <section>
        <h2>Pengurus</h2>
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

