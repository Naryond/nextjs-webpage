import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SSRProvider } from 'react-aria';
import Head from 'next/head';
// import Link from 'next/link';
import NavBar from '../components/navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <title>Giuseppe Valeriani</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </SSRProvider>
  );
}
