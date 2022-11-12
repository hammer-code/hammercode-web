import { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';
import Head from 'next/head';
import '../styles/main.css';

// Fix messages in pageProps
export default function App({ Component, pageProps }: AppProps) {
  return (
    // @ts-ignore
    <NextIntlProvider messages={pageProps.messages}>
      <Head>
        <title>{'Hammercode'}</title>{' '}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
