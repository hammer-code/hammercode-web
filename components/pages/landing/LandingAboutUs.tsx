import React from "react"

import SectionLanding from "./SectionLanding"

const LandingAboutUs: React.FC = (): JSX.Element => {
  return (
    <SectionLanding
      title="Siapa Kami?"
      subtitle="Komunitas untuk memajukan daerah melalui teknologi"
    >
      <p>
        Hammercode adalah sebuah komunitas teknologi yang diinisiasi sebagai
        wadah berkumpulnya para pembelajar, programmer, web/mobile developer,
        dan pelaku industri teknologi lainnya yang berada di kota Palu dan
        sekitarnya. Kegiatan-kegiatan yang Kami selenggarakan berorientasi pada
        knowledge-transfer yang diharapkan dapat mempercepat pemerataan
        keterampilan di bidang teknologi informasi serta mencetak talenta
        teknologi yang siap kerja. Hammercode tempat yang cocok untukmu yang
        ingin belajar tentang coding/pemograman dan software engineering.
      </p>
    </SectionLanding>
  )
}

export default LandingAboutUs
