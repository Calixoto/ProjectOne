import Link from 'next/link';
import styles from './styles.module.scss';

export function SignInButton() {
    return (
        <Link href="https://sanet.sgp.net.br/central" >
            <a target="_blank" className={styles.signInButton}>ASSINANTE</a>
        </Link>
    )
}