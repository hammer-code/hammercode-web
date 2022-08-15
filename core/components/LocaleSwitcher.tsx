import { useRouter } from "next/router";
import { ChangeEvent, useCallback } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { pathname, asPath, query, locale, locales = [] } = router;
  const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    router.push({ pathname, query }, asPath, { locale: e.target.value });
  }, [router, pathname, query]);

  return (
    <div className="flex">
      🌎
      <select onChange={handleChange} defaultValue={locale}>
        <option value="id-ID" >Indonesia</option>
        <option value="en-US">English</option>
      </select>
    </div>
  );
}
