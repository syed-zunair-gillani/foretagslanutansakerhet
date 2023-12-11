import React from "react";
import Container from "../container";
import { FastBusinessLoan, MoneyForBusiness } from "../import";
import RealizeYourDream from "./RealizeYourDream";
import ExpandBusiness from "./ExpandBusiness";
import InterestOnBusinessLoans from "./InterestOnBusinessLoans";
import Link from "next/link";
import { useRouter } from "next/router";
import {TOC} from '../toc'

const Content = ({data:{homePagedata}}) => {
  console.log("🚀 ~ file: Content.jsx:11 ~ Content ~ homePagedata:", homePagedata)

  const router = useRouter()
  return (
    <section className="mt-20">
      <Container className="flex mb-20">
        <div class="flex w-full gap-12">
          <aside class="h-screen sticky hidden md:block top-24 pr-8 min-w-[25%] border-r">
           <TOC selector=".content" />  
          </aside>

          <main className="md:max-w-[75%] content _content" id="content">
            <div dangerouslySetInnerHTML={{ __html:homePagedata?.content }}/>
          </main>
        </div>
      </Container>
    </section>
  );
};

export default Content;

