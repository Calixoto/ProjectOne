import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { ActiveLink } from '../ActiveLink/ActiveLink';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function ButtonNav() {
    const [buttonNav, setButtonNav] = useState(false);

    function openHandleButtonNav() {
        setButtonNav(true);
    }

    function closeHandleButtonNav() {
        setButtonNav(false);
    }

    console.log(buttonNav);

    return (
        <>
            <button
                onClick={openHandleButtonNav}
                className={styles.navMobile}
            >
                <MdMenu />
            </button>

            <div
                className={buttonNav ? styles.menuContent : styles.off}
            >

                {/* <button
                    onClick={closeHandleButtonNav}
                    className={styles.closeSideBar}
                >
                    <MdClose />
                </button> */}

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
        </>
    )
}