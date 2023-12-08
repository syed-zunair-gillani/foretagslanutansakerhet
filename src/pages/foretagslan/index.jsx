import React from "react";
import Pagebanner from "../../components/pageBanner/pagebanner";
import Container from "../../components/container";
import Image from "next/image";

const Foretagslan = () => {
  return (
    <>
      <Pagebanner
        title="Läs Allt Om Företagslån Utan Säkerhet Här"
        info="Vi Jämför Företagslån Utan Säkerhet, Med Säkerhet, Utan Borgen Och Utan UC, Så Att Ni Ska Kunna Hitta Det Bästa Företagslånet."
      />
      <Container className="my-20">
        <h3 className="text-2xl font-bold">
          NEDAN PRESENTERAS AKTUELLA FÖRETAGSLÅN
        </h3>
        <p className="mt-2">
          År 2020 har marknaden för företagslån blomstrat. Det har kommit massor
          med nya långivare de senaste året. Det kan vara olika svårt att få tag
          i ett bra företagslån utan säkerhet. Med säkerhet är givetvis lättare,
          men många av de långivare vi recenserar tillhandahåller företagslån
          utan säkerhet och utan borgen. Kom dock ihåg att det kan finnas stora
          variationer i villkor och ränta. Därför försöker vi här guida er till
          det bästa företagslånet.{" "}
        </p>
      </Container>
      <Container className="mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10">
          {[1, 2, 3, 4, 5, 6].map((card, idx) => (
            <card
              class=" w-full shadow-xl flex rounded-lg overflow-hidden flex-col text-gray-200"
              key={idx}
            >
              <p class="font-semibold bg-primary rounded-t px-4 py-3">
                Kompar Företagslån
              </p>
              <div class="flex flex-row justify-center items-center pt-8 pl-12 pr-10 gap-3 border-b pb-10">
                <Image
                  src="/images/komparforetagslan.png"
                  width={230}
                  height={80}
                  alt="image"
                />
              </div>

              <div class="px-4 gap-y-3 pt-5">
                <h3 className="font-bold text-xl text-black text-center">
                  Kompar Företagslån – Låna Upp Till 7 Miljoner Kronor
                </h3>
                <div class="text-primary mt-4">
                  <p className="text-center">
                    Introduktion till Kompar Företagslån Det företagslån som
                    erbjuds under varumärket Kompar, igår i något som kallas för
                    138an Group AB. Kompar lanserades med en målsättning att
                    erbjuda ekonomisk hjälp{" "}
                  </p>
                </div>
                <div class="col-span-12 mt-5 mb-5 text-gray-100">
                  <button class="rounded hover:bg-teal-400 bg-secondary w-full py-3">
                    LÄS MER
                  </button>
                </div>
              </div>
            </card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Foretagslan;
