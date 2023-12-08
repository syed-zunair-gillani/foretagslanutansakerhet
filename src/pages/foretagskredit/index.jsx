import React from "react";
import Pagebanner from "../../components/pageBanner/pagebanner";
import Image from "next/image";
import Container from "../../components/container";
import Link from "next/link";

const Foretagskredit = () => {
  return (
    <>
      <Pagebanner
        title="Företagskredit - Checkkredit Företag"
        info="Alla vet väl vad ett kreditkort är? Företagskredit eller checkkredit till företag fungerar på liknande sätt, dvs du kan ha en buffert till ditt företag. Samma fördelar finns för företagskredit som med företagslån plus några fördelar till, men även några nackdelar."
      />
      <Container className="my-20 grid grid-cols-3 gap-5">
        {[1, 2, 3].map((item, id) => (
          <div
            key={id}
            className="border p-3 py-10 rounded-2xl flex items-center flex-col"
          >
            <Image src="/images/slogo.png" alt="img" width={180} height={180} />
            <p className="mt-4 font-semibold text-xl">Creditsafe</p>
            <button class="rounded hover:bg-teal-400 mt-6 text-white bg-secondary w-full py-3">
              SE MER
            </button>
          </div>
        ))}
      </Container>
     
      <Container className="flex mb-20">
        <div class="flex w-full gap-12">
          <aside class="h-screen sticky hidden md:block top-24 w-[28%] border-r">
            <ul className="">
            {sideTitle?.map((item, idx) => (
              <li
                className={`font-semibold py-2 capitalize cursor-pointer hover:text-secondary ${
                  //    router.asPath.replace("/", "") === item.tag &&
                  "text-secondary"
                }`}
                key={idx}
              >
                <Link href={item.tag}>
                  <span className="font-normal mr-1">{idx + 1}.</span>{" "}
                  {item.title}
                </Link>
              </li>
            ))}
            </ul>
          </aside>

          <main className="flex-1">
          <div>
          <h3 className="text-2xl font-bold">Fördelar Företagskredit:</h3>
          <ul className="mt-2 list-disc pl-4 text-lg">
            <li>Snabbare, använda pengarna direkt</li>
            <li>Du slipper amortera</li>
            <li>Flexibel återbetalning</li>
            <li>Tillgång till likvida medel</li>
            <li>Utan säkerhet</li>
            <li>Uppfyller ett företags kortsiktiga behov</li>
            <li>
              Möjlighet att teckna företagskredit hos en ny långivare och få
              fler valmöjligheter
            </li>
            <li>
              Om ditt företag har hög kreditvärdighet och god soliditet blir din
              ränta lägre än om ditt företag har dålig kreditvärdighet och går
              med förlust
            </li>
          </ul>
          <h3 className="text-2xl font-bold mt-3">Nackdelar Företagskredit:</h3>
          <ul className="mt-2 list-disc pl-4 text-lg">
            <li>
              Räntekostnaderna kan bli högre beroende på vad förmedlaren gör för
              bedömning om ditt företag
            </li>
            <li>2 olika avgifter: kontraktsränta och dispositionsränta</li>
            <li>Risk att spendera mer pengar än vad som finns tillgängligt</li>
          </ul>
          <h3 className="text-2xl font-bold mt-3">Företagskredit utan UC</h3>
          <p className="text-lg mt-3">
            En del lånegivare använder sig UC (Upplysningscentralen) när de
            utför en kreditupplysning på ditt företag, men långt ifrån alla.
            Problematiken med UC är att alla som använder UC kan se att du har
            ansökt om företagskredit, vilket kan försvåra dina möjligheter att
            få företagskrediter. Därför kan det vara en fördel att använda sig
            av de kreditgivare som gör anonyma kreditupplysningar, exempelvis
            kreditupplysningsföretagen CreditSafe och Bisnodes
            kreditupplysningstjänster.
          </p>
          <h3 className="text-2xl font-bold mt-3">Checkkredit Företag</h3>
          <p className="text-lg mt-3">
            Tidigare kallades företagskredit ofta checkkredit, ett annat namn
            som också används är kontokredit som är kopplad direkt till ert
            bankkonto.
          </p>
          <Image
            src="/images/imag.jpeg"
            alt="image"
            width={600}
            height={600}
            className="w-full mt-4"
          />
          <h3 className="text-2xl font-bold mt-3">
            QAPITALA ERBJUDER CHECKKREDIT
          </h3>
          <p className="text-lg mt-3">
            Qapitala har tagit fram en digital checkkredit utan säkerhet för
            företag. Kreditutrymmet som ni får på checkkrediten kan användas
            såsom det passar verksamheten bäst – helt rörligt och flexibelt. Ett
            bra alternativ till att behöva sälja era kundfordringar eller ta ett
            företagslån på en förutbestämt löptid. Efter godkänd checkkredit så
            använder ni enkelt ”mina sidor” på mobil eller dator för att lyfta
            ytterligare eller överblicka historik och avier.
          </p>
          <ul className="mt-2 list-disc pl-4 text-lg">
            <li>Betala enbart på nyttjat belopp</li>
            <li>Sveriges snabbaste kreditbeslut</li>
            <li>Inga säkerheter krävs</li>
            <li>Ingen årsavgift eller andra avgifter tillkommer</li>
            <li>Flexibel återbetalning</li>
            <li>Alltid utbetalning inom 24 timmar</li>
          </ul>
          <button class="rounded hover:bg-teal-400 mt-6 text-white bg-secondary w-full py-3">
            SE MER OM QAPITALA CHECKKREDIT
          </button>
          <h3 className="text-2xl font-bold mt-3">
            Företagskredit med betalningsanmärkning
          </h3>
          <p className="text-lg mt-3">
            Trots betalningsanmärkningar kan ditt företag få företagskredit hos
            flera kreditgivare. Kreditgivaren gör en helhetsbedömning av ditt
            företag och kontrollerar om ditt företag har god ekonomi. Om ditt
            företag drabbats av en eller flera betalningsanmärkningar så ses det
            givetvis som negativt i kreditgivarens ögon, därför är det extra
            viktigt för dig att undersöka dina valmöjligheter desto mera. Ta
            även kontakt med kreditgivaren och försök förklara ditt företags
            situation. Tips kika även på vårt artikel om Lendo företagslån
          </p>
        </div>
          </main>
        </div>
      </Container>
    </>
  );
};

export default Foretagskredit;

const sideTitle = [
  {
    title: "money for your business?",
    tag: "#MoneyForBusiness",
  },
  {
    title: "Fast business loans",
    tag: "#FastBusinessLoan",
  },
  {
    title: "Realize your dream",
    tag: "#RealizeYourDream",
  },
  {
    title: "Expand The Business",
    tag: "#ExpandBusiness",
  },
  {
    title: "Interest on business loans",
    tag: "#InterestOnBusinessLoans",
  },
];
