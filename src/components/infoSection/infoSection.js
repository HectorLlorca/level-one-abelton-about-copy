import Link from 'next/link'
import Image from 'next/image'

import styles from './infoSection.module.css'
import girasol from '../../../public/girasol.jpg'
import mano_flores from '../../../public/mano_flores.jpg'


export default function InfoSection() {
    return (
        <div className={styles.container}>
            <div className={styles.info_container}>
                <p className={styles.info_title}>
                    We make <Link href={''}>Live</Link>, <Link href={''}>Push</Link> and <Link href={''}>Link</Link> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
                </p>
                <p className={styles.info_text}>
                    Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.
                </p>
            </div>
            <div className={styles.img_container}>
                <div>
                    <Image alt='' className={styles.img} src={girasol} />

                </div>
                <div>

                    <Image alt='' className={styles.img} src={mano_flores} />
                </div>
            </div>


        </div>

    )
}