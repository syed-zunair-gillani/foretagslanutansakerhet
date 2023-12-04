import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Hero } from '../components/import'

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
      
    </div>
  )
}
