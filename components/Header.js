import React, { useRef } from "react";
import PresaleProgressbar from "./presaleprogressbar/PresaleProgressbar";
import PrimaryButton from "./primaryButton/PrimaryButton";
import { ModalForWallet } from "./Modals";
const Header = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className=" md:px-10 px-5  py-5">
      <div className="text-center md:my-10 my-5">
        <h1>/ PRESALE IS LIVE NOW / </h1>
        <p>BUY ASTRONAUT (NAUT) EARLY TO GET THE BEST PRICE PER TOKEN</p>
      </div>
      <div className="moons-bg ">
        <div className="flex xl:flex-row flex-col-reverse justify-end items-center ">
          {/* <img
            src="/assets/images/presale-hero.png"
            alt="hero"
            className="xl:w-[40%] aspect-square "
          /> */}
          <div className="outer-frame-bg  md:p-8 p-3  md:mr-10">
            <div className="flex justify-between items-center mt-2">
              <img src="/assets/icons/left-arrow-icon.png" alt="left arrow" />
              <span className="md:text-2xl text-lg font-samibold ">
                10D : 02H : 45M : 54S
              </span>
              <img src="/assets/icons/right-arrow-icon.png" alt="right arrow" />
            </div>
            <div className="py-3">
              <div className="flex justify-center gap-5   text-[var(--mainColor)]">
                <div>USDT Raised: $0,000,000 / $125,000,000</div>
              </div>
              <PresaleProgressbar />
            </div>
            <div className="inner-frame-bg  p-5 ">
              <div className="  translate-y-1/2  text-center flex justify-center  ">
                <h5 className="bg-[#000008] px-5">1 $NAUT = $0.06969</h5>
              </div>
              <div className="flex flex-wrap  gap-5 justify-center items-center border-2 py-8 border-x-0 border-[#38137A]">
                <div className="bg-[#38137A] flex gap-5 items-center w-28 p-2 h-12">
                  <img src="/assets/icons/eth.png" alt="eth" />
                  <span>ETH</span>
                </div>
                <div className="bg-[#38137A] flex gap-5  items-center w-28 p-2 h-12">
                  <img src="/assets/icons/usdt.png" alt="eth" />

                  <p>
                    USDT
                    <br /> ERC20
                  </p>
                </div>
                <div className="bg-[#38137A] flex gap-5 items-center w-28 p-2 h-12">
                  <img src="/assets/icons/bnb.png" alt="eth" />
                  <span>BNB</span>
                </div>
                <div className="bg-[#38137A] flex gap-5 items-center w-28 p-2 h-12">
                  <img src="/assets/icons/usdt1.png" alt="eth" />
                  <p>
                    USDT
                    <br />
                    BEP20
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-between  py-4 gap-5">
                <div>
                  <div className="py-2 flex  justify-between items-center ">
                    <span>Amount in ETH you pay</span>
                    <button className="text-[#8B2AD3] font-semibold">
                      Max
                    </button>
                  </div>
                  <input
                    type="number"
                    className="bg-transparent border w-full "
                    placeholder="0"
                  />
                </div>
                <div>
                  <div className="py-2 ">Amount in $NAUT you receive</div>
                  <input
                    type="number"
                    className="bg-transparent border w-full"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <PrimaryButton
                  mixcolora={"#000248"}
                  mixcolorb={"#000239"}
                  className="grid-cols-1  "
                >
                  <button
                    className="flex  justify-center items-center uppercase py-2 px-2 "
                    onClick={() => setModalOpen(true)}
                  >
                    connect wallet
                  </button>
                </PrimaryButton>
              </div>
              {modalOpen && <ModalForWallet setModalOpen={setModalOpen} />}
              <div className="flex justify-between items-center py-5">
                <a href="" className="underline">
                  How to buy ?
                </a>
                <a href="" className="underline">
                  New to crypto ?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
