import Image from 'next/image'
import Link from 'next/link'
import styles from './mainHeader.module.css'
import flower from '../../../public/flower.jpg'


export default function MainHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <Link href={''}>About</Link>
                <Link href={''}>Jobs</Link>
                <Link href={''}>Apprenticeships</Link>
            </div>
            <div className={styles.img_container}>
                <Image alt='' className={styles.big_img} src={flower} />
            </div>
        </div>

    )
}
