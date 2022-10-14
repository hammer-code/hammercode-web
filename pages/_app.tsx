import {AppProps} from 'next/app';
import {NextIntlProvider} from 'next-intl';
import Head from 'next/head';
import '../styles/main.css';

export default function App({Component, pageProps}: AppProps) {

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Head>
        <title>{"Hammercode"}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
