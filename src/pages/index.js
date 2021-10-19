import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.chat}>
          <div className={styles.chatTitle}>
            <h1>Bot</h1>
            <h2>call center</h2>
            <figure className={styles.avatar}>
              <Image
                alt="Imagen Bot"
                src="https://res.cloudinary.com/drqezhb6l/image/upload/v1634615359/pexels-yan-krukov-8866795_w2ngww.jpg"
                width={'30px'}
                height={'30px'}
              />
            </figure>
          </div>
          <div className={styles.messages}>
            <div className={styles.messagesContent}></div>
          </div>
          <div className={styles.messageBox}>
            <textarea type="text" className={styles.messageInput} placeholder="Type message..."></textarea>
            <button type="submit" className={styles.messageSubmit}>Send</button>
          </div>

        </div>
        <div className={styles.bg}></div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
