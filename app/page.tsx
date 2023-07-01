import { Suspense } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import CareerPath from "@/components/CareerPath"
import LandingAboutUs from "@/components/pages/landing/LandingAboutUs"
import LandingCalendarEvent from "@/components/pages/landing/LandingCalendarEvent"
import LandingDonation from "@/components/pages/landing/LandingDonation"
import LandingHighlights from "@/components/pages/landing/LandingHighlights"
import LandingPageHero from "@/components/pages/landing/LandingPageHero"
import LandingPartner from "@/components/pages/landing/LandingPartner"
import LandingProgram from "@/components/pages/landing/LandingProgram"
import LandingTestimony from "@/components/pages/landing/LandingTestimony"

export default function IndexPage() {
  return (
    <Suspense>
      <div className="flex min-h-screen flex-col items-center lg:px-12">
        <LandingPageHero />
        <LandingAboutUs />
        <LandingHighlights />
        <LandingProgram />
        <LandingTestimony />
        <LandingPartner />
        <LandingCalendarEvent />
        <LandingDonation />
      </div>
    </Suspense>
  )
}
