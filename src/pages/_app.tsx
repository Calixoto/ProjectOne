import { Header } from '../components/Header';
import { InfoBar } from '../components/InfoBar';
import '../styles/global.scss';

import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

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
