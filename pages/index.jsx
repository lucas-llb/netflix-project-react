import Head from 'next/head'
import HeaderNoAuth from '../src/components/homeNoAuth/headerNoAuth/index'
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
            <HeaderNoAuth/>
        </main>
        </>
    )
};

export default HomeNoAuth;