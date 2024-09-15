import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PROGRAM } from "./constant";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-3 space-y-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-hmc-base-blue">About Hammercode</h1>
          <p className="text-sm text-gray-500">Since 2017 - Now</p>
        </div>
        <p>
          <span className="text-hmc-primary font-semibold underline">Hammercode</span> adalah sebuah komunitas teknologi
          yang diinisiasi sebagai wadah berkumpulnya para pembelajar, programmer, web/mobile developer, dan pelaku
          industri teknologi lainnya yang berada di kota Palu dan sekitarnya. Kegiatan-kegiatan yang Kami selenggarakan
          berorientasi pada knowledge-transfer yang diharapkan dapat mempercepat pemerataan keterampilan di bidang
          teknologi informasi serta mencetak talenta teknologi yang siap kerja. Hammercode tempat yang cocok untukmu
          yang ingin belajar tentang coding/pemograman dan software engineering.
        </p>
        <Image
          src="https://media.istockphoto.com/id/1410270664/photo/modern-style-office-with-exposed-concrete-floor-and-a-lot-of-plants.jpg?s=612x612&w=0&k=20&c=lBivR3vIWH4dnb6MUNkQtQsIisaUEnzl2f6Ozyr-Jis="
          width={200}
          height={100}
          className="w-full h-30 rounded-md shadow-lg border"
          alt="hmc"
        />
        <p>
          Kebutuhan akan talenta teknologi berkualitas terus bertambah. Namun sayangnya gap skills yang dimiliki oleh
          lulusan IT dari universitas dan kebutuhan industri masih cukup besar. Di pulau Jawa dan Sumatera, banyak
          universitas universitas top-level serta ekosistem komunitas dan industri yang lebih maju di banding daerah
          lain, khususnya Palu, Sulawesi Tengah.
        </p>
      </div>

      <div className="md:col-span-1">
        <Card className="p-4 space-y-4">
          <h2 className="text-xl font-semibold text-hmc-primary">Our Program</h2>
          {PROGRAM.map(({ id, title, desc, icon }) => (
            <CardContent key={id} className="p-0 flex items-center gap-2">
              <div>
                <Card className="w-12 h-12 rounded-full flex items-center justify-center">{icon}</Card>
              </div>
              <div>
                <h3 className="text-md font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </CardContent>
          ))}
        </Card>
      </div>
    </div>
  );
};
export default About;
