import Document, {Head, Html, Main, NextScript} from 'next/document'
import Meta from "../components/Meta"

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Meta/>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
