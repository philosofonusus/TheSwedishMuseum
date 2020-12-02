import styles from '../../styles/header.module.scss'
import Link from 'next/link'

const NavBar = _ => {
    return (
        <header className={styles.navbar}>
            <Link href="/">
                Twenty Twenty
            </Link>
            <nav className={styles.pages}>
                <a>
                    Home
                </a>
                <a>
                    About
                </a>
                <a>
                    Blog
                </a>
                <a>
                    Contact
                </a>
            </nav>
        </header>
    )
}
export default NavBar