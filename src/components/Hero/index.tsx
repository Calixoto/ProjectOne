import { Best } from '../Best';
import { SignInButton } from '../SignInButton';
import { SubscribeButton } from '../SubscribeButton';
import styles from './styles.module.scss';

export function Hero() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1> Acelere sua vida <br /> com Sanet Fibra</h1>
                    <p>
                        <span>Ultravelocidade com fibra ótica.</span>
                        <br />
                        <span>Internet turbinada.</span>
                        <br />
                        <span>Navegue sem dor de cabeça.</span>
                        <br />

                    </p>
                    <div>
                        <SubscribeButton />
                        {/* <SubscribeButton /> */}
                    </div>
                </div>
                <div className={styles.heroImg}>
                    <img src="/images/plano1.png" alt="hero" />
                    <img src="/images/plano2.png" alt="hero" />
                    <img src="/images/plano3.png" alt="hero" />
                </div>
            </section>
            <Best />
        </>
    )
}