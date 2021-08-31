import { ActiveLink } from '../ActiveLink/ActiveLink';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/images/logosanet.png" alt="Logo Sanet" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Início</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/vantagens">
                        <a>Vantagens</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/planos">
                        <a>Planos</a>
                    </ActiveLink>
                    {/* <ActiveLink activeClassName={styles.active} href="/"> */}
                    {/* <a>Contato</a> */}
                    {/* </ActiveLink> */}
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}