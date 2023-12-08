import { Poppins } from 'next/font/google'
import { Content, Hero, Step } from '../components/import'
import ServicesCard from '../components/ServicesCard/ServicesCard'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
 })

export default function Home() {
  return (
    <div
      className={` ${poppins.className}`}
    >
      <Hero/>
      <Step />
      <ServicesCard/>
      <Content/>
      
    </div>
  )
}
