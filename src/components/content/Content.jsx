import React from "react";
import Container from "../container";
import { FastBusinessLoan, MoneyForBusiness } from "../import";
import RealizeYourDream from "./RealizeYourDream";
import ExpandBusiness from "./ExpandBusiness";
import InterestOnBusinessLoans from "./InterestOnBusinessLoans";
import Link from "next/link";
import { useRouter } from "next/router";

const Content = () => {
  const router = useRouter()
  return (
    <section className="mt-20">
      <Container className="flex mb-20">
        <div class="flex w-full gap-12">
          <aside class="h-screen sticky hidden md:block top-24 w-[28%] border-r">
            <ul className="">
              {sideTitle?.map((item, idx) => (
                <li
                  className={`font-semibold py-2 capitalize cursor-pointer hover:text-secondary ${router.asPath.replace('/','') === item.tag && 'text-secondary'}`}
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
            <MoneyForBusiness />
            <FastBusinessLoan />
            <RealizeYourDream />
            <ExpandBusiness />
            <InterestOnBusinessLoans />
          </main>
        </div>
      </Container>
    </section>
  );
};

export default Content;

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
