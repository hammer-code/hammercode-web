import React from "react"

import ClickableDonation from "@/components/ClickableDonation"

import SectionLanding from "./SectionLanding"

const SaweriaButton: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-center text-2xl font-bold">Saweria</h3>
      <p className="text-center">Donasi melalui Saweria</p>
      <div className="flex flex-row space-x-3">
        <a
          href="https://saweria.co/hammercode"
          className="text-center underline"
        >
          Klik di Sini
        </a>
      </div>
    </div>
  )
}

const LandingDonation: React.FC = (): JSX.Element => {
  return (
    <SectionLanding
      title={"Donasi"}
      subtitle={"Beberapa cara untuk mendukung kami secara finansial"}
    >
      <ClickableDonation />
    </SectionLanding>
  )
}

export default LandingDonation
