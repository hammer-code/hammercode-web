import React from "react"

import SectionHeader from "./SectionHeader"

interface SectionLandingProps {
  children: React.ReactNode
  title: string | JSX.Element
  subtitle: string | JSX.Element
}

const SectionLanding: React.FC<SectionLandingProps> = ({
  children,
  subtitle,
  title,
}): JSX.Element => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10  ">
      <SectionHeader subtitle={subtitle} title={title} />
      {children}
    </section>
  )
}

export default SectionLanding
