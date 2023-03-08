import Image from "next/image";
import Link from "next/link";
import burguer from "../../../public/burguer.svg";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.burguers}>
                <Image alt="" className={styles.burguer} src={burguer} height={30} width={50}></Image>
                <Image alt="" className={`${styles.burguer} ${styles.burguer_two}`} src={burguer} height={30} width={50}></Image>
            </div>
            <div className={styles.navigation}>
                <ul className={styles.navigation_ul}>
                    <li><Link href={''}>Live</Link></li>
                    <li><Link href={''}>Push</Link></li>
                    <li><Link href={''}>Note</Link></li>
                    <li><Link href={''}>Link</Link></li>
                    <li><Link href={''}>Shop</Link></li>
                    <li><Link href={''}>Packs</Link></li>
                    <li><Link href={''}>Help</Link></li>
                    <li><Link href={''}>More +</Link></li>
                </ul>
            </div>
            <div className={styles.sesion}>
                <Link href={''}>Try Live for free</Link>
                <Link href={''}>Log in or register</Link>
            </div>
        </header>
    )
} 