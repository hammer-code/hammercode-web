"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { partnersData } from "../constants";

const PartnerSection = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex justify-center py-16">
      <Card className="w-full border-none md:p-2 md:border rounded-3xl">
        <CardHeader>
          <CardTitle className="flex justify-center text-lg text-pretty text-center md:text-xl">
            {t("section-partner.title")}
          </CardTitle>
          <CardDescription className="flex justify-center text-center text-pretty text-hmc-primary">
            {t("section-partner.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="px-16 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-10">
                {partnersData.map(({ id, logo, alt }) => (
                  <CarouselItem key={id} className="flex justify-center items-center pl-2 md:pl-10 sm:basis-1/4">
                    <Image src={logo} alt={alt} width={174} height={44} className="object-cover" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="sm:hidden" />
              <CarouselNext className="sm:hidden" />
            </Carousel>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PartnerSection;
