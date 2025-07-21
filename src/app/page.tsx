import styles from "./page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <section className={styles.page}>
      <h1>Welcome to my sneakers shop</h1>
      <h2>Your one-stop shop for the latest sneaker trends</h2>

      <Link className={styles.cta} href="/shop">
        Visit now 🔥
      </Link>
    </section>
  )
}
