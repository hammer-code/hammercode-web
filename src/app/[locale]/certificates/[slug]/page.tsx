import { notFound } from "next/navigation";

import Certificate from "@/features/certificate/Certificate";
import { CertificateType } from "@/features/certificate/types";

type Props = {
  params: {
    slug: string;
  };
};

const CertificateDetail = async ({ params }: Props) => {
  const data = await fetch(`https://moonlight.hammercode.org/v1/certificates/${params.slug}`);
  const certificateDetail: CertificateType = await data.json();

  if (!certificateDetail.name) {
    return notFound();
  }

  return <Certificate certificate={certificateDetail} />;
};

export default CertificateDetail;
