import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import { RiArrowRightDownLine } from "react-icons/ri";
const style = {
  main_margin: "2xl:mx-40 lg:mx-32 md:mx-10 mx-3",
  border_x: "border border-y-0",
  container_padding: "md:px-14 px-5 py-8",
  text_center: "text-center",
  flex_utility: "flex items-center  gap-x-8 border border-x-0 border-[#8B2AD3] py-3",

  logo: "h-20 lg:w-72 w-65 text-center   text-sm  bg-center  transition-all  bg-contain hover:bg-contain hover:bg-no-repeat bg-no-repeat flex justify-center  items-center",
};

const getastronaut = () => {
  return (
    <>
      <Head>
        <title>Get Astrounaut</title>
        <link rel="preload" as="image" href="/assets/getastronautimages/whitekucoin.svg"></link>
        <link rel="preload" as="image" href="/assets/getastronautimages/whiteuniswap.svg"></link>
        <link rel="preload" as="image" href="/assets/getastronautimages/whitegate.svg"></link>
        <link rel="preload" as="image" href="/assets/getastronautimages/whitemexc.svg"></link>
        <link rel="preload" as="image" href="/assets/getastronautimages/whitebitmart.svg"></link>
        <link rel="preload" as="image" href="/assets/getastronautimages/whiteshibaswaplogo.svg"></link>
      </Head>
      <div className="container mx-auto">
        <div className={`${style.main_margin} ${style.border_x}`}>
          <Navbar socialIncons={false} links={true} claimbtn={true} socialLinksbox={false} />
          <div className={style.container_padding}>
            <h1 className={style.text_center}>/ Get Astronaut /</h1>
            <p className={` py-5`}>
              Join the Astronaut ecosystem! You must first acquire $NAUT, the primary token in the ecosystem. It will be
              the connector between all things $NAUT. For instance, to get into any new ILO’s or purchase NFT’s you need
              to stake $NAUT or $NAUT/ETH LP in the staking dApp.
            </p>

            <div className="grid md:grid-cols-2 gap-5 grid-cols-1 lg:justify-start justify-center">
              <div
                className={` bg-[url('/assets/getastronautimages/kucoin.svg')]  hover:bg-[url('/assets/getastronautimages/whitekucoin.svg')] ${style.logo}`}
              >
                <label htmlFor="" className="pl-12">
                  Buy form KuCoin
                </label>
              </div>

              <div
                className={`${style.logo} bg-[url('/assets/getastronautimages/uniswap.svg')]  hover:bg-[url('/assets/getastronautimages/whiteuniswap.svg')]`}
              >
                <label htmlFor="" className="pl-12">
                  Buy form Uniswap
                </label>
              </div>
              <div
                className={`${style.logo} bg-[url('/assets/getastronautimages/gate.svg')]  hover:bg-[url('/assets/getastronautimages/whitegate.svg')]`}
              >
                <label htmlFor="" className="pl-12">
                  Buy form gate
                </label>
              </div>
              <div
                className={`${style.logo} bg-[url('/assets/getastronautimages/mexc.svg')]  hover:bg-[url('/assets/getastronautimages/whitemexc.svg')]`}
              >
                <label htmlFor="" className="pl-12">
                  Buy form MEXC
                </label>
              </div>
              <div
                className={`${style.logo} bg-[url('/assets/getastronautimages/bitmart.svg')]  hover:bg-[url('/assets/getastronautimages/whitebitmart.svg')]`}
              >
                <label htmlFor="" className="pl-12">
                  Buy form Bitmart
                </label>
              </div>
              <div
                className={`${style.logo} h-[90px] bg-[url('/assets/getastronautimages/shibaswaplogo.svg')]  hover:bg-[url('/assets/getastronautimages/whiteshibaswaplogo.svg')]`}
              >
                <label htmlFor="" className="pl-12">
                  Buy form SibaSwap
                </label>
              </div>
            </div>
            {/* ---------------price holder------------ */}

            <div className="grid grid-cols-2 gap-x-24 py-5">
              <div>
                <h2 className="border border-x-0 border-t-0">Price</h2>

                <h3>$0.00</h3>
              </div>
              <div>
                <h2 className="border border-x-0 border-t-0">Holder</h2>

                <h3>1.000</h3>
              </div>
            </div>
            <div className="w-[12rem] ">
              <PrimaryButton>
                <button className="capitalize flex items-center whitespace-nowrap py-2 px-5">
                  view smart contract
                  <RiArrowRightDownLine className={`text-[30px] text-[var(--mainColor)]`} />
                </button>
              </PrimaryButton>
            </div>
            {/* --------------------------- */}
            <div className="py-8">
              <h3 className="pt-3">Token Utility</h3>

              <div className="c border border-b-0 border-x-0 border-[var(--mainColor)]">
                <input className="input-box" type="checkbox" id="faq-1" />
                <div className="ques">
                  <label htmlFor="faq-1">
                    <span className="text-lg pr-5">01</span> LAUNCHPAD
                  </label>
                </div>
                <div className="p">
                  <p className="ans">This a very very simple accordion.</p>
                </div>
              </div>
              <div className="c">
                <input className="input-box" type="checkbox" id="faq-2" />
                <div className="ques">
                  <label htmlFor="faq-2">
                    <span className="text-lg pr-5">02</span>STAKING
                  </label>
                </div>
                <div className="p">
                  <p className="ans">Yes with pure CSS and HTML.</p>
                </div>
              </div>
              <div className="c">
                <input className="input-box" type="checkbox" id="faq-3" />
                <div className="ques">
                  <label htmlFor="faq-3">
                    <span className="text-lg pr-5">03</span>NFT MARKETPLACE
                  </label>
                </div>
                <div className="p">
                  <p className="ans">I was inpired by an article on css-tricks.link to article</p>
                </div>
              </div>
              <div className="c">
                <input className="input-box" type="checkbox" id="faq-4" />
                <div className="ques">
                  <label htmlFor="faq-4">
                    <span className="text-lg pr-5">03</span>NFT MARKETPLACE
                  </label>
                </div>
                <div className="p">
                  <p className="ans">I was inpired by an article on css-tricks.link to article</p>
                </div>
              </div>
            </div>
            {/* ------------------------- */}
          </div>
          <h4 className=" stroke-text xl:text-[4rem] lg:text-[3.2rem] text-[2rem]">ABOUT US \ ABOUT US \ ABOUT US</h4>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default getastronaut;
