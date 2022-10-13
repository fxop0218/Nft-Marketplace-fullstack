import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
    // We will index the events off-chain and then read from our database
    // Setup a server to listen for those evnts tobe fired, and we will add them to a centraliced db
    return <div className={styles.container}>Exemple test</div>
}
