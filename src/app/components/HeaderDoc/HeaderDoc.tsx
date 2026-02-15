import Logo from "../logo/logo"
import styles from "./HeaderDoc.module.css"
import IconLanguage from "../IconLanguage"
import IconTheme from "../IconTheme"
import IconGithub from "../IconGithub"
import IconSearch from "../IconSearch"

interface HeaderDocProps {
    onThemeToggle?: () => void;
    currentTheme?: 'light' | 'dark';
}

const HeaderDoc = ({ onThemeToggle, currentTheme }: HeaderDocProps) => {
    return (
        <article>
            <header className={styles.header}>

                <div>
                    <Logo />
                    <span style={{ color: "#02C75B", fontSize: "36px", fontFamily: "Inter, sans-serif", fontWeight: "bold" }}>
                        <span style={{ color: "#009D47" }}>S</span>
                        <span style={{ color: "#007B37" }}>ly</span>
                        <span style={{ color: "#00A249" }}>n</span>
                        x
                    </span>
                </div>

                <nav className={styles.nav}>
                    <a href="#">Docs</a>
                    <a href="#">Features</a>
                    <a href="#">Use Cases</a>
                    <a href="#">Community</a>
                </nav>

                <div className={styles.icons}>

                    {/* Iconns do site: https://phosphoricons.com/ */}

                    <IconSearch />

                    <button className={styles.btnStarted}>
                        Get Started
                    </button>

                    <button>
                        <IconLanguage />
                    </button>

                    <button onClick={onThemeToggle}>
                        <IconTheme />
                    </button>

                    <a href="#">
                        <IconGithub />
                    </a>
                </div>

            </header>
        </article>
    )
}

export default HeaderDoc