import styles from "./integracao2.module.css"

export default function integracao2() {
    return (
        <div id={styles.integracao2}>
            <div className={styles.vermelha}>TEXTO #1</div>
            <div className={styles.azul}>TEXTO #2</div>
            <div className={styles.branco}>TEXTO #3</div>
        </div>
    )
}