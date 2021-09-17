import { ActiveLink } from '../ActiveLink/ActiveLink';
import { ButtonNav } from '../ButtonNav';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <div>
                    <img src="/images/logosanetsolo.svg" alt="Logo Sanet" />
                    <strong>
                        SANET
                        <p>PROVEDOR DE INTERNET</p>
                    </strong>
                </div>
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
                <ButtonNav />
            </div>
        </header>
    );
}