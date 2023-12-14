import React from "react";
import { Container } from "../import";
import Link from "next/link";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import Image from "next/image";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Hero = ({data:{homePagedata}}) => {
  return (
    <>
      <main className="bg-primary pt-10">
        <Container className="md:pt-20 py-10 justify-center items-center md:grid grid-cols-2 gap-5">
          <div className="text-white ">
            <h1 className="md:leading-[60px] font-bold text-3xl md:text-5xl">
              {homePagedata?.pageBanner?.title}
            </h1>
            <p className="text-xl mt-3">{homePagedata?.pageBanner?.subTitle}</p>
            <ul className="mt-8 md:mt-5 text-lg flex flex-col gap-3 text-white">

              {
              homePagedata?.pageBanner?.featuresList.length > 0 &&
              homePagedata?.pageBanner?.featuresList?.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="hover:scale-110 transition-all duration-300 ease-linear flex justify-between items-center gap-4 bg-white text-primary  w-full max-w-[320px] px-4 rounded-md p-1"
                  >
                    <p>{item.list}</p>
                    <RiArrowDownDoubleLine className="text-xl" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Player
            autoplay
            loop
            src="/lottie/main2.json"
            style={{ height: "400px", width: "400px" }}
          ></Player>
          <div></div>
        </Container>
      </main>
      <section className="container mx-auto px-3 my-16">
        <div>
          <p>{homePagedata?.homePage?.excerpt}</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
