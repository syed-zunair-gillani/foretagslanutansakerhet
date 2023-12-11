import React from 'react'
import Container from '../container'
import Image from 'next/image'
import { FaCheck } from "react-icons/fa6";
import Link from 'next/link';

const ServicesCard = ({ data: { homePagedata } }) => {
     return (
          <section className='mt-10'>
               <Container>
                    <h3 className="mt-4 text-3xl mb-3 font-semibold text-primary">
                         <strong>Snabbfakta:</strong> Ränta På Företagslån, Företagslån Utan
                         UC, Företagslån Utan Säkerhet Eller Utan Borgen
                    </h3>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10'>
                         {homePagedata?.homePage?.affiliateSection?.map((card, idx) => (
                              <card class=" w-full shadow-xl flex rounded-lg overflow-hidden flex-col text-gray-200" key={idx}>
                                   <p class="font-semibold bg-primary rounded-t px-4 py-3">{card?.subTitle}</p>
                                   <div class="flex flex-row justify-center items-center pt-8 pl-12 pr-10 gap-3 border-b pb-10">
                                        <Link href={card?.link}><Image src={card?.logo?.mediaItemUrl} width={230} height={64} alt="image" className='h-16 object-contain' /></Link>
                                   </div>

                                   <div class="px-4 gap-y-3 pt-5 flex justify-between h-full flex-col gap-4">
                                        <div>
                                             <ul>
                                                  {
                                                       card?.features?.map((i, idx) => (
                                                            <li key={idx} className='text-secondary flex items-start gap-1 mt-2'>
                                                                 <div className='min-w-10'><FaCheck className="inline-block" /></div>
                                                                 <p>{i?.feature}</p>
                                                            </li>
                                                       ))
                                                  }
                                             </ul>
                                             <div class="text-primary mt-4" dangerouslySetInnerHTML={{ __html: card?.description }} />
                                        </div>

                                        <div class="pb-4">
                                             <Link href={card?.link}><button class="rounded hover:bg-teal-400 bg-secondary w-full py-3">Ansok Har</button></Link>
                                        </div>
                                   </div>
                              </card>
                         ))}
                    </div>
               </Container>
          </section>
     )
}

export default ServicesCard