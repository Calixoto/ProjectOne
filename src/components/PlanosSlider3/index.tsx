import { MoreInformations } from "../MoreInformations";
import styles from "./styles.module.scss";

export default function PlanosSlider3() {
    return (
        <>
            <div className={styles.container}>
                <p>plano residencial</p>
                <h1>
                    200
                    <h2>mega</h2>
                </h1>
                <span>SA Ultra</span>
                <p>Fibra Óptica</p>
                <p>20MB de Upload</p>
                <p>Wifi 100m</p>
                <p>Wifi 2.4Ghz/5Ghz</p>

                <h3>R$ <strong>100,00</strong></h3>
                <MoreInformations />
            </div>
        </>
    )
}