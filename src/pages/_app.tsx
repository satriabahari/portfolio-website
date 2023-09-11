import Footer from '@/components/footer'
import Header from '@/components/header'
import ThemeContextProvider from '@/context/theme-context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </ThemeContextProvider>

  )
}
