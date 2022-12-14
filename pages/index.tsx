import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brailie</title>
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.logo}> <span className={styles.bracket} >&#91;</span> brailie <span className={styles.bracket} >&#93;</span> </div>
            <a href="mailto:idea@brailie.dev">GET IN TOUCH</a>
        </nav>
        <main className={styles.main}>
          <div className='hero'>
            <h1 className={styles.title}>
            Create, Launch Your Defi & Web3 Projects With Ease.
            </h1>
            <p className={styles.description}>
            Get the best of both worlds with Brailie as we are a development firm skilled in Web3 Blockchain Development, Full Stack Development, Graphic Design and Strategic Marketing that would ensure your Defi project is in great hands.
            </p>
          </div>
          
          <Image className={styles.image} src="/images/hero.png" height={400} width={443} alt="Vercel Logo"/>

        </main>
      </header>
      <div className={styles.circle}></div>
      <div className={styles.circle2}></div>
      <footer className={styles.footer}>
        <h2>Are You A Project Founder Working On A Project? </h2>
        <a href="mailto:idea@brailie.dev">idea@brailie.dev</a>
        <div className={styles.copy}>
          <small>&copy; 2022 brailie. All Right Reserved</small>
          <div><hr className={styles.line}/></div>
          <small>Follow us on <a href="https://twitter.com/Brailiedev"><FontAwesomeIcon icon={faTwitter} /></a></small>
        </div>

      </footer>
    </div>
  )
}

export default Home
