import React, { useState, useRef } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import { RiArrowRightDownLine } from "react-icons/ri";
import Form from "../../components/Form";
import Modal from "react-modal";

import { AstronautContract } from "../../components/AstronautContract";
import Footer from "../../components/Footer";
import s from "../../components/primaryButton/primaryButton.module.css";
import PresaleProgressbar from "../../components/presaleprogressbar/PresaleProgressbar";
import { ModalBeanSpacer, ModalForWallet } from "../../components/Modals";
import Head from "next/head";

const style = {
  main_margin: "2xl:mx-40  xl:28 lg:mx-20 md:mx-10 mx-3",
  border_x: "border border-y-0",
  container_padding: "md:px-14 px-3 py-8",
  grid_container: "grid lg:grid-cols-2 grid-cols-1 gap-x-12 place-items-center",
  order_change: "lg:order-none order-first",
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "trasparent",
  },
  overlay: {
    background: "rgba(0,0,0,0.7)",
  },
};

const Buy = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [whichModal, setWhichModal] = useState("mint");
  const buyref = useRef(null);
  const crypto = useRef(null);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setWhichModal("mint");
    setIsOpen(false);
    // setBuyWithMatic(true);
  }
  return (
    <>
      <Head>
        <title>Buy</title>
      </Head>
      <div className="container mx-auto">
        {/* ------------------------------------------------------------------------------------------------ */}
        <div className={` ${style.main_margin} ${style.border_x}`}>
          <Navbar socialLinksbox={true} />

          {/* --------------------------------- how to buy -------------------- */}
          <div ref={buyref} className={`${style.container_padding} border`}>
            <h1 className="text-center py-5">/ HOW TO BUY /</h1>
            <div className="flex gap-x-8 lg:flex-row flex-col  lg:items-start items-center border border-x-0 border-[var(--mainColor)] py-8">
              <h1>01</h1>
              <div className=" md:py-0 py-2">
                <p>
                  To begin, make sure you have a MetaMask wallet installed on
                  your browser, or use one of the wallets supported by Wallet
                  Connect (we recommend Trust Wallet).
                </p>
                <p className="py-3">
                  Purchasing on a desktop browser will give you a smoother
                  purchasing experience. For this we recommend Metamask.
                </p>
                <p>
                  If you are purchasing on mobile, we recommend using Trust
                  Wallet and connecting through the in built browser (just copy
                  https://buy.astronaut.to into the Trust Wallet Browser).
                </p>
              </div>
              {/* <div> */}
              <Image
                src="./assets/images/buy1.svg"
                width={300}
                height={200}
                alt="buy 1"
                className="w-auto h-auto"
              />
              {/* </div> */}
            </div>
            {/* ---------- 02 */}
            <div
              className="flex gap-x-8 lg:flex-row flex-col  lg:items-start items-center py-8"
              style={{ borderBottom: "1px solid var(--mainColor)" }}
            >
              <h1>02</h1>
              <div>
                <p>
                  Once you have your preferred wallet provider ready, click
                  “Connect Wallet” and select the appropriate option. For mobile
                  wallet apps you will need to select “Wallet Connect”.
                </p>
                <p className="py-3">You will then have 3 options:</p>
                <div className="grid lg:grid-cols-3 grid-cols-1  gap-x-5 ">
                  <div className=" lg:py-0 py-2">
                    <h3 className="text-[var(--mainColor)]">
                      BUY NAUT WITH BNB
                    </h3>
                    <Image
                      src="/assets/images/buy2.svg"
                      width={300}
                      height={60}
                      alt="buy2"
                      className="w-auto h-auto"
                    />
                    <p>
                      Please ensure you have at least $50 of BNB in your wallet
                      before commencing the transaction. Type in the amount of
                      NAUT you wish to purchase (250 minimum). Click “Convert
                      BNB”. You will then be asked to approve the purchase
                      TWICE. The first approval is for the BNB contract and the
                      second is for the transaction amount. Please ensure you go
                      through both approval steps in order to complete the
                      transaction.
                    </p>
                  </div>
                  <div className=" lg:py-0 py-2">
                    <h3 className="text-[var(--mainColor)]">
                      BUY NAUT WITH ETH
                    </h3>
                    <Image
                      src="/assets/images/buy2.svg"
                      width={300}
                      height={60}
                      alt="buy2"
                      className="w-auto h-auto"
                    />
                    <p>
                      Once you have sufficient ETH in your wallet (if you do not
                      have ETH or USDT, please select option 1 to purchase ETH
                      first), you can now swap your ETH for NAUT. Type in the
                      amount of NAUT you wish to purchase (1,000 minimum) and
                      then click “Convert ETH”. Your wallet provider will ask
                      you to confirm the transaction and will also show you the
                      cost of gas.
                    </p>
                  </div>

                  <div className=" lg:py-0 py-2">
                    <h3 className="text-[var(--mainColor)]">
                      BUY NAUT WITH USDT
                    </h3>
                    <Image
                      src="/assets/images/buy2.svg"
                      width={300}
                      height={60}
                      alt="buy2"
                      className="w-auto h-auto"
                    />
                    <p>
                      Please ensure you have at least $50 of USDT in your wallet
                      before commencing the transaction. Type in the amount of
                      NAUT you wish to purchase (1,000 minimum). Click “Convert
                      USDT”. You will then be asked to approve the purchase
                      TWICE. The first approval is for the USDT contract and the
                      second is for the transaction amount. Please ensure you go
                      through both approval steps in order to complete the
                      transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* -------------03 */}
            <div className="flex gap-x-8 lg:flex-row flex-col  lg:items-start items-center py-8">
              <h1>03</h1>
              <div className="">
                <p>
                  Once the presale has concluded, you will be able to claim your
                  NAUT tokens. We will release details closer to the time,
                  however you will need to visit the main site
                  https://astronaut.io and click on the “Claim” button after the
                  presale has commenced.
                </p>
                <div className="my-16  flex  md:justify-start justify-center   ">
                  <PrimaryButton>
                    <button className="uppercase py-2 px-5 ">buy now !</button>
                  </PrimaryButton>
                </div>
              </div>
              <Image
                src="./assets/images/buy3.svg"
                width={300}
                height={200}
                alt="buy 3"
                className="w-auto h-auto"
              />
            </div>
          </div>
          {/* -------------------------------/ NEW TO CRYPTO? /--------------- */}
          <div ref={crypto} className={style.container_padding}>
            <h1 className="text-center py-5">/ NEW TO CRYPTO? /</h1>
            <Form />
          </div>
          {/* ------------------------------- / ASTRONAUT CONTRACT ---------------- / */}
          <AstronautContract />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Buy;
