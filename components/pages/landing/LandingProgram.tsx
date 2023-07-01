import React from "react"
import Link from "next/link"

import SectionLanding from "./SectionLanding"

const programs = [
  {
    programTitle: "Pendampingan",
    programDescription:
      "Teman-teman anggota komunitas dari berbagai perusahaan teknologi siap membantu Kamu untuk persiapan aplikasi internship dan full-time job",
    programLink: "/pendampingan",
  },
  {
    programTitle: "Kelas & Workshop",
    programDescription:
      "Tersedia kelas dan workshop untuk berbagai bidang, seperti web, mobile apps hingga data. Tingakat materi yang disampaikan bervariasi, mulai dari beginner hingga advanced",
    programLink: "/kelas",
  },
  {
    programTitle: "Bincang Komunitas",
    programDescription:
      "Acara knowledge-sharing bulanan yang diisi oleh pemateri dari pelaku industri dan teman-teman komunitas.",
    programLink: "/bincang",
  },
]

const LandingProgram: React.FC = (): JSX.Element => {
  interface ProgramCardProps {
    programTitle: string
    programDescription: string
    programLink: string
  }

  const ProgramCard: React.FC<ProgramCardProps> = ({
    programTitle,
    programDescription,
    programLink,
  }): JSX.Element => {
    return (
      <div className="flex w-full flex-col items-center justify-center  border-cyan-800 p-4 md:w-1/3">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-center text-2xl font-bold">{programTitle}</h3>
          <p className="text-center">{programDescription}</p>
        </div>
        <div>
          <Link href={programLink}>
            <p className="text-center underline">Selengkapnya</p>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <SectionLanding
      title="Program-program Kami"
      subtitle="Terdiri dari berbagai program yang dapat Kamu ikuti secara gratis* dan bermanfaat untuk persiapan Kamu dalam menghadapi dunia kerja."
    >
      <div className="flex w-full flex-col p-2 md:flex-row">
        {programs.map((program, index) => {
          return (
            <ProgramCard
              key={index}
              programTitle={program.programTitle}
              programDescription={program.programDescription}
              programLink={program.programLink}
            />
          )
        })}
      </div>
    </SectionLanding>
  )
}

export default LandingProgram
