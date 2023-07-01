import React from "react"

import SectionLanding from "./SectionLanding"

const beneficiaries = [
  {
    name: "Agi",
    testimony:
      "hammercode komunitas nya friendly banget, baik mentor, dan peserta pelajarnya. Kelas di hammercode jg itu sangat seru, metode mengajar para mentornya sangat membntu, dijamin paham 1000%",
    education: "Universitas Tadulako '17",
    company: "",
    links: [],
  },
  {
    name: "Zulnabil",
    testimony:
      "As a software engineer or who wants to, prepare yourself to face the real IT industry. Since studying from college is not enough, you have to find your mentor. In hammercode you can find it, and expand your network. Because your network is your net worth",
    education: "Universitas Tadulako '16",
    company: "",
    links: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/zulnabil/",
      },
      {
        name: "GitHub",
        link: "https://www.github.com/zulnabil",
      },
    ],
  },
  {
    name: "Akwan",
    testimony:
      "Kelas di hammercode sangat membantu saya dalam memahami materi yang saya pelajari. Selain itu, mentor yang mengajar juga sangat ramah dan bersahabat. Saya sangat merekomendasikan hammercode untuk teman-teman yang ingin belajar programming",
    education: "Universitas Tadulako '17",
    company: "Bareksa, eFishery",
    links: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/akwanmaroso/",
      },
      {
        name: "GitHub",
        link: "https://www.github.com/akwanmaroso",
      },
    ],
  },
]

const LandingTestimony: React.FC = (): JSX.Element => {
  return (
    <SectionLanding
      title="Manfaat dari Kegiatan Kami"
      subtitle="Dapat dilihat dari testimoni teman-teman yang telah mengikuti kegiatan kami, berikut ini beberapa testimoni dari mereka"
    >
      <div className="flex w-full flex-col p-2 md:flex-row">
        {beneficiaries.map((beneficiary, index) => {
          // return (
          //   <div
          //     key={index}
          //     className="flex w-full flex-col items-center justify-center  border-cyan-800 p-4 md:w-1/3"
          //   >
          //     <div className="flex flex-col items-center justify-center">
          //       <h3 className="text-center text-2xl font-bold">
          //         {beneficiary.name}
          //       </h3>
          //       <p className="text-center">{beneficiary.testimony}</p>
          //       <p className="text-center">{beneficiary.education}</p>
          //       <p className="text-center">{beneficiary.company}</p>
          //       <div className="flex flex-row space-x-3">
          //         {beneficiary.links?.map((link, index) => {
          //           return (
          //             <a
          //               key={index}
          //               href={link.link}
          //               className="text-center underline"
          //             >
          //               {link.name}
          //             </a>
          //           )
          //         })}
          //       </div>
          //     </div>
          //   </div>
          // )
          // Create a testimonial card, with the following structure:
          // Name on top
          // Testimony
          // Education
          // Company
          // Links, if any, with the following structure:
          // Link name (e.g. LinkedIn)
          // Link URL
          return (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-center  border-cyan-800 p-4 md:w-1/3"
            >
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-center text-2xl font-bold">
                  {beneficiary.name}
                </h3>
                <p className="text-center">{beneficiary.testimony}</p>
                <p className="text-center">{beneficiary.education}</p>
                <p className="text-center">{beneficiary.company}</p>
                <div className="flex flex-row space-x-3">
                  {beneficiary.links?.map((link, index) => {
                    return (
                      <a
                        key={index}
                        href={link.link}
                        className="text-center underline"
                      >
                        {link.name}
                      </a>
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

export default LandingTestimony
