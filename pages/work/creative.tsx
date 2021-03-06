import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "../../styles/Work.creative.module.scss";

const Work: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Etap kreatywny | Delta Storm</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.content}>
                    <h2>Etap kreatywny</h2>
                    <p>
                        Ustalanie potrzeb oraz zapotrzebowania klienta.
                        Podpisanie umów przedwstępnych, prezentacja wdrożonych
                        projektów, wsparcie przy doborze odpowiedniego designu w
                        zależności od prowadzonego biznesu.
                    </p>
                </div>
                <div className={styles.image}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/work/creative/image.svg"
                            layout="fill"
                            alt="Zdjęcie etapu kreatywnego"
                        />
                    </div>
                </div>
            </main>
            <nav className={styles.navButtons}>
                {/* <Link href="">{`< Poprzedni etap`}</Link> */}
                <Link href="/work/time">{`Następny etap >`}</Link>
            </nav>
            <Footer />
        </div>
    );
};

export default Work;
