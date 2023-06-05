import React from "react";
import Image from "next/image";
import PrimaryButton from "../../primaryButton/PrimaryButton";
import ModalForWallet from "../walletConnect./ModalForWallet";
function ModalBeanSpacer({  closeModal }) {
  return (
    <div className="relative  my-5 mx-auto ">
      <div
        className="  px-8 pb-8 bg-no-repeat bg-contain  rounded-lg shadow-lg relative flex flex-col  outline-none focus:outline-none"
        style={{
          backgroundImage: "url('./assets/images/popupbg.png')",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="   lg:pt-5 pt-2">
          <button
            className="bg-transparent border-0  float-right"
            onClick={closeModal}
          >
            <span className="text-[#8B2AD3]  h-6 w-6 text-2xl block">
              <Image
                src="/assets/icons/X_button.png"
                height={20}
                width={20}
                alt="cut button"
              />
            </span>
          </button>
        </div>
        <div className="flex items-start justify-center  flex-col  md:px-20 py-5  rounded-t text-[#8B2AD3] ">
          <div className="text-center  mx-auto text-[var(--mainColor)]">
            {" "}
            <h3 className="md:text-2xl text-sm font=semibold uppercase">
              BE AN EARLY SPACER!
            </h3>
          </div>
          <div className="flex text-[var(--mainColor)] ">
            {" "}
            <Image
              src="/assets/icons/leftarrow.png"
              width={35}
              height={10}
              alt="left arrow"
              className=""
            />
            <p className=" md:px-5  ">1 UST = 0000.00 NAUT</p>
            <Image
              src="/assets/icons/rightarrow.png"
              width={35}
              height={10}
              alt="left arrow"
              className=""
            />
          </div>
        </div>
        <div
          className=" py-8 md:mx-12 px-8 flex-auto bg-contain bg-no-repeat  bg-center flex  text-center justify-center gap-8 items-center"
          style={{
            backgroundImage: "url('./assets/images/innerpopupbg.png')",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="text-center  flex flex-col justify-center items-center ">
            <p className="text-[var(--mainColor)]">0.00 B</p>
            <p className="text-[var(--mainColor)]">NAUT remaining</p>
            <p className="pb-5">Until 1 USDT = 0000.00 NAUT</p>
            <PrimaryButton
              mixcolora={"#000249"}
              mixcolorb={"#010131"}
              // onClick={}
            >
              <button className="py-2 px-5">CONNECT WALLET</button>
            </PrimaryButton>
            {/* <ModalForWallet /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBeanSpacer;
