import styles from "./page.module.css"
import Header from "./components/Header/Header"

import ToBase from "./components/ToBase/ToBase"
import ToDirectory from "./components/ToDirectory/ToDirectory"

export default function Home() {
  return (
    <main  className={styles.container}>
      <header className={styles.header}>
        <Header/>
      </header>
      <article className={styles.base}>
        <ToBase/>
      </article>
      <article className={styles.directory}>
        <ToDirectory/>
      </article>
    </main>
  )
}
