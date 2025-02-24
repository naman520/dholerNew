import Footer from '@/components/footer';
import Header from '@/components/header';
import Whatsapp from '@/components/whatsapp';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Header />
        <Component {...pageProps} />
        <Whatsapp/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}
