import styles from "./nav-bar.module.css";

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.navBarList}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </nav>
  )
}
