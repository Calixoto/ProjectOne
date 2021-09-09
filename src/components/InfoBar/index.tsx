import Link from 'next/link';
import styles from './styles.module.scss';

export function InfoBar() {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <section>
                    <h2>
                        SAnet
                    </h2>
                    <a>
                        Sobre nós
                    </a>
                    <a>
                        Perguntas frequentes
                    </a>
                </section>
                <section>
                    <h2>
                        Planos
                    </h2>
                    <Link href="/planos">
                        <a>
                            SA Família
                        </a>
                    </Link>
                    <Link href="/planos">
                        <a>
                            SA Master
                        </a>
                    </Link>
                    <Link href="/planos">
                        <a>
                            SA Ultra
                        </a>
                    </Link>
                </section>
                <section>
                    <h2>
                        Contatos
                    </h2>
                    <a>
                        (84) 98865-8904
                    </a>
                    <a>
                        sanetprovedor@gmail.com
                    </a>
                    <Link href="https://api.whatsapp.com/send?phone=558488658904&text=">
                        <a target="_blank" className={styles.isMobile}>
                            WhatsApp
                        </a>
                    </Link>
                    <Link href="https://web.whatsapp.com/send?phone=558488658904&text=">
                        <a target="_blank" className={styles.isDesktop}>
                            WhatsApp
                        </a>
                    </Link>
                    <Link href="https://instagram.com/sanetprovedor?utm_medium=copy_link">
                        <a target="_blank">
                            Instagram
                        </a>
                    </Link>
                </section>
            </div>
            <section>
                <img src="/images/logosanet.png" alt="logo Sanet" />
                <h3>
                    037.714.943/0001-96
                    <br />
                    Rua do Bambelô, 858A Natal
                    <br />
                    RN - 59139-160
                </h3>
            </section>
        </div>
    )
}