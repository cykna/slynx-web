import NavBar from "./nav-bar/nav-bar"
import Link from "next/link"
import Icon from "@/app/components/icon"
import styles from "./header.module.css"
import Logo from "../logo/logo"
import IconGithub from "@/app/components/IconGithub"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <Logo />
          <span className={styles.title}>
            <span style={{ color: "#007B37" }}>S</span>
            <span style={{ color: "#009D47" }}>ly</span>
            <span style={{ color: "#00A249" }}>n</span>
            <span style={{ color: "#02C75B" }}>x</span>
          </span>
        </Link>
      </div>

      <NavBar />

      <div className={styles.actions}>
        <button type="button" className={styles.iconBtn}>
          <Icon icon="material-symbols:search-rounded" height={24} />
        </button>

        <Link href="#" className={`getStartedLink ${styles.headerGetStartedLink}`}>Get Started</Link>

        <button type="button" className={styles.iconBtn}>
          <Icon icon="material-symbols:dark-mode-outline-rounded" height={24} />
        </button>

        <button type="button" className={styles.iconBtn}>
          <Icon icon="material-symbols:translate" height={24} />
        </button>

        <button type="button" className={styles.iconBtn}>
          <IconGithub />
        </button>
      </div>
    </header>
  )
}
