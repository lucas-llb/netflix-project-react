import Head from 'next/head'
import HeaderNoAuth from '../src/components/homeNoAuth/headerNoAuth/'
import PresentationSection from '../src/components/homeNoAuth/presentationSection/'
import CardsSection from '../src/components/homeNoAuth/cardSection/'
import styles from '../src/styles/homeNoAuth.module.scss'

const HomeNoAuth = () => {
    return (
        <>
        <Head>
            <title>Netflix</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"/>
            <meta property="og:title" content="Netflix" key="title" />
            <meta name="description" content="A video streaming app" />
        </Head>
        <main>
            <div className={styles.sectionBackground}>
            <HeaderNoAuth/>
            <PresentationSection/>
            </div>
            <CardsSection/>
        </main>
        </>
    )
};

export default HomeNoAuth;