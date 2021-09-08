import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { ActiveLink } from '../ActiveLink/ActiveLink';
import { SignInButton } from '../SignInButton';
import Modal from 'react-modal';
import styles from './styles.module.scss';

export function ButtonNav() {
    const [buttonNav, setButtonNav] = useState(false);

    function openHandleButtonNav() {
        setButtonNav(true);
    }

    function closeHandleButtonNav() {
        setButtonNav(false);
    }

    return (
        <>
            <button
                onClick={openHandleButtonNav}
                className={styles.navMobile}
            >
                <MdMenu />
            </button>
            <Modal
                isOpen={buttonNav}
                onRequestClose={closeHandleButtonNav}
                overlayClassName={styles.menuOverlay}
                className={styles.menuContent}
            >
                <div >
                    <ul>
                        <li>
                            <ActiveLink href="/" activeClassName={styles.active}>
                                <a onClick={closeHandleButtonNav}>inicio</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/planos" activeClassName={styles.active}>
                                <a onClick={closeHandleButtonNav}>planos</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/vantagens" activeClassName={styles.active}>
                                <a onClick={closeHandleButtonNav}>vantages</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <SignInButton />
                        </li>
                    </ul>
                </div>
            </Modal>
        </>
    )
}