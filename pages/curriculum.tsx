import MainLayout from "@core/layout/MainLayout";

export default function CurriculumPage() {
  return (
    <MainLayout>
      <p>Kurikulum</p>
      <p>Web Programming</p>
      <p>Frontend Web Developer</p>
      <p>Backend Web Developer</p>
      <p>Android Developer</p>
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
