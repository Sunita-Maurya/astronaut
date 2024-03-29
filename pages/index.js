import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Header from "../components/Header";
const style = {
  main_margin: " lg:mx-20 md:mx-10 mx-3",
  border_x: "border border-y-0",
};

export default function Home() {
 
  return (
    <>
      <Head>
        <title>Astronaut</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/header.svg" />
      </Head>
      <div className="container mx-auto ">
        <div className={`${style.main_margin} ${style.border_x}`}>
          <Navbar/>
          {/*- homepage */}
          <Header />
          <Hero />
        </div>
      </div>
    </>
  );
}
