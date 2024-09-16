import Image from "next/image";
import { partnersData } from "../constants";
import { useTranslations } from "next-intl";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const PartnerSection = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="bg-sky-50 dark:bg-slate-900">
      <div className="container md:py-14 py-10 my-10 space-y-8">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-tertiary md:text-3xl text-2xl font-bold">{t("section-partner.title")}</h2>
          <p className="md:text-base text-sm text-slate-500 dark:text-slate-400 md:text-center">
            {t("section-partner.description")}
          </p>
        </div>

        <div className="px-12 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {partnersData.map(({ id, logo, alt }) => (
                <CarouselItem key={id} className="flex justify-center items-center sm:basis-1/4">
                  <Image src={logo} alt={alt} width={174} height={44} className="object-cover" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="sm:hidden" />
            <CarouselNext className="sm:hidden" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
