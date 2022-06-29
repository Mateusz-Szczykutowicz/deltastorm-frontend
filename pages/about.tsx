import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/About.module.scss";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home | Delta Storm</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.content}>
                    <h2>O nas</h2>
                    <p>
                        Jako Delta Storm jesteśmy zespołem, w którym każdy jest
                        specjalistą w swojej dziedzinie. Pracujemy na wspólny
                        sukces budując relacje biznesową opartą na zaufaniu i
                        jakości. My stworzymy serwis internetowy tak, aby twój
                        produkt lub usługa zdobyła świat.
                    </p>
                </div>
                <div className={styles.image}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/about/image.png"
                            layout="fill"
                            alt="Zdjęcie laptopa"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;