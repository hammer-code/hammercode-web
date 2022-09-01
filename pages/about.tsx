import MainLayout from "components/Layout/MainLayout";

export default function CurriculumPage() {
  return (
    <MainLayout>
      <section className="py-8 container mx-auto">
        <h1>Tentang Kami</h1>
      </section>

      <section className="py-8 container mx-auto">
        <h2>Background</h2>
        <p>
          Kebutuhan akan talenta teknologi berkualitas terus bertambah. Namun
          sayangnya gap skills yang dimiliki oleh lulusan IT dari universitas
          dan kebutuhan industri masih cukup besar
        </p>
        <p>
          Di pulau Jawa dan Sumatera, banyak universitas universitas top-level
          serta ekosistem komunitas dan industri yang lebih maju di banding
          daerah lain, khususnya Palu, Sulawesi Tengah.
        </p>
        <p></p>
      </section>

      <section className="py-8 container mx-auto">
        <h2>Our program areas</h2>
        <p>Web Development</p>
        <p>Mobile App Development</p>
        <p>Data Analysis</p>
      </section>

      <section className="py-8 container mx-auto">
        <h2>History</h2>
        <p>
          Hammercode di inisiasi tahun 2017 oleh beberapa orang yang telah
          bekerja di Industri teknologi
        </p>
      </section>

      <section className="py-8 container mx-auto">
        <h2>Impact</h2>
        <p>
          Hammercode telah menjangkau xxx orang talenta lokal. Namun sayangnya
          masih sedikit yang berhasil tembus di dunia kerja
        </p>
        <p>Member kami telah bekerja untuk beberapa perusahaan ini:</p>
        <p>
          Samsung, Warpin, e-Fishery, Tictag, Shipper, Ralali, Bareksa, Software
          Seni
        </p>
      </section>

      <section className="py-8 container mx-auto">
        <h2>Our Vision</h2>
      </section>

      <section className="py-8 container mx-auto">
        <h2>Terima Kasih kepada Partner Kami</h2>
        <p>It could be you!</p>
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
    },
  };
}
