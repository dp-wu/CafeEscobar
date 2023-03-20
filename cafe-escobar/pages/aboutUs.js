import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

function About() {
  return (
    <>
      <Head>
        <tile>About Us</tile>
        <meta
          name="description"
          content="Café Escobar, A Coffee Bean Trading Platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Who we are</p>
          <p>Colombia is full of hard working people, who every day aim to be better, to have a better future, and
            some of them have found a great, unique and amazing way to do it through working with coffee.What an amazing product to work with, which manages to offer these people new opportunities, new beginnings, and
            ways to be recognized worldwide because the remarkable and particular product.
            We are a brand of coffee growers, businessmen, artists, people who have a big heart, who are
            passionate about what we do. Colombia is full of people who believe that we can achieve our goals thanks to the
            people who surround us, that is why we want to support all the Colombian talent that is making a
            difference in other countries, we want to find coffee lovers worldwide.</p>
        </div>

        <div className={styles.center}>
          <div className={styles.mainimage}>
            <Image
              src="/AboutUsMain.jpg"
              alt="this is us, cafe escobar"
              width={500}
              height={612}
              priority
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default About;
