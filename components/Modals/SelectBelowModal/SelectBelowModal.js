import React from "react";
import PrimaryButton from "../../primaryButton/PrimaryButton";
import Image from "next/image";
const SelectBelowModal = ({ closeModal }) => {
  return (
    <div
      className="  md:px-8 pb-8 bg-no-repeat bg-contain  rounded-lg shadow-lg relative flex flex-col  outline-none focus:outline-none"
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
      <div className="flex items-start justify-center  mx-auto flex-col  md:px-20 md:py-5  rounded-t text-[var(--mainColor)] ">
        <h3 className="md:text-2xl text-sm font=semibold uppercase">
          SELECT BELOW
        </h3>
        <p>1 UST = 0000.00 NAUT</p>
      </div>
      <div
        className=" py-8 md:px-8 flex-auto bg-contain bg-no-repeat  bg-center flex justify-center gap-8 items-center"
        style={{
          backgroundImage: "url('./assets/images/innerpopupbg.png')",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      >
        <div className=" flex justify-center flex-col items-center">
          <p className="text-center    text-[var(--mainColor)] font-[700] font-[Ubuntu]">
            You have 0 NAUT tokens.
          </p>
          <p className="text-center">Connected Wallet</p>
          <p className="pb-5">0x5F6D1634bC35B4bfB9007b5c338C2</p>
          <div className="pb-5 px-20 ">
            <PrimaryButton mixcolora={"#000126"} mixcolorb={"#01011a"}>
              <button className="py-2 px-5">BUY WITH ETH</button>
            </PrimaryButton>
          </div>
          <div className="pb-5 px-20">
            <PrimaryButton mixcolora={"#00023c"} mixcolorb={"#00012a"}>
              <button className="py-2 px-5">BUY WITH USDT</button>
            </PrimaryButton>
          </div>
          <div className="px-20">
            <PrimaryButton mixcolora={"#000249"} mixcolorb={"#00013f"}>
              <button className="py-2 px-12">CLAIM</button>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectBelowModal;
