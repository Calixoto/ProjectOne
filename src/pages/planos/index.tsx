import React from 'react';
import { SignInButton } from '../../components/SignInButton';
import { SubscribeButton } from '../../components/SubscribeButton';
import styles from './styles.module.scss';

export default function Planos() {
    return (
        <>
            <section className={styles.container}>
                <h2>
                    Conheça nossos
                    <p><strong>planos</strong>net</p>
                </h2>
            </section>
            <section className={styles.contentContainer}>
                <div>
                    <p>plano residencial</p>
                    <h1>
                        50
                        <h2>mega</h2>
                    </h1>
                    <span>SA Família</span>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>

                    <h3>R$ <strong>70,00</strong></h3>
                    <SubscribeButton />
                </div>
                <div>
                    <p>plano residencial</p>
                    <h1>
                        50
                        <h2>mega</h2>
                    </h1>
                    <span>SA Família</span>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>

                    <h3>R$ <strong>70,00</strong></h3>
                    <SubscribeButton />
                </div>
                <div>
                    <p>plano residencial</p>
                    <h1>
                        50
                        <h2>mega</h2>
                    </h1>
                    <span>SA Família</span>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>

                    <h3>R$ <strong>70,00</strong></h3>
                    <SubscribeButton />
                </div>
            </section>
        </>
    )
}