import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header: NextPage = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/header/logo.svg"
                            layout="fill"
                            alt="Delta Storm"
                        />
                    </div>
                </Link>
            </div>
            <nav>
                <div className={styles.mobileNav}>
                    <Link href="/menu">
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/header/menu.svg"
                                layout="fill"
                                alt="Delta Storm"
                            />
                        </div>
                    </Link>
                </div>
                <div className={styles.desktopNav}>
                    <Link href="/about">O nas</Link>
                    <Link href="/work">Jak pracujemy?</Link>
                    <Link href="/projects">Portfolio</Link>
                    <Link href="/prices">Cennik</Link>
                    <Link href="/contact">Kontakt</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
