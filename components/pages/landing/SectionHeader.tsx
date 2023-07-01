import React from "react"

interface SectionHeaderProps {
  title: string | JSX.Element
  subtitle: string | JSX.Element
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
}): JSX.Element => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold md:text-left">{title}</h1>
      <h2 className="text-center text-xl font-bold md:text-left">{subtitle}</h2>
    </>
  )
}

export default SectionHeader
