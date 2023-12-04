import React from 'react'

const FastBusinessLoan = () => {
     return (
          <section className='mt-10'>
               <h2 className='text-xl sm:text-2xl md:text-3xl font-bold'>Snabba företagslån</h2>
               <p className='mt-3'>Många vill ha snabba företagslån och det finns idag många som erbjuder just snabba företagslån som innebär att du inom ett dygn efter att du blivit godkänd som låntagare har pengar på ditt konto. Kreditgivaren kommer dock sannolikt vilja se en budget och tillhörande prognoser först. Detta för att kunna bilda sig en uppfattning om dina framtida resultat. Alla kreditgivare brukar dessutom ta en kreditupplysning innan det är dags att bevilja. De kan även vilja titta på ditt betalningsbeteende, i klartext om du släpat efter med dina betalning.</p>
               <h3 className='text-xl font-medium mt-4'>DET FINNS FRAMFÖRALLT TRE VANLIGA SÄTT ATT LÅNA PENGAR TILL FÖRETAG SOM DU BEHÖVER KÄNNA TILL</h3>
          </section>
     )
}

export default FastBusinessLoan


const commonWays = [
     {
          title: "Företagslån",
          detail: 'Precis som med ett vanligt privatlån så är ett företagslån oftast en fast summa som du väljer att betala av månadsvis under en viss tidsperiod. En skillnad är dock att lånebeloppet kan vara större. Långivarna brukar godkänna alla företagsformer. Men bolaget behöver vara registrerat och aktivt i Sverige. Du som ansöker behöver ha en ledande befattning i bolaget.'
     },
     {
          title: "Factoring",
          detail: 'Som alternativ till företagslån kan du välja att sälja eller belåna ditt företags fakturor för att slippa vänta på att kunden ska betala. Att belåna en faktura innebär i klartext att factoringbolaget tar fakturan som säkerhet. Ha i åtanke att även om du slipper kreditavgifter kan avgifterna vara höga.          '
     },
     {
          title: "Företagskredit",
          detail: 'Har du lång betaltid på dina fakturor eller behöver du täcka upp för eventuella oförutsedda avgifter kan det vara värt att överväga företagskredit. Det fungerar ungefär som ett privat kreditkort och är ett snabbt sätt att få loss pengar som kan användas i ditt bolag. Du betalar bara ränta på den del av krediten du använder och har alltid tillgång till ditt konto.          '
     }
]