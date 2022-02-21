import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

// Tailwinds
import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to food-truck-example-site!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
