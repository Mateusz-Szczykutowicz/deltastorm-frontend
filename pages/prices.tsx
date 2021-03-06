import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Prices.module.scss";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cennik | Delta Storm</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.textWrapper}>
                    <div>
                        <h2>Cennik*</h2>
                        <p>
                            Każdy projekt wyceniany jest indywidualnie po
                            konsultacji z klientem
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/prices/image.svg"
                            layout="fill"
                            alt="Zdjęcie cennik"
                        />
                    </div>
                </div>
                <div className={styles.pricesWrapper}>
                    <div className={styles.pricesContainer}>
                        <div className={styles.price}>
                            <p>Projektowanie stron internetowych</p>
                            <p className={styles.tag}>50zł/h</p>
                        </div>
                        <div className={styles.price}>
                            <p>Tworzenie stron internetowych</p>
                            <p className={styles.tag}>60zł/h</p>
                        </div>
                        <div className={styles.price}>
                            <p>Tworzenie aplikacji webowych</p>
                            <p className={styles.tag}>80zł/h</p>
                        </div>
                        <div className={styles.price}>
                            <p>Konfiguracja hostingu</p>
                            <p className={styles.tag}>100zł + 20zł/h</p>
                        </div>
                        <div className={styles.price}>
                            <p>Zarządzanie domeną</p>
                            <p className={styles.tag}>50zł + 10zł/h</p>
                        </div>
                    </div>
                    <p className={styles.clause}>
                        *Wszystkie ceny są cenami netto
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
