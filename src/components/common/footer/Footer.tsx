import React from "react";
import { dataFooter } from "./constants";
import { Link } from "@/lib/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const date = new Date();
  const { resource, social_media, contact } = dataFooter;
  return (
    <>
      <div className="space-y-8 border-t border-dashed">
        <div className="max-w-7xl mx-auto px-5 py-10">
          <div className="flex md:flex-row flex-col justify-between md:items-start items-center gap-10">
            <Image src="/assets/icons/ic_hmc-full.svg" alt="hammercode-logo" width={100} height={100} />

            {/* Resources */}
            <div className="flex flex-col md:items-start items-center gap-3">
              <h3 className="text-lg text-hmc-primary font-semibold">{resource.title}</h3>
              <div className="flex flex-col md:items-start items-center gap-1">
                {resource.data.map((data) => (
                  <Link
                    key={data.navigate_url}
                    href={data.navigate_url}
                    className="md:text-sm text-xs text-slate-600 dark:text-slate-400 hover:opacity-80 hover:underline"
                  >
                    {data.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col md:items-start items-center gap-3">
              <h3 className="text-lg text-hmc-primary font-semibold">{social_media.title}</h3>
              <div className="flex flex-col md:items-start items-center gap-1">
                {social_media.data.map((data) => (
                  <Link
                    key={data.navigate_url}
                    href={data.navigate_url}
                    className="md:text-sm text-xs text-slate-600 dark:text-slate-400 hover:opacity-80 hover:underline"
                  >
                    {data.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col md:items-start items-center gap-3">
              <h3 className="text-lg text-hmc-primary font-semibold">{contact.title}</h3>
              <div className="flex flex-col md:items-start items-center gap-1">
                {contact.data.map((data) => (
                  <Button
                    key={data.navigate_url}
                    variant="link"
                    asChild
                    className="!h-auto !p-0 md:text-sm justify-start text-xs font-normal text-slate-600 dark:text-slate-400 hover:opacity-80"
                  >
                    {data.navigate_url ? <Link href={data.navigate_url}>{data.value}</Link> : <p>{data.value}</p>}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-slate-950 dark:bg-slate-950 p-8">
        <p className="text-center text-white">{date.getFullYear()} © Penggiat Teknologi Palu Berkarya</p>
      </footer>
    </>
  );
};

export default Footer;
