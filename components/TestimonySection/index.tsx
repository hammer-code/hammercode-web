import React from "react";

import TestimonyCard from "./TestimonyCard";

interface Testimony {
  text: string;
  name: string;
  school: string;
  title?: string;
}

function TestimonySection() {
  const testimonies: Testimony[] = [
    {
      name: "Agi",
      school: "Universitas Tadulako '17",
      text: "hammercode komunitas nya friendly banget, baik mentor, dan peserta pelajarnya. Kelas  di hammercode jg itu sangat seru, metode mengajar para mentornya sangat membntu, dijamin paham 1000%",
    },
    {
      name: "Zulnabil",
      school: "Universitas Tadulako '16",
      title: "Frontend Engineer @ 99.co",
      text: "As a software engineer or who wants to, prepare yourself to face the real IT industry. Since studying from college is not enough, you have to find your mentor. In hammercode you can find it, and expand your network. Because your network is your net worth",
    },
    {
      name: "Akwan",
      school: "Universitas Tadulako '19",
      title: "Backend Engineer Intern @ Bareksa",
      text: "Dengan bantuan dan dorongan teman-teman dan mentor yg ada di komunitas, saya berhasil mendapatkan kesempatan magang di tahun pertama dan kedua kuliah",
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
          <div className="px-4 mb-12">
            <p className="text-hc-green text-lg mb-5 font-bold">Our Impact</p>
            <h2 className="text-3xl font-bold mb-6">
              Beberapa Teman Yang Merasakan Manfaat
            </h2>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex-1 mb-4 px-4">
              <TestimonyCard {...testimonies[0]} />
            </div>
            <div className="flex-1 mb-4 px-4">
              <TestimonyCard {...testimonies[1]} />
            </div>
            <div className="flex-1 px-4">
              <TestimonyCard {...testimonies[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonySection;
