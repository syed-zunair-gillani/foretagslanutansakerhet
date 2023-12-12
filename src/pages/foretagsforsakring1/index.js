import React from 'react'
import Pagebanner from '../../components/pageBanner/pagebanner'
import Container from '../../components/container'
import Link from 'next/link'
import ReactPlayer from 'react-player'

const Foretagsforsakring = () => {
  return (
    <>
     <Pagebanner
          title="Företagsförsäkring"
          info="Företag behöver idag en företagsförsäkring för en massa olika saker. Allt från ansvarsförsäkring till att täcka företagskonstruktioner med mera. Det är ofta mycket förvirring om vilken försäkring ditt företag behöver, särskilt när fler och fler företag använder sina hem för sitt kontor.          "
     />
     <Container className="my-20">
          <h3 className='text-2xl font-bold'>Här är en praktisk lista över de viktigaste typerna av företagsförsäkringar du behöver för ditt företag, samt varför du behöver försäkringen för att bli framgångsrik och stämmer överens med olika företagslagar.</h3>
          <h4 className='text-xl font-bold mt-4'>ANSVARSFÖRSÄKRING FÖR FÖRETAG</h4>
          <p className='text-lg mt-3'>Oavsett vilket företag, så behöver du en ansvarsförsäkring till ditt företag, även om ditt företag är baserat utifrån ditt hem. Denna försäkring täcker skador som du, dina produkter eller tjänster, eller dina anställda är inblandade i som orsakat (eller påstås orsakat) kroppsskada eller egendomsskada. Ersättning för småföretagare bör gå upp till tio miljoner kronor.</p>
          <h4 className='text-xl font-bold mt-4'>FASTIGHETSFÖRSÄKRING OCH/ELLER EGENDOMSFÖRSÄKRING</h4>
          <p className='text-lg mt-3'>Även om denna försäkring inte är obligatoriskt, om du äger en byggnad, utrustning, datorer eller nästan vad som helst som är relaterat till ditt företag, bör du titta på egendomsförsäkring. Försäkringen kommer att skydda dig i händelse av en katastrof, som exempelvis brand, och mot saker som vandalism, stöld och andra brott.</p>
          <h4 className='text-xl font-bold mt-4'>5. BILFÖRSÄKRING FÖR FÖRETAG</h4>
          <p className='text-lg mt-3'>Om ditt företag har fordon måste de vara försäkrade av verksamheten, oavsett om de används av anställda eller dig själv. Så länge dessa fordon används för att transportera människor, produkter eller utrustning, bör de vara försäkrade under din verksamhet med en bilförsäkring för företag. Försäkringen skyddar dig i händelse av skador eller kollisioner. Om dina anställda använder egna fordon för arbete, behöver du fortfarande en försäkring som skyddar verksamheten om något händer när fordonet används för kommersiella ändamål.</p>
          <h4 className='text-xl font-bold mt-4'>YRKESANSVARSFÖRSÄKRING ELLER YRKESFÖRSÄKRING</h4>
          <p className='text-lg mt-3'>Kan även kallas ”Fel och försummelseförsäkring”. Denna är nödvändig, då vi alla människor kan göra misstag, även i sitt yrke. Med yrkesförsäkring så skyddar du ditt företag i händelse av en misslyckad eller felaktig återgivning av utlovade tjänster. Om du eller ditt företag misslyckas med att göra vad som utlovats att göra kommer denna försäkring att hjälpa till att betala för skador som uppstått, vilket hjälper dig att ta ansvar, utan att äventyra företagets ekonomiska framtid.</p>
          <h4 className='text-xl font-bold mt-4'>AVBROTTSFÖRSÄKRING</h4>
          <p className='text-lg mt-3'>Denna försäkring kan täcka förlust av intjäningsmöjligheter och / eller affärsavbrott, samt extrakostnader och kommer att hjälpa dig när du återhämtar dig från den händelse som avbröt din normala affärsverksamhet.</p>
          <h4 className='text-xl font-bold mt-4'>KRISFÖRSÄKRING</h4>
          <p className='text-lg mt-3'>Försäkringen kan behövas om du drabbas av inbrott eller överfall i samband med arbetet och behöver behandling hos psykolog.</p>
          <h4 className='text-xl font-bold mt-4'>INKOMSTFÖRSÄKRING</h4>
          <h3 className='text-2xl font-bold'>Välja inkomstförsäkring som egenföretagare</h3>
          <p className='text-lg mt-3'>Vill du ha en slags trygghet så är en inkomstförsäkring även ett utmärkt alternativ för dig som är egenföretagare. Ibland går inte allt som planerat. Att driva eget företag kan vara tufft och kräver mycket ansvar, många timmar kan behöva spenderas innan din verksamhet börjar bli lönsam. Med en inkomstförsäkring behöver du inte oroa dig och du kan satsa på dina affärsidéer, samt har en livlina att falla tillbaka på om du i framtiden skulle bli arbetslös.</p>
          <strong>Att tänka på! En inkomstförsäkring är en värdefull investering även för dig som driver eget.</strong>
          <p className='text-lg mt-3'>Alla inkomstförsäkringar gäller inte för egenföretagare, så det måste du kolla upp i förväg. Vi rekommenderar här Accept inkomstförsäkring som du kan teckna som egenföretagare. Försäkringen är framförallt intressant för alla med en inkomst över 25 000 kr/mån. Om du funderat på att teckna inkomstförsäkring så bör du göra det omgående, eftersom de flesta kräver att du måste ha varit medlem minst 12 månader för att kunna utnyttja inkomstförsäkringen.</p>
          <Link className='text-blue-400 pt-4' href="#">BEGÄR GRATIS OFFERT!</Link>
          <div className='mt-5'>
          <ReactPlayer url='https://www.youtube.com/watch?v=NH6D3zQ1WuM' />
          </div>
          <h4 className='text-xl font-bold mt-4'>ÖVERFALLSFÖRSÄKRING</h4>
          <p className='text-lg mt-3'>Denna försäkring går in mer på de fysiska aspekterna om du skulle drabbas av fysiskt våld exempelvis. Överfalls, tandskador, invaliditets och dödsfallsersättning kan ingå i denna försäkringen.</p>
          <h4 className='text-xl font-bold mt-4'>HJÄLP VID ID-STÖLD</h4>
          <p className='text-lg mt-3'>Detta är en typ av försäkring som blivit vanligare och vanligare de senaste åren eftersom så många ID-stölder inträffar. Du kan få juridisk hjälp för att bli av med oriktiga pengakrav exempelvis.</p>
          <h4 className='text-xl font-bold mt-4'>RESEFÖRSÄKRING VID TJÄNSTERESOR</h4>
          <p className='text-lg mt-3'>Den gäller bland annat för förlust eller skada på bagaget, både dina personliga saker och företagets och dessutom är du skyddad om du skulle bli sjuk, överfallen eller råka ut för ett olycksfall på resan.</p>
          <h4 className='text-xl font-bold mt-4'>A-KASSA</h4>
          <p className='text-lg mt-3'>Du som är företagare bör även vara med i akassan utifall du skulle bli arbetslös. Vid sånt tillfälle kan du låta ditt företag ligga vilandes, medan du har möjlighet att få ersättning från akassan istället</p>

     </Container>
    </>
  )
}

export default Foretagsforsakring