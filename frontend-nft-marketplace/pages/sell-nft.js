import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Francis NFT marketplace</title>
                <meta name="description" content="Sell page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Sell page
        </div>
    )
}
