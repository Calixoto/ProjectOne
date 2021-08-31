import { MdAttachMoney, MdSync, MdPayment, MdHeadsetMic } from 'react-icons/md';
import styles from './styles.module.scss';

export function Best() {
    return (
        <section className={styles.container}>
            <div>
                <h3>O melhor</h3>
                <p>Por que <br />Sanet?</p>
            </div>
            <div>
                <MdAttachMoney />
                <p>Preço</p>
            </div>
            <div>
                <MdSync />
                <p>Manutenção</p>
            </div>
            <div>
                <MdPayment />
                <p>Pagamento</p>
            </div>
            <div>
                <MdHeadsetMic />
                <p>Suporte</p>
            </div>
        </section>
    )
}