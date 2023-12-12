"use client";

import React from "react";
import Pagebanner from "../../components/pageBanner/pagebanner";
import Container from "../../components/container";
import Image from "next/image";
import apolloClient from "../../config/client";
import { MainMenu, PagesQ } from "../../config/queries";
import Link from "next/link";
import { Content, Header } from "../../components/import";

const Foretagslan = ({ pageData }) => {
  const { shortcontent, pageBanner, affiliateCard, content } = pageData;
  return (
    <>
      
      <Pagebanner title={pageBanner?.title} info={pageBanner?.subTitle} />
      {shortcontent?.shortContent && (
        <Container className="my-20">
          <h3 className="text-2xl font-bold">{shortcontent?.shortTitle}</h3>
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: shortcontent?.shortContent }}
          />
        </Container>
      )}

      {/* affiliate cards  */}
      {affiliateCard?.card?.length > 0 && (
        <Container className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10">
            {affiliateCard?.card?.map((card, idx) => (
              <card
                className=" w-full shadow-xl flex rounded-lg overflow-hidden flex-col text-gray-200"
                key={idx}
              >
                <p className="font-semibold bg-primary rounded-t px-4 py-3">
                  {card?.sbTitle}
                </p>
                <div className="flex flex-row justify-center items-center pt-8 pl-12 pr-10 gap-3 border-b pb-10">
                  <Image
                    src={card?.logo?.mediaItemUrl}
                    width={230}
                    height={80}
                    alt="image"
                  />
                </div>

                <div className="px-4 gap-y-3 pt-5">
                  <h3 className="font-bold text-xl text-black text-center">
                  {card?.title}
                  </h3>
                  <div className="text-primary mt-4">
                    <p className="text-center">
                      {card?.info}
                    </p>
                  </div>
                  <div className="col-span-12 mt-5 mb-5 text-gray-100">
                  <Link href={card?.link}>
                    <button className="rounded hover:bg-teal-400 bg-secondary w-full py-3">
                      LÄS MER
                    </button>
                  </Link>
                  </div>
                </div>
              </card>
            ))}
          </div>
        </Container>
      )}

      {content && <Content data={pageData}/>}
      
    </>
  );
};

export default Foretagslan;

export const getServerSideProps = async ({ params }) => {
  const { pages } = params;
  const response = await apolloClient.query({
    query: PagesQ,
    variables: {
      id: `/${pages}/`,
    },
  });
  
  const pageData = response.data.page;
  return {
    props: {
      pageData,
    },
  };
};
