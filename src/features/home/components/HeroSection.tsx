import Image from "next/image";
import { socialMedia } from "../constants";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex md:flex-row flex-col items-center gap-6 justify-between">
      <div className="basis-1/2">
        <div className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-hmc-primary md:text-5xl text-3xl font-bold md:leading-[60px]">
              {t("section-hero.title")}
            </h1>
            <p className="text-slate-600">{t("section-hero.description")}</p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-2">
            {socialMedia.map(({ id, icon, is_gradient, color_one, color_two }) => (
              <div
                key={id}
                style={{
                  background: is_gradient ? `linear-gradient(135deg, ${color_one} 0%, ${color_two} 100%)` : color_one,
                }}
                className="p-3 rounded-md flex justify-center w-12 h-12 cursor-pointer transition-all duration-75 hover:scale-[1.1]"
              >
                <Image src={icon} alt={icon} width={55} height={55} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="basis-1/2">
        <Image src="/assets/images/illustrations/hero-section.png" alt="hero-section" width={1500} height={1500} />
      </div>
    </div>
  );
};

export default HeroSection;
