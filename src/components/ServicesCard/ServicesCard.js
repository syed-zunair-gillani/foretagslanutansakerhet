import React from 'react'
import Container from '../container'
import Image from 'next/image'

const ServicesCard = () => {
     return (
          <section className='mt-10'>
               <Container>
                    <h3 className="mt-4 text-3xl mb-3 font-semibold text-primary">
                         <strong>Snabbfakta:</strong> Ränta På Företagslån, Företagslån Utan
                         UC, Företagslån Utan Säkerhet Eller Utan Borgen
                    </h3>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10'>
                         {[1, 2, 3, 4, 5, 6].map((card, idx) => (
                              <card class=" w-full shadow-xl flex rounded-lg overflow-hidden flex-col text-gray-200" key={idx}>
                                   <p class="font-semibold bg-primary rounded-t px-4 py-3">Kompar Företagslån</p>
                                   <div class="flex flex-row justify-center items-center pt-8 pl-12 pr-10 gap-3 border-b pb-10">
                                        <Image src="/images/komparforetagslan.png" width={230} height={80} alt="image" />
                                   </div>


                                   <div class="px-4 gap-y-3 pt-5">
                                   
                                        <ul>
                                             {
                                                  [1, 2].map((i, idx) => (
                                                       <li key={idx} className='text-secondary flex items-start gap-1 mt-2'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                 <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <p>Lån upp till 5 miljoner! Blixtsnabb process lånet kan vara klart och utbetalt inom 24 timmar</p>
                                                       </li>
                                                  ))
                                             }
                                        </ul>
                                        <div class="text-primary mt-4">
                                             <p className='text-center'>Kompar är en relativt ny låneförmedlare som hjälper företag att få låneerbjudanden från 16+ långivare. Ansökan gör ni på 1 minut och utbetalningen kan ske inom 24 timmar.</p>
                                        </div>

                                   
                                        <div class="col-span-12 mt-5 mb-5 text-gray-100">
                                             <button class="rounded hover:bg-teal-400 bg-secondary w-full py-3">Ansok Har</button>
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