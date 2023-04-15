import { NextPage } from 'next';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import Head from 'next/head';

const Certificate: NextPage<{
  certificate: {
    _id: string;
    name: string;
    image_link: string;
    share_link: string;
    event: string;
  };
}> = ({ certificate: { _id, name, image_link, share_link, event } }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{event}</title>
        <meta content={`${event} - ${name}`} key="title" />
        <meta
          content={`Terima Kasih Kamu Sudah Berpartisipasi di ${event}`}
          key="description"
        />
        <meta content={image_link} key="image" />
      </Head>
      <div className="w-full">
        <div className="p-4 my-12">
          <p className="text-2xl font-semibold text-center ">
            Terima Kasih kepada{' '}
            <strong className="font-extrabold">{name}</strong>!
          </p>
          <p className="text-center text-gray-500">
            Kamu telah berpartisipasi dalam acara ini.
          </p>
          <div className="w-full h-full relative">
            <div className="flex justify-center">
              <Image
                src={image_link}
                className="my-4 rounded-lg shadow-md object-cover object-center"
                width="640"
                height="480"
                alt={`Sertikat ${event} - ${name}`}
              />
            </div>
            <p className="text-center text-gray-300 mb-8">Sertifikat : {_id}</p>

            <div className="flex justify-center">
              <a
                href={share_link}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                target={'_blank'}
              >
                UNDUH SERTIFIKAT
              </a>
            </div>
            <div>
              <p className="text-center text-gray-500 my-4">
                <strong className="text-lg text-black">Pamerkan</strong>{' '}
                sertifikat ini ke teman-temanmu!
              </p>

              <div className="flex justify-center space-x-6">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${share_link}`}
                >
                  <FaFacebook
                    className="w-full text-3xl text-blue-500 hover:text-blue-700"
                    size={32}
                  />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=Saya telah mengikuti kegiatan ${event} yang diadakan oleh Hammercode.org&url=${share_link}`}
                  target={'_blank'}
                >
                  <FaTwitter
                    className="w-full text-3xl text-blue-500 hover:text-blue-700"
                    size={32}
                  />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${share_link}`}
                  target={'_blank'}
                >
                  <FaLinkedin
                    className="text-3xl text-blue-500 hover:text-blue-700"
                    size={32}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Get Server Side Props
export const getServerSideProps = async (context: { query: { _id: any } }) => {
  const { _id } = context.query;

  const res = await fetch(`http://localhost:3000/api/certificates/${_id}`);
  const certificate = await res.json();

  return {
    props: {
      certificate,
    },
  };
};

export default Certificate;
