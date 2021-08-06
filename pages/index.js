import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home () {
  return (
    <>
      <Head>
        <title>hammercode - Komunitas programmer, software developer, praktisi IT kota Palu</title>
      </Head>
      <Header />
      <main className="py-8">
        <section>
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">Apa itu hammercode?</h1>
            <p className="text-lg">Komunitas teknologi berbasis di Palu. Tempat berkumpul para pelaku tech startup, programmer, software engineer, web developer. Kami mengadakan kelas belajar pemograman, sesi sharing/meetup bulanan, workshop, dan event tahunan.</p>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
