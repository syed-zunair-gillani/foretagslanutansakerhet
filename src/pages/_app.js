import '../styles/globals.css'
import { Header } from '../components/import'
import Footer from '../components/footer/footer'
import apolloClient from '../config/client'
import { HomePageQ, MainMenu } from '../config/queries'

export default function App({ Component, pageProps, menus }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}


// export const getClientSide = async () => {
//   const response = await apolloClient.query({
//     query: HomePageQ,
//   });

//   const menus = response?.data?.menus?.nodes;  
//   return {
//     props: {
//       menus,
//     },
//   };
// }