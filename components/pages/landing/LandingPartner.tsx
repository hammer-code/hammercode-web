import React from "react"
import Image from "next/image"
import Link from "next/link"

import SectionLanding from "./SectionLanding"

const partners = [
  {
    name: "Imajinr",
    logo: "",
    links: [
      {
        name: "Website",
        link: "https://imajinr.com",
      },
    ],
  },
]

const LandingPartner: React.FC = (): JSX.Element => {
  return (
    <SectionLanding
      title="Kami Tidak Bisa Berdiri Sendiri"
      subtitle="Para mitra yang telah memberikan dukungan kepada kami diantaranya:"
    >
      <div>
        {partners.map((partner) => {
          return (
            <div
              className="flex w-auto flex-col items-center justify-center p-4"
              key={partner.name}
            >
              <div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 p-4">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-200">
                  <Image
                    className="h-20 w-20 rounded-full object-cover"
                    src={partner.logo || "https://picsum.photos/200"}
                    alt={partner.name}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-center text-lg font-semibold">
                  {partner.name}
                </div>
                <div className="mt-4 flex w-full flex-col items-center justify-center">
                  {partner.links.map((link) => {
                    return (
                      <Link
                        key={link.name}
                        className="mb-2 rounded-lg bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white"
                        href={link.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionLanding>
  )
}

export default LandingPartner
