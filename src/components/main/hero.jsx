import React from "react";
import { Container } from "../import";
import Link from "next/link";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const Hero = () => {
  return (
    <>
      <main className="bg-primary pt-20">
        <Container className="md:py-20 py-10 justify-center items-center md:grid grid-cols-2 gap-5">
          <div className="text-white ">
            <h1 className="md:leading-[60px] font-bold text-3xl md:text-5xl">
              Företagslån och företagskrediter snabbt och enkelt utan säkerhet
            </h1>
            <p className="text-xl mt-3">Nedan Hittar Du</p>
            <h3 className="mt-4 text-2xl"><strong>Snabbfakta:</strong> Ränta På Företagslån, Företagslån Utan UC, Företagslån Utan Säkerhet Eller Utan Borgen</h3>
          </div>
          <div>
          <ul className="mt-8 md:mt-5 text-lg flex flex-col gap-3 text-white justify-center md:items-center">
              {MianData.map((item, idx) => (
                <li key={idx} >
                  <Link href="#" className="hover:scale-110 transition-all duration-300 ease-linear flex justify-between items-center gap-4 bg-white text-primary w-[320px] px-4 rounded-md p-1">
                  <p>{item.name}</p>
                  <RiArrowDownDoubleLine className="text-xl"/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>
      <section className="mb-20 md:-mt-10">
        <div className="max-w-[780px] rounded-xl w-full mx-auto bg-gray-100 md:shadow-lg p-5">
        <p >Brist på kapital kan hindra vilket företag som helst från att utvecklas i rätt positiv riktning. Ibland är det helt avgörande om det finns investeringskapital och likvida medel för om en affärsidé ska kunna verkställas. <span className="text-primary font-medium">Hos företagslån utan</span> säkerhet har vi lösningarna både för långsiktiga investeringar och hastigt oplanerade kostnader genom marknadens mest attraktiva företagslån.</p>
        </div>
      </section>
    </>
  );
};

export default Hero;

const MianData = [
  {
    name: "Kompar Företagslån",
    link: "Läs om Kompar Företagslån här",
  },
  {
    name: "Lendo Företagslån",
    link: "Läs om Kompar Företagslån här",
  },
  {
    name: "Fedelta Företagslån",
    link: "Läs om Kompar Företagslån här",
  },
];
