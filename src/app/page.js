import InfoSection from "@/components/infoSection/infoSection";
import MainHeader from "@/components/main header/mainHeader";
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <MainHeader />
      <InfoSection />

    </main>
  )
}
