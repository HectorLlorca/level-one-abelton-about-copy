import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h1>Ableton</h1>
            <div className={`${styles.footer_section1} ${styles.footer_section}`}>
                <div className={styles.footer_section1_item}>
                    <p>Lorem ipsum dolor </p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem</p>
                </div>
                <div className={styles.footer_section1_item}>
                    <p>Lorem ipsum dolor </p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem</p>
                </div>
                <div className={styles.footer_section1_item}>
                    <p>Lorem ipsum dolor </p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem</p>
                </div>
            </div>
            <div className={`${styles.footer_section2} ${styles.footer_section}`}>
                <div className={styles.footer_section1_item}>
                    <p>Lorem ipsum dolor </p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem</p>
                </div>
                <div className={styles.footer_section1_item}>
                    <p>Lorem ipsum dolor </p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem</p>
                </div>
                <div className={styles.footer_section1_item}>
                    <p>Lorem ipsum dolor </p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem</p>
                </div>
            </div>
            <div className={`${styles.footer_section3} ${styles.footer_section}`}></div>

        </footer>
    )
}