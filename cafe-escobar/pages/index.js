import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Café Escobar</title>
        <meta
          name="description"
          content="Café Escobar, A Coffee Bean Trading Platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Welcome to Café Escobar!</p>
        </div>

        <div className={styles.center}>
          <div className={styles.bgImage}>
            <Image
              src="/landingPageCoffee.jpg"
              alt="landing page image with coffee beans"
              width={767.2}
              height={512}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            href="shopBeans"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Shop Beans <span>-&gt;</span>
            </h2>
          </Link>

          <Link
            href="shopPlants"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Shop Plants <span>-&gt;</span>
            </h2>
          </Link>

          <Link
            href="loginSignup"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Login / Signup <span>-&gt;</span>
            </h2>
          </Link>

          <Link
            href="aboutUs"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About Us <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </main>
    </>
  );
}
