import Head from "next/head";
import MainComponent from "../components";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filin Ruslan</title>
        <meta name="My portfolio site" content="" />
      </Head>
      <main className={styles.main}>
        <MainComponent />
      </main>
    </div>
  );
}
