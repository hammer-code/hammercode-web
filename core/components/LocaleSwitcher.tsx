import { useRouter } from "next/router";
import { ChangeEvent, useCallback } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { pathname, asPath, query, locales = [] } = router;
  const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    router.push({ pathname, query }, asPath, { locale: e.target.value });
  }, [router, pathname, query]);

  return (
    <select onChange={handleChange}>
      <option value="id-ID" >Indonesia</option>
      <option value="en-US">English</option>
    </select>
  );
}
