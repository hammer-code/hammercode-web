import Image from "next/image";
import { socialMedia } from "../constants";

const HeroSection = () => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-6 justify-between">
      <div className="basis-1/2">
        <div className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-hmc-primary md:text-5xl text-3xl font-bold md:leading-[60px]">
              Improve Your Skill by Talking High-Quality Classes with Us!
            </h1>
            <p className="text-slate-600">Hammercode is a tech community based in Palu, Indonesia</p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-2">
            {socialMedia.map(({ id, icon, is_gradient, colorOne, colorTwo }) => (
              <div
                key={id}
                className={`${is_gradient ? `bg-gradient-to-br from-[${colorOne}] to-[${colorTwo}]` : `bg-[${colorOne}]`} p-3 rounded-md flex justify-center w-12 h-12`}
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
