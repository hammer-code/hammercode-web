import { FC } from "react";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FOUNDERS } from "../constant";

const OurFounder: FC = () => {
  return (
    <Card className="p-4 space-y-4">
      <h2 className="text-2xl font-semibold text-hmc-primary">Our Founder</h2>
      {FOUNDERS.map(({ id, image, role, name }) => (
        <CardContent key={id} className="p-0 flex justify-center flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <Image
              src={image}
              alt={name}
              width={512}
              height={512}
              className="lg:w-14 w-16 lg:h-14 h-16 object-cover border-2 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h3>{name}</h3>
              <p className="sm:text-sm text-xs text-slate-400 dark:text-slate-400">{role}</p>
              <div className="flex mt-2 space-x-2">
                <Badge>
                  <Linkedin className="w-4 h-4" />
                </Badge>
                <Badge className="bg-gray-600 hover:bg-gray-700">
                  <Github className="w-4 h-4" />
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      ))}
    </Card>
  );
};

export default OurFounder;
