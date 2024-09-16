import { notFound } from "next/navigation";

import Certificate from "@/features/certificate/Certificate";
import { CertificateType } from "@/features/certificate/types";

export async function getCertificate(slug: string) {
  try {
    const response = await fetch(`https://moonlight.hammercode.org/v1/certificates/${slug}`);
    if (!response.ok) return null;

    return response.json();
  } catch (error) {
    console.error("Error fetching certificate:", error);
    return null;
  }
}

type Props = {
  params: {
    slug: string;
  };
};

const CertificateDetail = async ({ params }: Props) => {
  const certificate: CertificateType = await getCertificate(params.slug);
  if (!certificate.name) {
    return notFound();
  }

  return <Certificate certificate={certificate} />;
};

export default CertificateDetail;
