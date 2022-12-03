import { NextPage } from 'next';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Certificate: NextPage<{
  certificate: {
    _id: string;
    name: string;
    imageLink: string;
    shareLink: string;
  };
}> = ({ certificate: { _id, name, imageLink, shareLink } }): JSX.Element => {
  return (
    <div className="w-full">
      <div className="p-4 my-12">
        <p className="text-2xl font-bold text-center">
          Terima Kasih kepada {name}!
        </p>
        <p className="text-center text-gray-500">
          Kamu telah berpartisipasi dalam acara ini.
        </p>
        <div className="w-full h-full relative">
          <div className="flex justify-center">
            <Image
              src={imageLink}
              className="my-4 rounded-lg shadow-md object-cover object-center"
              width="640"
              height="480"
            />
          </div>

          <div className="flex justify-center">
            <a
              href={shareLink}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              target={'_blank'}
            >
              UNDUH SERTIFIKAT
            </a>
          </div>
          <div>
            <p className="text-center text-gray-500 my-4">
              <strong>Pamerkan</strong> sertifikat ini ke teman-temanmu!
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`}
              >
                <FaFacebook
                  className="w-full text-3xl text-blue-500 hover:text-blue-700"
                  size={32}
                />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=Saya telah mengikuti acara Palu Developer Day yang diadakan oleh Hammercode.org&url=${shareLink}`}
                target={'_blank'}
              >
                <FaTwitter
                  className="w-full text-3xl text-blue-500 hover:text-blue-700"
                  size={32}
                />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareLink}`}
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
