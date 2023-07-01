import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import CareerPath from "@/components/CareerPath"

import SectionLanding from "./SectionLanding"

const LandingPageHero: React.FC = (): JSX.Element => {
  return (
    <SectionLanding
      title={
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Siap Menjadi Talenta Teknologi Lokal Berdaya Saing Global?
        </h1>
      }
      subtitle={
        <h2 className="max-w-[700px] text-lg text-muted-foreground">
          Mulai karirmu di bidang teknologi sebagai <CareerPath />
        </h2>
      }
    >
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.discord}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Gabung Sekarang
        </Link>
      </div>
    </SectionLanding>
  )
}

export default LandingPageHero
