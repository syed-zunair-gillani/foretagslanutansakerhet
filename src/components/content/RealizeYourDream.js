import Image from 'next/image'
import React from 'react'

const RealizeYourDream = () => {
  return (
    <section id="RealizeYourDream">
          <h2  className='text-xl sm:text-2xl md:text-3xl font-bold'>Förverkliga din dröm</h2>
          <p className='my-3'>Drömmer du om ett liv som egen företagare? Eller har du en jättebra affärsidé? Förverkliga dina drömmar genom att ansöka om ett företagslån! Vi och många banker vill att det ska vara möjligt för alla att kunna gå sin egen väg och göra det med hundra procent. Det går snabbt att skicka in ansökan och ni får fort svar för att slippa vänta på utdragna överläggningar. Det ska inte vara krångligt att försöka förverkliga sin vision, därför är ansökningsprocessen snabb och effektiv så du kan fokusera på det du vill göra – starta och driva företaget.</p>
          <Image src="/images/dollar.jpeg" alt="image" width={500} height={300} className='w-full'/>
          <p className='my-3'>Ett företagslån skiljer sig inte direkt mycket från ett privatlån förutom att det är för företag och ekonomiska föreningar istället för privatpersoner. Ofta har företagslån större lånebelopp och kortare återbetalningstid än privatlån och detta är såklart olika hos alla banker. Hos vissa banker kan verksamheten få en individuellt anpassad återbetalningstid för att passa perfekt. I likhet till privatlån är företagslån utan säkerhet minst lika enkelt att ansöka om, på några minuter kan ansökan vara klar och inskickad för att sedan följas upp av eventuell betalning till företaget inom några dagar.</p>
          <p>De flesta företag och ekonomiska föreningar kan ansöka om företagslån – enskild firma, aktiebolag, handelsbolag bland annat. Olika banker har självklart olika alternativ och det är alltid positivt att jämföra företagslån hos flera banker för att bättre få en överblick om vilket som passar er och er verksamhet bäst. Det kostar oftast inget att ansöka och vid beviljning kan pengarna vara på kontot inom några dagar! Tveka inte och satsa på drömmen en gång för alla.</p>
          <Image src="/images/finans.jpeg" alt="image" width={500} height={300} className='w-full mt-3'/>
    </section>
  )
}

export default RealizeYourDream