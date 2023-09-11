import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <title>Satria | Personal Portfolio</title>
      <meta name="description" content="Ini adalah halaman utama website saya." />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
