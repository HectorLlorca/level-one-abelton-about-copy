import InfoSection from "@/components/infoSection/infoSection";
import MainHeader from "@/components/mainheader/mainHeader";
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <MainHeader />
      <InfoSection />


    </main>
  )
}
