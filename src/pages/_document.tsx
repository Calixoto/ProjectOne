import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <title>Sanet</title>
                <Head>
                    <meta name="google-site-verification" content="5aniM9cVheg0GY_YcEgygUWsD1oyo3wHSKIC7zkyI4I" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/images/logosanetsolo.svg" type="logo sanet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}