import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Menu.module.scss";

const Menu: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Menu | Delta Storm</title>
                </Head>
                <div className={styles.headerWrapper}>
                    <header>
                        <Link href="/">
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/images/header/logo.svg"
                                    layout="fill"
                                    alt="Delta Storm"
                                />
                            </div>
                        </Link>
                        <div
                            className={styles.back}
                            onClick={() => router.back()}
                        >
                            <Image
                                src="/images/menu/close.svg"
                                layout="fill"
                                alt="X"
                            />
                        </div>
                    </header>
                </div>
                <main className={styles.content}>
                    <nav className={styles.menu}>
                        <Link href="/about">O nas</Link>
                        <Link href="/work">Jak pracujemy?</Link>
                        <Link href="/projects">Portfolio</Link>
                        <Link href="/prices">Cennik</Link>
                        <Link href="/contact">Kontakt</Link>
                    </nav>
                </main>
            </div>
            <div className={styles.desktop}>
                <h2>Taka strona nie istnieje</h2>
                <Link href="/">Wróć na stronę główną</Link>
            </div>
        </>
    );
};

export default Menu;
