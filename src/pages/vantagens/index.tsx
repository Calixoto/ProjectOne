import styles from './styles.module.scss';

export default function Vantagens() {
    return (
        <>
            <section className={styles.container}>
                <h1>
                    Nossas
                    <p>Vantagens</p>
                </h1>
                <div className={styles.content}>
                    <div>
                        <h2>gamer</h2>
                        <section>
                            <img src="/images/imgGamer.png" alt="Gamer" />
                        </section>
                        <section>
                            <span>Jogue sem lag</span>
                            <span>Ping baixo e estável</span>
                            <span>Sem perdas de pacote</span>
                            <span>Taxa de Upload alta</span>
                        </section>
                    </div>
                    <div>
                        <h2>diversao</h2>
                        <section>
                            <img src="/images/imgDiversao.png" alt="Diversão" />
                        </section>
                        <section>
                            <span>Assista sem travamentos</span>
                            <span>Assista em várias telas</span>
                            <span>Assista em alta definição</span>
                            <span>Assista sem parar</span>
                        </section>
                    </div>
                    <div>
                        <h2>home office</h2>
                        <section>
                            <img src="/images/imgHomeOffice.png" alt="Home Office" />
                        </section>
                        <section>
                            <span>Trabalhe de casa</span>
                            <span>Sem dor de cabeça</span>
                            <span>Sem cair durante as reuniões</span>
                            <span>Mais Dinamico</span>
                        </section>
                    </div>
                </div>
                <div className={styles.contentMedias}>
                    <img src="/images/socialMedias.svg" alt="Mídias Sociais" />
                </div>
                <h2>
                    depoimentos
                    <p>
                        Todos amam nossos planos
                    </p>
                </h2>
                <div className={styles.contentDepoimentos}>
                    <div>
                        <img src="/images/personFic1.png" alt="Jorge Silva" />
                        <h3>Jorge Silva</h3>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint culpa quo esse fugit laudantium, tenetur magni doloremque quasi sed. Amet ducimus incidunt iure pariatur sequi beatae reprehenderit corporis labore optio.</span>
                    </div>
                    <div>
                        <img src="/images/personFic2.png" alt="Anna Keller" />
                        <h3>Anna Keller</h3>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint culpa quo esse fugit laudantium, tenetur magni doloremque quasi sed. Amet ducimus incidunt iure pariatur sequi beatae reprehenderit corporis labore optio.</span>
                    </div>
                    <div>
                        <img src="/images/personFic3.png" alt="Marcela Souza" />
                        <h3>Marcela Souza</h3>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint culpa quo esse fugit laudantium, tenetur magni doloremque quasi sed. Amet ducimus incidunt iure pariatur sequi beatae reprehenderit corporis labore optio.</span>
                    </div>
                </div>
            </section>
        </>
    )
}