import '../scss/styles.global.scss'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer.js'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Meta />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
