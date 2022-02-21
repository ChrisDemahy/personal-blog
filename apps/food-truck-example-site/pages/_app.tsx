import { AppProps } from 'next/app';
import Head from 'next/head';

// Tailwinds
// import 'tailwindcss/tailwind.css';
// Weird Temaplate thing 
import './styles.css'


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
