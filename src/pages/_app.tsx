import { Header } from '../components/Header';
import { InfoBar } from '../components/InfoBar';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <InfoBar />
    </>
  )
}

export default MyApp
