import { Best } from '../Best';
import { MoreInformations } from '../MoreInformations';
import { SignInButton } from '../SignInButton';
import Slider from '../Slider';
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
                        <span>Qualidade no atendimento</span>
                        <br />
                        <span>Mensalidade Fixa</span>
                        <br />

                    </p>
                    <div>
                        <MoreInformations />
                        {/* <SubscribeButton /> */}
                    </div>
                </div>
                <div className={styles.heroImg}>
                    <Slider />
                </div>
            </section>
            <Best />
        </>
    )
}