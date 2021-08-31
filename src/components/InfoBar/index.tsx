import styles from './styles.module.scss';

export function InfoBar() {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <section>
                    <h2>
                        SAnet
                    </h2>
                    <span>
                        Sobre nós
                    </span>
                    <span>
                        Perguntas frequentes
                    </span>
                </section>
                <section>
                    <h2>
                        Planos
                    </h2>
                    <span>
                        SA Família
                    </span>
                    <span>
                        SA Master
                    </span>
                    <span>
                        SA Ultra
                    </span>
                </section>
                <section>
                    <h2>
                        Contatos
                    </h2>
                    <span>
                        0800 608 6236
                    </span>
                    <span>
                        meajuda@sanet.com.br
                    </span>
                    <span>
                        WhatsApp
                    </span>
                    <span>
                        Instagram
                    </span>
                </section>
            </div>
            <section>
                <img src="/images/logosanet.png" alt="logo Sanet" />
                <h3>
                    xx.xxx.xxx/xxxx-xx
                    <br />
                    Rua ---------,-- Natal,RN - xxxxx-xxx
                </h3>
            </section>
        </div>
    )
}