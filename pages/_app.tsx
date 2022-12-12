import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/navbar';
import { SSRProvider } from 'react-aria';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <NavBar />
      <Component {...pageProps} />
    </SSRProvider>
  );
}
