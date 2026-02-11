import NavBar from "./nav-bar/nav-bar"

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        {/* TODO: add Slynx logo icon */}
        
        <h1 className={styles.title}>Slynx</h1>
      </div>

      <NavBar />

      <div className={styles.actions}>
        <button type="button">Search</button>
        <button type="button" className={styles.getStartedBtn}>Get started</button>
        <button type="button">Theme</button>
      </div>
    </header>
  )
}
