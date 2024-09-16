import { Card, CardContent, CardHeader } from "@/components/ui/card";

import Image from "next/image";
import { programData } from "../constants";

const ProgramSection = () => {
  return (
    <div className="container py-10 space-y-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-tertiary md:text-3xl text-2xl font-bold">Program Hammercode ✨</h2>
        <p className="max-w-3xl md:text-base text-sm text-slate-500 dark:text-slate-400 md:leading-7">
          Kegiatan-kegiatan yang kami selenggarakan berorientasi pada knowledge-transfer yang diharapkan dapat
          mempercepat pemerataan keterampilan di bidang teknologi informasi serta mencetak talenta teknologi yang siap
          kerja.
        </p>
      </div>

      {/* Our Prorams */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {programData.map((data) => (
          <Card key={data.id}>
            <CardHeader>
              <div className="flex justify-center w-full">
                <div className="space-y-4">
                  <Image
                    className="md:w-36 w-28 md:h-36 h-28 rounded-2xl"
                    src={data.icon}
                    alt={data.title}
                    width={140}
                    height={140}
                  />
                  <Image
                    className="md:w-36 w-28 rounded-2xl"
                    src="/assets/images/illustrations/shape-overlay.svg"
                    alt={data.title}
                    width={140}
                    height={140}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4 mt-4">
                <div className="bg-sky-100 dark:bg-sky-900 p-2 w-9 h-9 text-sm text-hmc-primary flex justify-center items-center rounded-lg">
                  {data.id}
                </div>
                <h3 className="text-xl text-center font-semibold">{data.title}</h3>
                <p className="md:text-sm text-sm text-center text-slate-500 dark:text-slate-400 md:leading-6">
                  {data.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProgramSection;
