import { Badge } from "@/components/ui/badge";
import ImagesList from "./components/ImagesList";
import OurFounder from "./components/OurFounder";
import OurProgram from "./components/OurProgram";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto px-5 py-28">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 space-y-4 text-justify">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-hmc-base-blue">About Hammercode</h1>
            <p className="text-sm text-gray-500">Since 2017 - Now</p>
          </div>
          <p>
            <span className="text-hmc-primary font-semibold underline">Hammercode</span> adalah sebuah komunitas
            teknologi yang diinisiasi sebagai wadah berkumpulnya para pembelajar, programmer, web/mobile developer, dan
            pelaku industri teknologi lainnya yang berada di kota Palu dan sekitarnya. Kegiatan-kegiatan yang Kami
            selenggarakan berorientasi pada knowledge-transfer yang diharapkan dapat mempercepat pemerataan keterampilan
            di bidang teknologi informasi serta mencetak talenta teknologi yang siap kerja. Hammercode tempat yang cocok
            untukmu yang ingin belajar tentang coding/pemograman dan software engineering.
          </p>
          <ImagesList />
          <p>
            Kebutuhan akan talenta teknologi berkualitas terus bertambah. Namun sayangnya gap skills yang dimiliki oleh
            lulusan IT dari universitas dan kebutuhan industri masih cukup besar. Di pulau Jawa dan Sumatera, banyak
            universitas universitas top-level serta ekosistem komunitas dan industri yang lebih maju di banding daerah
            lain, khususnya Palu, Sulawesi Tengah. Kami di Hammercode berkomitmen untuk menjembatani kesenjangan
            tersebut dengan menyediakan akses ke pendidikan dan pelatihan berkualitas. Kami percaya bahwa dengan
            memberikan dukungan dan sumber daya yang tepat, kami dapat membantu anggota kami untuk tidak hanya memenuhi
            kebutuhan industri, tetapi juga untuk menjadi inovator dan pemimpin di masa depan.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Image
              src="/assets/images/about/meet-1.png"
              alt="meet"
              width={500}
              height={100}
              className="md:w-2/3 w-full h-auto rounded-lg shadow-lg"
            />
            <p className="md:w-2/3 w-full">
              Kami juga memiliki beberapa program unggulan, antara lain Palu Developer Day, yang merupakan program
              tahunan teknologi terbesar di Kota Palu dan dihadiri oleh pemateri hebat. Selain itu, ada juga Tech Talk,
              yaitu sebuah acara bulanan yang dihadiri oleh narasumber dari komunitas yang membahas berbagai topik
              seputar bidang teknologi. Kami juga mengadakan Live Tech, yang merupakan event live di Instagram, di mana
              para ahli berbagi wawasan dan pengalaman mereka. Terakhir, kami melaksanakan program pembelajaran setiap
              minggu yang fokus pada pengembangan web.
            </p>
          </div>
          <p>
            Yuk, gabung dengan Hammercode dan jadi bagian dari perubahan positif di komunitas teknologi Palu!
            Bareng-bareng, kita bisa menciptakan masa depan yang lebih cerah lewat keterampilan dan inovasi. Di sini,
            kamu bakal dapetin dukungan penuh, program pengembangan, dan komunitas yang asik buat ngebantu kamu tumbuh
            jadi orang yang siap bersaing di dunia teknologi. Hammercode adalah tempat yang pas buat kamu yang pengen
            mempercepat karier di bidang teknologi sekaligus bikin dampak nyata buat Palu dan sekitarnya😊🔥.
          </p>
          <div className="flex gap-2">
            <Badge className="dark:text-white rounded-md bg-hmc-base-darkblue dark:bg-hmc-base-blue">
              #SiapBerkarirDibidangIT
            </Badge>
            <Badge className="dark:text-white rounded-md bg-hmc-base-darkblue dark:bg-hmc-base-blue">#HammerCode</Badge>
          </div>
        </div>

        <div className="md:col-span-1 space-y-4">
          <OurFounder />
          <OurProgram />
        </div>
      </div>
    </div>
  );
};
export default About;
