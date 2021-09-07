import Link from 'next/link';
import styles from './styles.module.scss';

export function SubscribeButton() {
    return (
        <Link href="https://api.whatsapp.com/send?phone=558488380489&text=">
            <a target="_blank" className={styles.subscribeButton}>Assine agora</a>
        </Link>
    )
}