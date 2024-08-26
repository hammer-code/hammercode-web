import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

import { usePathname, useRouter } from "@/lib/navigation";
import { Locale } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LocaleToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const handleSwitch = (value: string) => {
    const nextLocale = value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline" className={`w-[3rem] font-normal`} disabled={isPending}>
          {locale === "id" ? "🇮🇩 ID" : "🇬🇧 EN"}
          <span className="sr-only">Toggle locale</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[3rem]">
        <DropdownMenuItem onClick={() => handleSwitch("id")} className="cursor-pointer">
          🇮🇩 ID
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSwitch("en")} className="cursor-pointer">
          🇬🇧 EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleToggle;
