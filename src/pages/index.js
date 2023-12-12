import { Poppins } from 'next/font/google'
import { Content, Hero, Step } from '../components/import'
import ServicesCard from '../components/ServicesCard/ServicesCard'
import { HomePageQ, MainMenu } from '../config/queries'
import apolloClient from '../config/client'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
 })

export default function Home(homePagedata, menus) {
  console.log("🚀 ~ file: index.js:14 ~ Home ~ homePagedata:", homePagedata)
  return (
    <div
      className={` ${poppins.className}`}
    >
      <Hero data={homePagedata}/>
      <Step data={homePagedata}/>
      <ServicesCard data={homePagedata}/>
      <Content data={homePagedata.homePagedata}/>
    </div>
  )
}


export const getServerSideProps = async () => {
  const response = await apolloClient.query({
    query: HomePageQ,
  });

  const homePagedata = response.data.page;
  return {
    props: {
      homePagedata,
    },
  };
}
