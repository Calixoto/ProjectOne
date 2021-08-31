import { Best } from '../Best';
import { SignInButton } from '../SignInButton';
import { SubscribeButton } from '../SubscribeButton';
import styles from './styles.module.scss';

export function Hero() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1>Headlines para <br /> Wireframes Hero</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolores hic vel, eligendi maxime atque eos accusantium.</p>
                    <div>
                        <SubscribeButton />
                        {/* <SubscribeButton /> */}
                    </div>
                </div>
                <div className={styles.heroImg}>
                    <img src="/images/heroImg.png" alt="hero" />
                    <img src="/images/heroImg.png" alt="hero" />
                    <img src="/images/heroImg.png" alt="hero" />
                    <img src="/images/heroImg.png" alt="hero" />
                </div>
            </section>
            <Best />
        </>
    )
}