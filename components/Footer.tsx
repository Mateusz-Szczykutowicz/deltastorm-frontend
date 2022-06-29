import { NextPage } from "next";
import styles from "../styles/Footer.module.scss";

const Footer: NextPage = () => {
    return (
        <footer className={styles.container}>
            <h3>&copy; Copyright {new Date().getFullYear()} | Delta Storm</h3>
            <div>
                <span>All Rights Reserved | Created by</span>
                <a
                    href="https://about.deltastorm.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mateusz Szczykutowicz
                </a>
                <span>and</span>
                <a
                    href="https://www.behance.net/karolinadamowi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Karolina Adamowicz
                </a>
            </div>
        </footer>
    );
};

export default Footer;
