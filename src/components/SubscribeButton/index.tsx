import Link from 'next/link';
import styles from './styles.module.scss';

export function SubscribeButton() {
    let isMobile = false;

    if (screen.width < 720) {
        isMobile = true;
    }
    return isMobile ? (
        <Link href="https://api.whatsapp.com/send?phone=558488658904&text=">
            <a target="_blank" className={styles.subscribeButton}>Assine agora</a>
        </Link>
    ) : (
        <Link href="https://web.whatsapp.com/send?phone=558488658904">
            <a target="_blank" className={styles.subscribeButton}>Assine agora</a>
        </Link>
    )
}