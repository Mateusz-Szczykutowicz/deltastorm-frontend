import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Work.module.scss";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jak pracujemy? | Delta Storm</title>
            </Head>
            <Header />
            <main className={styles.main}>
                <h2>Jak pracujemy?</h2>
                <div className={styles.content}>
                    <Link href="/work/creative">
                        <div className={styles.button}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/images/work/creative.svg"
                                    layout="fill"
                                    alt="Etap kreatywny"
                                />
                            </div>
                            <span>1. Etap kreatywny</span>
                        </div>
                    </Link>
                    <div className={styles.line}></div>
                    <Link href="/work/time">
                        <div className={styles.button}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/images/work/time.svg"
                                    layout="fill"
                                    alt="Etap czasowy"
                                />
                            </div>
                            <span>2. Etap czasowy</span>
                        </div>
                    </Link>
                    <div className={styles.line}></div>
                    <Link href="/work/production">
                        <div className={styles.button}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/images/work/production.svg"
                                    layout="fill"
                                    alt="Etap produkcyjny"
                                />
                            </div>
                            <span>3. Etap produkcyjny</span>
                        </div>
                    </Link>
                    <div className={styles.line}></div>
                    <Link href="/work/corrections">
                        <div className={styles.button}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/images/work/corrections.svg"
                                    layout="fill"
                                    alt="Etap poprawek"
                                />
                            </div>
                            <span>4. Etap poprawek</span>
                        </div>
                    </Link>
                    <div className={styles.line}></div>
                    <Link href="/work/final">
                        <div className={styles.button}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/images/work/final.svg"
                                    layout="fill"
                                    alt="Etap końcowy"
                                />
                            </div>
                            <span>5. Etap końcowy</span>
                        </div>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
