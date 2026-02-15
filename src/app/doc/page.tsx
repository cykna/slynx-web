'use client'
import { useState } from 'react'
import Styles from './page.module.css'
import HeaderDoc from '../components/HeaderDoc/HeaderDoc'

const page = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    return (
        <main className={Styles.main} data-theme={theme}>

            <HeaderDoc onThemeToggle={toggleTheme} currentTheme={theme} />

            <div className={Styles.container}>
                <h2>Hello</h2>
            </div>
        </main>
    )
}

export default page