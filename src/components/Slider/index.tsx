import styles from './styles.module.scss';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import PlanosSlider1 from '../PlanosSlider1';
import PlanosSlider2 from '../PlanosSlider2';
import PlanosSlider3 from '../PlanosSlider3';
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export default function Slider() {
    return (
        <>
            <div className={styles.content}>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                    className={styles.container}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <PlanosSlider1 />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PlanosSlider2 />
                    </SwiperSlide>
                    <SwiperSlide >
                        <PlanosSlider3 />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}