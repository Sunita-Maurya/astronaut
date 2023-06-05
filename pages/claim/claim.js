import React from "react";
import Image from "next/image";
import s from "../../components/primaryButton/primaryButton.module.css";
import { AstronautContract } from "../../components/AstronautContract";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import { RiArrowRightDownLine } from "react-icons/ri";
import Head from "next/head";
const style = {
  main_margin: "2xl:mx-40 lg:mx-32 md:mx-10 mx-3",
  border_x: "border border-y-0",
  container_padding: "md:px-14 px-5 py-12",
  grid_container: "grid lg:grid-cols-2 grid-cols-1 gap-x-12 place-items-center",
  order_change: "lg:order-none order-first",
};
const claim = () => {
  return (
    <>
    <Head><title>Claim</title></Head>
      <div className="container mx-auto">
        <div className={`${style.main_margin} ${style.border_x}`}>
          <Navbar
            socialIncons={false}
            links={false}
            claimbtn={false}
            socialLinksbox={true}
          />
          <div className={`${style.container_padding} `}>
            <div className={style.grid_container}>
              <div>
                <Image
                  src="/assets/images/Astronautclaim_hero.svg"
                  height={400}
                  width={500}
                  alt="claim_hero"
                  priority
                  // className={sty.movehero}
                />
              </div>

              <div>
                <h2 className="text-center py-5">CLAIM YOUR NAUT TOKENS</h2>
                <p className="md:text-start text-center">
                  Welcome to Astronaut the ultimate meta launchpad! The pre-sale
                  has now sold out. You can use this page to claim your
                  purchased NAUT tokens. Hit the connect wallet button below,
                  and you’ll be able to see your claimable token balance. Once
                  you’ve connected your wallet, hit claim and authorise the
                  transaction. You can use the token information to track your
                  NAUT in your wallet, or use the button below.
                </p>
                <div className="mt-8  flex lg:justify-start justify-center">
                  <PrimaryButton>
                    <button className="flex items-center py-2 px-3 uppercase ">
                      connect wallet
                      <RiArrowRightDownLine
                        className={`${s.arrowIcon} transiton-all text-[30px] text-[var(--mainColor)]`}
                      />
                    </button>
                  </PrimaryButton>
                </div>
              </div>
            </div>

            {/* ----------------------how to claim ----------------- */}
          </div>
          <div className={`${style.container_padding} border border-x-0`}>
            <h1 className="text-center  lg:py-12 py-5 ">/ HOW TO CLAIM /</h1>
            <div
              className={`${style.grid_container} md:text-start text-center`}
            >
              <div className="md:py-0 py-5">
                <h2 className="md:py-0 py-5">
                  ADDING ASTRONAUT TO YOUR WALLET
                </h2>
                <p>
                  Once you’ve claimed your NAUT tokens you’ll need to import the
                  tokens into your wallet. You can use the “Add NAUT to wallet”
                  button, or follow these instructions.
                </p>

                <p className="py-2">
                  First, in your chosen wallet click “import token”.
                </p>

                <p>
                  Then paste in the wallet address - you may also need to type
                  “NAUT” for the token symbol and specify 18 decimal places.
                </p>

                <p className="py-2">
                  Then hit “Add Custom Token” and you’ll now be able to see any
                  NAUT you’ve claimed in your wallet.
                </p>
              </div>
              <div className={style.order_change}>
                <Image
                  src="./assets/images/howtoclaim.svg"
                  height={400}
                  width={600}
                  alt="howtoclaim"
                />
              </div>
            </div>
          </div>
          <AstronautContract />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default claim;
