import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "../../styles/Work.time.module.scss";

const Work: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Etap czasowy | Delta Storm</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.content}>
                    <h2>Etap czasowy</h2>
                    <p>
                        W tym etapie każda ze stron deklaruje szacowane ramy
                        czasowe na dostarczenie poszczególnych etapów projektu.
                    </p>
                </div>
                <div className={styles.image}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/work/time/image.svg"
                            layout="fill"
                            alt="Zdjęcie etapu czasowego"
                        />
                    </div>
                </div>
            </main>
            <nav className={styles.navButtons}>
                <Link href="/work/creative">{`< Poprzedni etap`}</Link>
                <Link href="/work/production">{`Następny etap >`}</Link>
            </nav>
            <Footer />
        </div>
    );
};

export default Work;
