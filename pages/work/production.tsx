import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "../../styles/Work.production.module.scss";

const Work: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Etap produkcyjny | Delta Storm</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.content}>
                    <h2>Etap produkcyjny</h2>
                    <p>
                        W naszej firmie mamy trzy główne kroki projektowe.
                        Design - w tym kroku nasi grafice rozpoczynają pracę nad
                        utworzeniem grafik pod stronę.
                        Makietowanie/prototypowanie - tworzenie poszczególnych
                        widoków z możliwością pozostawienia komentarza opinii
                        dla designera w celu. Development - nasi programiści
                        rozpoczynają wdrażać zatwierdzona widoki na produkcje.
                    </p>
                </div>
                <div className={styles.image}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/work/production/image.svg"
                            layout="fill"
                            alt="Zdjęcie etapu kreatywnego"
                        />
                    </div>
                </div>
            </main>
            <nav className={styles.navButtons}>
                <Link href="/work/time">{`< Poprzedni etap`}</Link>
                <Link href="/work/corrections">{`Następny etap >`}</Link>
            </nav>
            <Footer />
        </div>
    );
};

export default Work;
