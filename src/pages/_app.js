import '@/styles/globals.css'
import { Header } from '../components/import'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
