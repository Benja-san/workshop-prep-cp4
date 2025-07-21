import Link from "next/link"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.noBottomBorder} href="/">
          <img
            src="https://png.pngtree.com/png-vector/20240705/ourmid/pngtree-colorful-sneakers-logo-png-image_7205357.png"
            alt="logo"
          />
        </Link>
        <Link href="/contact">contact me</Link>
      </nav>
    </header>
  )
}

export default Header
