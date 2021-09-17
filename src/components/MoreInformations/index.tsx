import Link from 'next/link';
import styles from './styles.module.scss';

export function MoreInformations() {
    return (
        <>
            <Link href="/planos">
                <a className={styles.subscribeButtonMobile}>Saiba mais</a>
            </Link>
            <Link href="/planos">
                <a className={styles.subscribeButton}>Saiba mais</a>
            </Link>
        </>
    )
}