export function formatDate(date: string, locale: string = 'id-ID') {
  const d = new Date(date);

  const weekday = d.toLocaleDateString(locale, {
    weekday: 'long',
  });
  const mmdd = d.toLocaleDateString(locale, {
    month: 'long',
    day: '2-digit',
  });
  const hhmm = d.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return `${weekday}, ${mmdd} · ${hhmm} WITA`;
}
